<?php
/**
 * @Author: name
 * @Date:   2019-02-15 14:09:59
 * @Last Modified by:   name
 * @Last Modified time: 2019-02-15 18:13:28
 */
class userctrl {
    private $req;
    private static $model = null;
    function __construct($req, $dbInfo, $type) {
        $this -> req = $req;
        if (!self :: $model) {
            self :: $model = new $type($dbInfo);
        }
    }
    function addctrl() {
        $code = $this -> req['code'];
        $pwd = $this -> req['pwd'];
        if ($this :: $model -> getoneuser($code) > 0) {
            return array('msg' => "$code" . '用户已存在', 'state' => 0);
        } else {
            $res = $this :: $model -> adduser($code, $pwd);
            if ($res) {
                return array('msg' => "注册成功", 'state' => 1);
            } else {
                return array('msg' => "注册失败", 'state' => 0);
            }
        }
    }
    function searchctrl() {
        $code = $this -> req['code'];
        $pwd = $this -> req['pwd'];
        $res = $this :: $model -> getuser($code, $pwd);
        if ($res) {
            return array('data' => $res, 'msg' => "登录成功", 'state' => 1);
        } else {
            return array('msg' => "账号或密码有误", 'state' => 0);
        }
    }
    function updatectrl() {
        $code = $this -> req['code'];
        $pwd = $this -> req['pwd'];
        $name = $this -> req['name'];
        $res = $this :: $model -> updateuser($code, $name, $pwd);
        if ($res) {
            return array('msg' => "修改信息成功", 'state' => 1);
        } else {
            return array('msg' => "修改信息失败", 'state' => 0);
        }
    }
    function getonectrl() {
        $code = $this -> req['code'];
        $res = $this :: $model -> getsingle($code);
        if ($res) {
            return array('data' => $res, 'msg' => "修改信息成功", 'state' => 1);
        } else {
            return array('msg' => "修改信息失败", 'state' => 0);
        }
    }
}