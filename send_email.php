<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST["firstName"] . " " . $_POST["lastName"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];

    $to = "taverasr@gmail.com"; // Tu dirección de correo electrónico
    $headers = "From: $email";
    $message = "Nombre: $fullName\n\n";
    $message .= "Correo Electrónico: $email\n\n";
    $message .= "Asunto:\n$subject";

    // Envía el correo electrónico
    mail($to, "Nuevo mensaje de contacto", $message, $headers);

    echo "Mensaje enviado con éxito. ¡Gracias por contactarnos!";
} else {
    echo "Hubo un error al enviar el mensaje.";
}
?>
