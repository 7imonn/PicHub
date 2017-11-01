<?php
/* Prüfen ob ein Log-Eintrag gesendet wurde
   Wenn ja, diese in DB speichern
    */
if (isset($_POST['eintrag'])){
    insert_entry($mysqli, $_SESSION['userid'], $_POST['eintrag'], date("Y-m-d H:i:s"));
}
?>