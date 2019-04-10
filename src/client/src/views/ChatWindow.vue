<template>
    <div class="chat-window talk_window">
        <div class="windows_top">
            <div class="windows_top_box">
                <span>早安无恙</span>
                <ul class="window_icon">
                    <li>
                        <a href>
                            <img src="images/icon/icon7.png">
                        </a>
                    </li>
                    <li>
                        <a href>
                            <img src="images/icon/icon8.png">
                        </a>
                    </li>
                    <li>
                        <a href>
                            <img src="images/icon/icon9.png">
                        </a>
                    </li>
                    <li>
                        <a href>
                            <img src="images/icon/icon10.png">
                        </a>
                    </li>
                </ul>
                <div class="am-btn am-btn-success" data-am-offcanvas="{target: '#doc-oc-demo3'}"></div>
                <!-- 侧边栏内容 -->
                <div id="doc-oc-demo3" class="am-offcanvas">
                    <div class="am-offcanvas-bar am-offcanvas-bar-flip">
                        <div class="am-offcanvas-content">
                            <p>
                                <a href="http://music.163.com/#/song?id=385554" target="_blank">网易音乐</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--聊天内容-->
        <div class="windows_body">
            <div class="office_text" style="height: 100%;">
                <ul class="content" id="chatbox">
                    <li class="me">
                        <img src="images/own_head.jpg" title="金少凯">
                        <span>疾风知劲草，板荡识诚臣</span>
                    </li>
                    <li class="other">
                        <img src="images/head/15.jpg" title="张文超">
                        <span>勇夫安知义，智者必怀仁</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="windows_input" id="talkbox">
            <div class="input_icon">
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
            </div>
            <div class="input_box">
                <textarea name rows cols id="input_box"></textarea>
                <button id="send">发送（S）</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>