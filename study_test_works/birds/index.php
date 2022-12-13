<!DOCTYPE html>
<html lang="en">
    <head><meta charset="UTF-8">
    <title>тестируем формы</title>
    <style>
    body {
        margin-left: 70px;
        }
    .button {
        text-decoration: none;
        color: rgb(12, 12, 12);
        background-color:  rgba(218, 203, 148, 0.933);
        text-transform: uppercase;
        font-weight: 500;
        text-align: center;
        padding: 20px 30px;
        border-radius: 5px;
    }
    p {
        margin: 30px 0 30px 0;
    }
    ul {
        display: flex;  
    }
    nav {
        display: flex;
        align-items: center;
        font-weight: 600;
        text-transform: uppercase;
        color: rgb(243, 199, 199);    
    }
    li {
        list-style-type: none; 
        margin-left: 50px;
    }
   
    img {
        width: 500px;
        height: 300px;
    }
    .logo {
        width:70px;
        height:70px;
    }
    </style>
   </head>

<body>
    <header>
        <nav>
           
            <div>
                <a href="T1.html"><img class="logo" src="logo.jpg"></a></div>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Reviews</a></li>
        </ul>
    </nav>
       <p><a class="button" href="adaptive.html">Переход на адаптивный сайт</a></p>

        
    </header>
                   
    <div><img src="Imagee.jpg" alt="Image"></div>

    <form action="<?php echo "action_form_new.php";?>" method="POST">
        <p>Введите ваше имя: <input type="text" placeholder="Обязательное поле" required name="firstname" value="" relative></p>
        <p>Введите ваше фамилию: <input type="text" placeholder="Обязательное поле" require name="lastname" value=""></p>
        <p>Введите ваш e-mail: <input type="email" placeholder="name@gmail.com" required name="email" value=""></p>
        <p>Введите текст сообщения: <BR/><textarea name="message" cols="50" rows="4" placeholder="Не более 200 символов"></textarea><br/>
        <input type="submit" value="Отправить"></p>
        
    </form>
   
</body>
</html>