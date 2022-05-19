<?php
    $name = ?_POST['name'];
    $visitor_email = ?_POST['email'];
    $message = ?_POST['subject'];

    $email_from = 'victorfentonaguilar@gmail.com';
    $email_subject = "New Form Submission | Personal Website";
    $email_body = "User Name: $name. \n".
                    "User Email: $visitor_email. \n".
                        "User Message: $message. \n";

    $to = "victorfenton.a@hotmail.com";

    $headers = "From: <$email_from> \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: Contact.html");
?>