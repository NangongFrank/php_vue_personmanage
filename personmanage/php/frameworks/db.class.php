<?php
/**
 * @Author: name
 * @Date:   2019-02-15 10:45:32
 * @Last Modified by:   name
 * @Last Modified time: 2019-02-15 16:44:57
 */
class dbModel {
    private static $link= null;
    function __construct($con) {
        if (!self :: $link) {
            $link = mysqli_connect("{$con['host']}:{$con['port']}", $con['name'], $con['pwd'], $con['dbname']);
            if ($link) {
                mysqli_set_charset($link, $con['charset']);
                self :: $link = $link;
                return self :: $link;
            } else {
                return new Exception('数据库配置信息有误!', 99);
            }
        } else {
            return self :: $link;
        }
    }
    function __distruct() {
        mysqli_close(self :: $link);
    }
    function geterror() {
        return mysqli_error(self :: $link);
    }
    function ctrlautocommit() {
        return mysqli_autocommit(self :: $link, false);
    }
    function ctrlcommit() {
        return mysqli_commit(self :: $link);
    }
    function ctrlrollback() {
        return mysqli_rollback(self :: $link);
    }
    function getrows($sql) {
        $result = mysqli_query(self :: $link, $sql);
        $res = array();
        if ($result) {
            while($row = mysqli_fetch_assoc($result)) {
                $res[] = $row;
            }
            mysqli_free_result($result);
            return $res;
        }
    }
    function getrow($sql) {
        $result = mysqli_query(self :: $link, $sql);
        if ($result) {
            $row = mysqli_fetch_assoc($result);
            mysqli_free_result($result);
            return $row;
        }
    }
    function exec($sql) {
        return mysqli_query(self :: $link, $sql);
    }
    function getone($sql) {
        $result = mysqli_query(self :: $link, $sql);
        if ($result) {
            $filed = mysqli_fetch_row($result);
            mysqli_free_result($result);
            return $filed[0];
        } else {
            return false;
        }
    }
}