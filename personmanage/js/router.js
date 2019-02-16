/*
* @Author: name
* @Date:   2019-02-14 15:22:25
* @Last Modified by:   name
* @Last Modified time: 2019-02-15 17:45:46
*/

const router = new VueRouter({
    routes: [{
        path: '/',
        redirect: '/login'
    }, {
        path: '/home',
        redirect: '/home/datacount'
    }, {
        path: '/user',
        redirect: '/user/now'
    }, {
        path: '/login',
        component: tools.index.login
    }, {
        path: '/recode',
        component: tools.index.recode
    }, {
        path: '/regest',
        component: tools.index.regest
    }, {
        path: '/home',
        component: tools.manage.home,
        children: [{
            path: 'station',
            component: tools.manage.station
        }, {
            path: 'department',
            component: tools.manage.department
        }, {
            path: 'viewdaily',
            component: tools.manage.viewdaily
        }, {
            path: 'dailydone',
            component: tools.manage.dailydone
        }, {
            path: 'cashallot',
            component: tools.manage.cashallot
        }, {
            path: 'wageslog',
            component: tools.manage.wageslog
        }, {
            path: 'datacount',
            component: tools.manage.datacount
        }]
    }, {
        path: '/user',
        component: tools.user.index,
        children: [{
            path: 'now',
            component: tools.user.now
        }, {
            path: 'old',
            component: tools.user.old
        }, {
            path: 'redo',
            component: tools.user.redo
        }]
    }]
})