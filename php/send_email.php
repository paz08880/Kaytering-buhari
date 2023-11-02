<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'phpmailer/vendor/autoload.php';

$data = json_decode(file_get_contents('php://input'), true);

$full_name = $data['name'];
$email = $data['email'];
$phone = $data['phoneNN'];
$message = $data['text'];

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                       //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'cafeinwebsiteapp@gmail.com';           //SMTP username
    $mail->Password   = 'ulrd bcas pmqb ubsg';                  //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($email, '');
    //$mail->addAddress('joe@example.net', 'Joe User');     //Add a recipient
    $mail->addAddress('paz08880@gmail.com');               //Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);   
    $mail->CharSet = 'UTF-8';                               
    $mail->Subject = 'הזמנה חדשה מהאתר - בוכרי עתיק בוטיק';
    $mail->Body    = 'שם לקוח: '.$full_name;
    $mail->Body    .= '<br> אימייל: '.$email;
    $mail->Body    .= '<br> מספר פלאפון: '.$phone;
    $mail->Body    .= '<br> תוכן ההודעה: '.$message;

    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    $response = array('status' => 'success', 'message' => 'dsadsa');
    echo json_encode($response);
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    $response = array('status' => 'error', 'message' => 'The email has not send, try again');
}
?>