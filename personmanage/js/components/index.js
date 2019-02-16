/*
* @Author: name
* @Date:   2019-02-14 15:27:33
* @Last Modified by:   name
* @Last Modified time: 2019-02-15 18:20:23
*/
tools.index = {
    login: {
        template: `<div class="login">
            <form autocomplete="off" @keydown.enter="login">
                <div>
                    <label>
                        账号:&ensp;
                        <input type="text" placeholder="账号" v-model="name">
                    </label>
                </div>
                <div>
                    <label>
                        密码:&ensp;
                        <input type="password" placeholder="密码" v-model="pwd">
                    </label>
                </div>
                <div class="login-btn" style="padding-left: 2em">
                    <button type="button"
                    @click="login">登录</button>
                    <button type="button"
                    @click="regest">前往注册</button>
                </div>
            </form>
        </div>`,
        methods: {
            regest() {
                var vm = this
                vm.$router.push({path: "/regest"})
            },
            login() {
                var vm = this,
                    tmd = tools.methods,
                    code = vm.name,
                    pwd = vm.pwd,
                    type = 'user',
                    ref = 'search'
                vm.$http.post('./php/index.php',
                    {code, pwd, type, ref},
                    {emulateJSON: true}).then(function(res) {
                        res = res.data
                        if (res.state == 1) {
                            layer.msg(res.msg,
                                {time: 1000}, function() {
                                    tmd.setUserInfo(res.data.name, res.data.code, res.data.type)
                                    if (res.data.type == 1) {
                                        vm.$router.push("/user")
                                    } else {
                                        vm.$router.push("/home")
                                    }
                            })
                        } else {
                            layer.msg(res.msg, {time: 1000})
                        }
                    })
                //vm.$router.push({path: "/home"})

            }
        },
        data() {
            return {
                name: "",
                pwd: "",
            }
        }
    },
    regest: {
        template: `<div class="login">
            <form autocomplete="off">
                <div>
                    <label>
                        &ensp;&ensp;&ensp;&ensp;账号:&nbsp;
                        <input type="text" placeholder="账号" v-model="code">
                    </label>
                </div>
                <div>
                    <label>
                        &ensp;&ensp;&ensp;&ensp;密码:&nbsp;
                        <input type="password" placeholder="密码" v-model="pwd">
                    </label>
                </div>
                <div>
                    <label>
                        确认密码:&nbsp;
                        <input type="password" placeholder="确认密码" v-model="rePwd">
                    </label>
                </div>
                <div class="login-btn" style="padding-left: 4em">
                    <button type="button"
                    @click="regest">注册</button>
                    <button type="button"
                    @click="$router.push('/')">返回</button>
                </div>
            </form>
        </div>`,
        methods: {
            regest() {
                var vm = this,
                    pwd = vm.pwd,
                    rePwd = vm.rePwd,
                    code = vm.code,
                    type = 'user',
                    ref = 'add'
                if (!code || code.length > 20) {
                    layer.msg('账号不能为空或者长度高于20位', {time: 1000})
                    return
                }
                if (!pwd || pwd != rePwd) {
                    layer.msg('密码不能为空或者两次密码不一致', {time: 1000})
                    return
                }
                vm.$http.post("./php/index.php",
                    {type, ref, pwd, code},
                    {emulateJSON: true}).then(function(res) {
                        res = res.data
                        layer.msg(res.msg, {time: 1000})
                    })
            }
        },
        data() {
            return {
                code: "",
                pwd: "",
                rePwd: "",
            }
        }
    },
    recode: {
        template: `<div class="login">
            <form autocomplete="off">
                <div>
                    <label>
                        &ensp;&ensp;用户名:&nbsp;
                        <input type="text" placeholder="新用户名" v-model="name">
                    </label>
                </div>
                <div>
                    <label>
                        &ensp;&ensp;&ensp;&ensp;密码:&nbsp;
                        <input type="password" placeholder="新密码" v-model="pwd">
                    </label>
                </div>
                <div>
                    <label>
                        确认密码:&nbsp;
                        <input type="password"placeholder="确认新密码" v-model="rePwd">
                    </label>
                </div>
                <div class="login-btn" style="padding-left: 4em">
                    <button type="button"
                    @click="recode">确定修改</button>
                    <button type="button"
                    @click="$router.back()">返回</button>
                </div>
            </form>
        </div>`,
        methods: {
            recode() {
                var vm = this,
                    pwd = vm.pwd,
                    rePwd = vm.rePwd,
                    name = vm.name,
                    type = 'user',
                    ref = 'update',
                    tmd = tools.methods,
                    info = tmd.getUserInfo(),
                    code = info.code
                if (!name || name.length > 20) {
                    layer.msg('用户名不能为空或者长度高于20位', {time: 1000})
                    return
                }
                if (!pwd || pwd != rePwd) {
                    layer.msg('密码不能为空或者两次密码不一致', {time: 1000})
                    return
                }
                vm.$http.post("./php/index.php",
                    {type, ref, pwd, name, code},
                    {emulateJSON: true}).then(function(res) {
                        res = res.data
                        layer.msg(res.msg, {time: 1000}, function() {
                            tmd.setUserInfo(name, code, info['type'])
                            vm.$router.back()
                        })
                    })
            }
        },
        data() {
            return {
                name: "",
                pwd: "",
                rePwd: "",
            }
        },
        created() {
            var vm = this,
                type = "user",
                ref = 'getone',
                tmd = tools.methods,
                info = tmd.getUserInfo(),
                code = info.code
            vm.$http.post("./php/index.php",
                {type, ref, code},
                {emulateJSON: true}).then(function(res) {
                    res = res.data
                    vm.name = res.data.name
                })
        }
    }
}