<?php
// Configurações do banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vidortech2742622";

$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
$conn->select_db($dbname);

$sql = "CREATE TABLE IF NOT EXISTS vtc_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(120) NOT NULL,
    senha VARCHAR(255),
    fnome VARCHAR(30),
    lnome VARCHAR(30),
    celular VARCHAR(20),
    instagram VARCHAR(30),
    github VARCHAR(30),
    twitter VARCHAR(30)
)";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $conn->real_escape_string($_POST['email']);
    $senha = $conn->real_escape_string($_POST['pass']);
    $fnome = $conn->real_escape_string($_POST['fname']);
    $lnome = $conn->real_escape_string($_POST['lname']);
    $celular = $conn->real_escape_string($_POST['phone']);
    $instagram = $conn->real_escape_string($_POST['instagram']);
    $github = $conn->real_escape_string($_POST['github']);
    $twitter = $conn->real_escape_string($_POST['twitter']);

    $sql = "INSERT INTO vtc_users (email, senha, fnome, lnome, celular, instagram, github, twitter) VALUES ('$email', '$senha', '$fnome', '$lnome', '$celular', '$instagram', '$github', '$twitter')";
}
$conn->close();
?>
