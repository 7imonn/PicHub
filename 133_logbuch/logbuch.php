<?php 
session_start();

include "lib_dbfunctions.php";

/*
  DATENBANK VERBINDUNG ÖFFNEN
  */

//                    host         user       passwort       datenbankname
$mysqli = new mysqli("localhost", "logbuch", "gibbiX12345", "logbuch");
if (!connection_ok($mysqli)) {
    echo "Datenbank nicht erreich!";
    exit(1);
}

/*
  Abwickeln der Anmeldung
  */
include "lib_auth.php";
?>
<!DOCTYPE html>
<html lang="de">
 <head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="login.css">
  <link rel="stylesheet" href="logbuch.css">
  <title>Logbuch</title>
 </head>
 <body>
  <h1>Logbuch</h1>
   <aside>
    Eingeloggt als <b><?php echo $_SESSION['userid'] ?></b>
    <form action="login.php" method="get">
     <input type="submit" value="Abmelden" name="abmelden">
    </form>
   </aside>
  <h2>Eintrag erfassen</h2>
   <section>
    <form action="logbuch.php" method="post">
     <textarea name="eintrag" rows="4" cols="50"></textarea><br />
     <input type="submit" value="Eintragen">
    </form>
   </section>
  <h2>Einträge lesen</h2>
<?php

/* Prüfen ob ein Log-Eintrag gesendet wurde
   Wenn ja, diese in DB speichern
    */
include "lib_insert.php";

/* Unabhängig davon ob ein neuer Eintrag gemacht wurde, sollen die existierenden Einträge angezeigt werden.
   Zeige Inhalt der Tabelle an (max. 100 Reihen)
   */
include "lib_select.php";

?>
 </body>
</html>
<!-- Autor: Boris Däppen, August 2016, ict Modul 133 -->