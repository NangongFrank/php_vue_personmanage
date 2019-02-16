<?php
/**
 * @Author: name
 * @Date:   2019-02-15 14:09:59
 * @Last Modified by:   name
 * @Last Modified time: 2019-02-15 18:12:56
 */
class user extends dbModel {
    function getoneuser($code) {
        return $this -> getone("select count(*) from user where user_code = '$code'");
    }
    function adduser($code, $pwd) {
        return $this -> exec("insert into user(user_name, user_code, user_pwd, regest_time) values('$code', '$code', '$pwd', now())");
    }
    function updateuser($code, $name, $pwd) {
        return $this -> exec("update user set user_name = '$name', user_pwd = '$pwd' where user_code = '$code'");
    }
    function getuser($code, $pwd) {
        return $this -> getrow("select user_name as name, user_code as code, user_type as type from user where user_code = '$code' and user_pwd = '$pwd'");
    }
    function getsingle($code) {
        return $this -> getrow("select user_name as name from user where user_code = '$code'");
    }
}