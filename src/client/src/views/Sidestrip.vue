<template>
    <div class="sidestrip">
        <div class="am-dropdown" data-am-dropdown>
            <!--头像插件-->
            <div class="own_head am-dropdown-toggle"></div>
            <div class="am-dropdown-content">
                <div class="own_head_top">
                    <div class="own_head_top_text">
                        <p class="own_name">
                            彭于晏丶plus
                            <img src="images/icon/head.png" alt>
                        </p>
                        <p class="own_numb">微信号：123456</p>
                    </div>
                    <img src="images/own_head.jpg" alt>
                </div>
                <div class="own_head_bottom">
                    <p>
                        <span>地区</span>江西 九江
                    </p>
                    <div class="own_head_bottom_img">
                        <a href>
                            <img src="images/icon/head_1.png">
                        </a>
                        <a href>
                            <img src="images/icon/head_2.png">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!--三图标-->
        <div class="sidestrip_icon">
            <a id="si_1" style="background: url(images/icon/head_2_1.png) no-repeat;"></a>
            <a id="si_2"></a>
            <a id="si_3"></a>
        </div>

        <!--底部扩展键-->
        <div id="doc-dropdown-justify-js">
            <div class="am-dropdown" id="doc-dropdown-js" style="position: initial;">
                <div class="sidestrip_bc am-dropdown-toggle"></div>
                <ul class="am-dropdown-content" style>
                    <li>
                        <a
                            href="#"
                            data-am-modal="{target: '#doc-modal-1', closeViaDimmer: 0, width: 400, height: 225}"
                        >意见反馈</a>
                        <div class="am-modal am-modal-no-btn" tabindex="-1" id="doc-modal-1">
                            <div class="am-modal-dialog">
                                <div class="am-modal-hd">
                                    Modal 标题
                                    <a
                                        href="javascript: void(0)"
                                        class="am-close am-close-spin"
                                        data-am-modal-close
                                    >&times;</a>
                                </div>
                                <div class="am-modal-bd">Modal 内容。本 Modal 无法通过遮罩层关闭。</div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <a href="#">备份与恢复</a>
                    </li>
                    <li>
                        <a href="#">设置</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>