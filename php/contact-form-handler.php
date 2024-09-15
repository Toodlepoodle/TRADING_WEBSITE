<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Validate the input
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Send an email (example)
        $to = "sayandasgupta97@gmail.com";
        $subject = "Contact Form Submission from $name";
        $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message.";
        }

        // You can also store the data in a database if required
        // Connect to database and insert data here
    } else {
        echo "Please fill in all required fields.";
    }
}
?>
