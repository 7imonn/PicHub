<?php 
session_start();

/* Dummy-Code für Logout */
if (isset($_GET['abmelden'])) {
    $_SESSION['userid'] = NULL;
}

?>
<!DOCTYPE html>
<html lang="de">
 <head>
  <meta charset="utf-8">
  <title>Logbuch Login</title>
  <script src="jquery-3.1.0.js"></script>
  <script src="login.js"></script>
  <link rel="stylesheet" href="login.css">
 </head>
 <body>
  <h1>Logbuch</h1>
  <h2>Bitte einloggen</h2>
  <form action="logbuch.php" method="post">
   <input id="registration" type="checkbox" name="neureg" onclick='pw_validation(this);' />
   Ich möchte mich neu registrieren
   <table id="logintable">
    <tr>
     <td>Name:</td>
 <!-- Der Listener dieses Inputs ist JS-Only implementiert, daher ist die onkeyup-Variante auskommentiert -->
 <!--<td><input type="text" name="name" id="username" class="login_input" size="50" onkeyup="checkName()"></td>-->
     <td><input type="text" name="name" id="username" class="login_input" size="50"></td>
    </tr>
    <tr>
     <td>Passwort:</td>
     <td><input type="password" name="passwort" id="userpw" class="login_input" size="50" onkeyup="checkPw()"></td>
    </tr>
    <tr id='pwrepeat'>
     <td></td><td></td>
    </tr>
    <tr>
     <td><input type="submit" value="Anmelden"></td>
     <td></td>
    </tr>
   </table>
  </form>
  <br \><br \>
  <div id="errorcontainer"></div>
  <br \><br \>
  <footer><span id="author">© 2016 Boris Däppen</span></footer>
 </body>
</html>
<!-- Autor: Boris Däppen, August 2016, ict Modul 133 -->