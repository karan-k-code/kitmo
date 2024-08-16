<?php
$sever   = "localhost";
$username = "root";
$password = "";
$dbname = "logindeta";

$conn = mysqli_connect($sever,$username,$password,$dbname);


if (!$conn) {
    // die("Connection failed: " . mysqli_connect_error());
    echo "Connection failed: ";
}

$name  =$_POST['name'];
$phone =$_POST['phone'];
$email =$_POST['email'];
$password =$_POST['pass'];

$squ ="INSERT INTO `user data`(`name`, `phone`, `email`, `password`) VALUES ('$name','$phone','$email','$password')";

$result = mysqli_query($conn , $squ);

if($result){
    echo "Data inserted";
}
else{
    echo "Data not inserted";
}