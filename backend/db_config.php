<?php
$host = "localhost"; // This should remain as localhost if you're running XAMPP on your local machine.
$db = "defi_db"; // Your database name.
$user = "root"; // Your MySQL username.
$pass = "Nischala7*"; // Replace 'your_password' with your actual MySQL password.

$conn = new mysqli($host, $user, $pass, $db);

// Check the connection.
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
