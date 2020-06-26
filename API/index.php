<?php
header('Content-Type: application/json');

// echo "<pre>";
// print_r($_POST);
// echo "</pre>";

// die();

// $name = $_POST['name'];
// $email = $_POST['email'];

// if($name == '' && $email == ''){
//   $msg = 'Вы присылаете пустые данные';
//   $status = false;
// }
// else{
// 	$msg = 'Все успешно';
// 	$status = true;
// 	//записывает в бд
// }

$msg = 'Все успешно';
$status = true;

$something = array(
  "msg" => $msg,
  "status" => $status
);

echo json_encode($something);