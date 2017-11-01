<?php
// Wenn Login-Parameter ankommen, User und PW überprüfen
if (isset($_POST['name']) and isset($_POST['passwort'])) {
    
    // Parameter gegen SQL-Injection absichern!
    $user = $mysqli->real_escape_string($_POST['name']);
    $pass = $mysqli->real_escape_string($_POST['passwort']);

    if( is_auth($mysqli, $user, $pass) ) {
        $_SESSION['userid'] = $user;
    }
    else {
        $_SESSION['userid'] = NULL;
    }
}

if (! $_SESSION['userid']) {
    header("Location: login.php");
    exit();
}
?>