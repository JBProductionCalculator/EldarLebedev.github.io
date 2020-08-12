<?php
if (isset($_POST['submit'])) { 
      $name = $_POST['name'];
      $email = $_POST['email'];
      $ToEmail = 'jaramillovelasquez@gmail.com';
      $EmailSubject = 'Site contact form '; 
      $headers = 'From: ' . $email . "\r\n" .
             'Reply-To: ' . $email . "\r\n" .
            'X-Mailer: PHP/' . phpversion(); 

      $MESSAGE_BODY = "Name: ".$_POST["name"]."<br>"; 
      $MESSAGE_BODY .= "Email: ".$_POST["email"]."<br>"; 
      $MESSAGE_BODY .= "Subject:".$_POST['subject']."<br />";  
      $MESSAGE_BODY .= "Message: ".nl2br($_POST["message"])."<br>"; 

      if(@mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader))
      {
        echo "<script>alert('Mail was sent !');</script>";
        echo "<script>document.location.href='mail.php'</script>";
      }
      else
      {
        echo "<script>alert('Mail was not sent. Please try again later');</script>";
      }
     }
?>
