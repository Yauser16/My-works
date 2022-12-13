<html>
<head>
    <style>
        body {
            display: inline-block;
            height:200px;
            border: black solid 2px;
            color: blue; 
            margin-left: 50px;
            font-size: 1.2em;
            font-weight: 400;
        }
    </style>  
</head>    
       
    <body>
    <?php
    if ($_SERVER ["REQUEST_METHOD"] == "POST") {
        $firstname = $_POST["firstname"];        
        $lastname = $_POST["lastname"];
        $email = $_POST["email"];
        $message = $_POST["message"];
    }             
    
    echo "Здравствуйте, ". $firstname ."! <br>Вы передали следующие сведения: <br>Вас зовут - ". $firstname ." ". $lastname . "<br>Адрес Вашей электронной почты - " . $email . "<br>Ваше сообщение - " . $message; ?>  
    </body>
</html>