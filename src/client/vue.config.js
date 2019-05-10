module.exports = {
    publicPath: '',
    pages: {
        index: {
            template: 'public/index.html',
            entry: 'src/main.js',
            filename: 'index.html'
        },
        register: {
            template: 'public/register.html',
            entry: 'src/register.js',
            filename: 'register.html'
        }
    },
    chainWebpack: config => {
        [config.plugin(`html-index`), config.plugin(`html-register`)].forEach(
            value =>
                value.tap(args => {
                    args[0].minify || (args[0].minify = {});
                    args[0].minify.removeAttributeQuotes = false;
                    return args;
                })
        );
    },
    devServer: {
        ...(process.env.VUE_APP_SERVER_URL && {
            proxy: {
                '/api': {
                    target: process.env.VUE_APP_SERVER_URL,
                    pathWrite: {
                        '/api': ''
                    },
                    changeOrigin: true,
                },
            },
        }),
    },
};
