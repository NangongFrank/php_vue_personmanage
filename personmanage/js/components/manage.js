/*
* @Author: name
* @Date:   2019-02-14 16:39:34
* @Last Modified by:   name
* @Last Modified time: 2019-02-14 17:23:56
*/

tools.manage = {
    home: {
        template: `<div class="manage-home">
            <ul class="home-left">
                <li
                v-for="value in ctrlList">
                    <router-link
                    :to="value.path"
                    v-text="value.name"
                    ></router-link>
                </li>
            </ul>
            <div class="home-right">
                <router-view></router-view>
            </div>
        </div>`,
        data() {
            return {
                ctrlList: [{
                    path: '/home/datacount',
                    name: '数据统计'
                }, {
                    path: '/home/viewdaily',
                    name: '查看考勤'
                }, {
                    path: '/home/dailydone',
                    name: '考勤补签'
                }, {
                    path: '/home/wageslog',
                    name: '奖惩记录'
                }, {
                    path: '/home/station',
                    name: '岗位管理'
                }, {
                    path: '/home/department',
                    name: '部门管理'
                }, {
                    path: '/home/cashallot',
                    name: '工资分配'
                }]
            }
        }
    },
    station: {
        template: `<div class="home-station">岗位管理</div>`
    },
    department: {
        template: `<div class="home-department">部门管理</div>`
    },
    viewdaily: {
        template: `<div class="home-viewdaily">查看考勤</div>`
    },
    dailydone: {
        template: `<div class="home-dailydone">考勤补签</div>`
    },
    cashallot: {
        template: `<div class="home-cashallot">工资分配</div>`
    },
    wageslog: {
        template: `<div class="home-wageslog">奖惩记录</div>`
    },
    datacount: {
        template: `<div class="home-datacount">数据统计</div>`
    }
}