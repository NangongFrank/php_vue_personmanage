<?php
/**
 * @Author: name
 * @Date:   2019-02-15 14:03:57
 * @Last Modified by:   name
 * @Last Modified time: 2019-02-15 17:10:03
 */
require_once './config.php';
require_once "./frameworks/db.class.php";

$path = "./models/";
$ctrl = "./controls/";
$moreName = ".class.php";

// type 确定类
// ref 确定方法

# 数据交互
if(!empty($_POST)) {
    if (isset($_POST['type']) && isset($_POST['ref'])) {
        $type = $_POST['type'];
        $ref = $_POST['ref'];
        $req = array();
        foreach ($_POST as $key => $value) {
            if ($key == 'type' || $key == 'ref') {
                continue;
            } else {
                $req[$key] = $value;
            }
        }
        $model = $path . $type . $moreName;
        $control = $ctrl . $type . $moreName;
        require_once $model;
        require_once $control;
        $ctrlName = $type . 'ctrl';
        $ctrlFn = $ref . 'ctrl';
        $p = new $ctrlName($req, $dbInfo, $type);
        $res = $p -> $ctrlFn();
        echo json_encode($res);
    } else {
        $res = array('msg' => '参数有误', 'state' => 0);
        echo json_encode($res);
    }
}

# 获取数据
if(!empty($_GET)) {
    if (isset($_GET['type']) && isset($_GET['ref'])) {
        $type = $_GET['type'];
        $ref = $_GET['ref'];
        $req = array();
        foreach ($_GET as $key => $value) {
            if ($key == 'type' || $key == 'ref') {
                continue;
            } else {
                $req[$key] = $value;
            }
        }
        $model = $path . $type . $moreName;
        $control = $ctrl . $type . $moreName;
        require_once $model;
        require_once $control;
        $ctrlName = $type . 'ctrl';
        $ctrlFn = $ref . 'ctrl';
        $p = new $ctrlName($req, $dbInfo, $type);
        $res = $p -> $ctrlFn();
        echo json_encode($res);
    } else {
        $res = array('msg' => '参数有误', 'state' => 0);
        echo json_encode($res);
    }
}





