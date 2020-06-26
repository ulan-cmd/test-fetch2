<?php
$name = $_POST['name'];

$obj = array(
   "name" => $name
);

echo json_encode($obj);