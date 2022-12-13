<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Отработка PHP</title>
</head>
<body>
    <form action="<?php echo htmlspecialcharts($_SERVER ["PHP_SELF"]);?>" method="post">
<label>Введите ваше имя: <input type="text" name="firstname" value="" required></label>
<label>Введите ваше фамилию: <input type="text" name="lastname" value="" required></label><br>
<label>Введите ваш e-mail: <input type="email" name="email" value="" required></label><br>
<input type="submit" value="Отправить">


</form>

<?php
$firstname = $lastname = $email = "";
if ($_SERVER["REQUEST METHOD"] == "POST") {
    $firstname = text_input($_POST["firstname"]);
    $lastname = text_input($_POST["lastname"]);
    $email = text_input($_POST["email"]);

}
function text_input ($data) {
    $data = trim($data); /* удаляет все не нужные знаки в строке */
    $data = stripslashes($data); /* убирает обратный слэш */
    $data = htmlspecialchars($data); /* запрещает теги */
    return $data; 
}
?> 

    
</body>
</html>