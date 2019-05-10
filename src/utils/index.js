const path = require('path');
const vscode = require('vscode');
const fs = require('fs');
const Axios = require('axios');

const loadHtml = (context, relaPath) => {
    const absPath = path.join(context.extensionPath, relaPath);
    const absDir = path.dirname(absPath);
    return fs
        .readFileSync(absPath, 'utf-8')
        .replace(
            /(<link.+?href="|<script.+?src="|<img.+?src=")(.+?)"/g,
            (m, $1, $2) => {
                return (
                    $1 +
                    vscode.Uri.file(path.resolve(absDir, $2))
                        .with({
                            scheme: 'vscode-resource'
                        })
                        .toString() +
                    '"'
                );
            }
        );
};

// 创建axios实例

const service = (() => {
    // @ts-ignore
    const service = Axios.create({
        baseURL: process.env.SERVER_URL,
        timeout: 20000000 // 请求超时时间
    });

    //默认 正确响应为200-300 添加304 为正确码
    service.defaults.validateStatus = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };

    // request拦截器
    service.interceptors.request.use(config => config, e => Promise.reject(e));

    // respone拦截器
    service.interceptors.response.use(
        response => response.data.data.data || {},
        e => Promise.reject(e)
    );
    return service;
})();

// export default service;

module.exports = {
    loadHtml,
    service
};
