/*
* @Author: name
* @Date:   2019-02-14 16:39:39
* @Last Modified by:   name
* @Last Modified time: 2019-02-15 09:26:00
*/

tools.user = {
    index: {
        template: `<div class="user-index">
            <ul class="index-left">
                <li
                v-for="value in ctrlList">
                    <router-link
                    :to="value.path"
                    v-text="value.name"
                    ></router-link>
                </li>
            </ul>
            <div class="index-right">
                <router-view></router-view>
            </div>
        </div>`,
        data() {
            return {
                ctrlList: [{
                    path: '/user/now',
                    name: '签到'
                }, {
                    path: '/user/old',
                    name: '记录'
                }, {
                    path: '/user/redo',
                    name: '补签'
                }]
            }
        }
    },
    now: {
        template: `<div class="user-now">
            <a href="javascript:;"
            @click="action">签到</a>
        </div>`,
        methods: {
            action() {
                layer.msg('签到', {time: 1000})
            }
        }
    },
    old: {
        template: `<div class="user-old">打卡记录</div>`
    },
    redo: {
        template: `<div class="user-redo">补签</div>`
    },
}