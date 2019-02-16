/*
* @Author: name
* @Date:   2019-02-15 10:37:57
* @Last Modified by:   name
* @Last Modified time: 2019-02-15 17:37:26
*/

tools.methods = {
    setUserInfo(name, code, type) {
        var obj
        if (!name || !code || !type) {
            localStorage.removeItem('userInfo')
        } else {
            obj = {name, code, type}
            localStorage.userInfo = JSON.stringify(obj)
        }
    },
    getUserInfo() {
        if (localStorage.userInfo) {
            return JSON.parse(localStorage.userInfo)
        } else {
            return ""
        }
    }
}