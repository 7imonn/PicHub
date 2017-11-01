<?php
/* Unabhängig davon ob ein neuer Eintrag gemacht wurde, sollen die existierenden Einträge angezeigt werden.
   Zeige Inhalt der Tabelle an (max. 100 Reihen)
   */
//echo "  <table border=1>\n";
$entries = select_entries($mysqli, 20);
foreach ($entries as $entry) {
	print "   <article>";

	print "<div class='time'>"                                                          . $entry['zeitpunkt']    . "</div>"
	    . "<div class='author'>"                                                        . $entry['name']         . "</div>"
	    . "<div class='message'>" . str_replace(array("\r", "\n"), '', nl2br(htmlentities($entry['nachricht']))) . "</div>";
	
	print "</article>\n";
    //print "   <tr><td>" . $entry['zeitpunkt'] . "</td><td><b>" . $entry['name'] . "</b></td><td>" . nl2br($entry['nachricht']) . "</td></tr>\n";
}
//echo "  </table>\n";
?>