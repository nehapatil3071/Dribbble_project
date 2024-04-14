<?php

$name = $_POST['name'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

$conn = new mysqli('localhost', 'root', '', 'tes');

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} else {
  $stmt = $conn->prepare("INSERT INTO registration (name, username, email, password) VALUES (?, ?, ?, ?)");
  $stmt->bind_param("ssss", $name, $username, $email, $password);
  if ($stmt->execute()) {
    echo "Registration successful...";
  } else {
    echo "Error: " . $stmt->error;
  }
  $stmt->close();
  $conn->close();
}
?>
