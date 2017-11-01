/* Kleine Demo für jQuery
   Färbt die Input-Felder ein, wenn man rein klickt
*/
$(document).ready(function() {
    // http://api.jquery.com/category/events/ 
    $(".login_input").focus(function() {
        // Auch wichtige Methode: addClass
        // $(this).addClass("green");
        $(this).css("background-color", "azure");
    });

    $(".login_input").focusout(function() {
        $(this).css("background-color", "white");
    });
});

/* Reine Javaskript-Variante welche kein HTML-Aufruf und kein jQuery braucht
   Nützliche Links:
       http://stackoverflow.com/questions/9899372/pure-javascript-equivalent-to-jquerys-ready-how-to-call-a-function-when-the
       http://stackoverflow.com/questions/21442659/addeventlistener-not-working-with-onclick
       http://stackoverflow.com/questions/1033398/execute-javascript-when-page-has-fully-loaded
*/
document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("username").onkeyup = checkName;
    // Weitere Aufruf-Variante, der Vollständigkeit wegen:
    //document.getElementById("username").addEventListener("keyup", checkName);
});

/* Prüft den Namen auf eine Valide Email-Adresse.
   Färbt das Inputfeld ein und setzte eine Fehlermeldung ins HTML
*/
function checkName() {
    var input_name = document.getElementById("username");

    var regex_name = /^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,3}$/;

    // Bei leerem Input, Fehlermeldungen löschen und nichts mehr prüfen
    if (input_name.value.length == 0) {
        document.getElementById("errorcontainer").innerHTML = '';
        return;
    }

    // Prüfung auf Länge und Regex, entsprechende Fehler-Ausgabe
    if (input_name.value.length <= 50) {
        input_name.style.backgroundColor = "";
        document.getElementById("errorcontainer").innerHTML = '';

        if (regex_name.test(input_name.value)) {
          input_name.style.backgroundColor = "";
          document.getElementById("errorcontainer").innerHTML = '';
        }
        else {
          input_name.style.backgroundColor = "#ff6600";
          document.getElementById("errorcontainer").innerHTML = render_error("Der Name ist keine gültige Email.");
        }
    }
    else {
        input_name.style.backgroundColor = "#ff6600";
        document.getElementById("errorcontainer").innerHTML = render_error("Der Name darf nicht länger als 50 Zeichen sein.");
    }
}

/* Prüft das Passwort auf korrekte Eingaben.
   Färbt im Fehlerfall Input ein und setzt Meldungen ins HTML
*/
function checkPw() {
    var input_pw = document.getElementById("userpw");

    // Bei leerem Input, Fehlermeldungen löschen und nichts mehr prüfen
    if (input_pw.value.length == 0) {
        document.getElementById("errorcontainer").innerHTML = ''; 
        return;
    }

    // Definition der Passwort Regeln, Zeichenklassen
    var reg_letters = /[a-zA-Z]/;                // Buchstaben
    var reg_numbers = /[0-9]/;                   // Zahlen
    var reg_signs   = /[+\-_,.:!?]/;             // Sonderzeichen
    var reg_forbidden = /[^a-zA-Z0-9+\-_,.:!?]/; // Verbotene Zeichen

    // Testen des Passwortes auf erlaubte Zeichen, speichern als Boolean
    var bool_letters = reg_letters.test(input_pw.value);
    var bool_numbers = reg_numbers.test(input_pw.value);
    var bool_signs   = reg_signs.test(input_pw.value);

    // Testen auf verbotene Zeichen
    if (!reg_forbidden.test(input_pw.value)) {
        input_pw.style.backgroundColor = "";
        document.getElementById("errorcontainer").innerHTML = '';

        // Testen, dass mindestens zwei Zeichenklassen vertreten sind
        if (   ( bool_letters && bool_numbers )
            || ( bool_letters && bool_signs )
            || ( bool_signs   && bool_numbers )
        ) {
            input_pw.style.backgroundColor = "";
            document.getElementById("errorcontainer").innerHTML = '';

            // Dann auf die Länge des Passwortes prüfen (zu kurz)
            if (input_pw.value.length >= 8) {
                input_pw.style.backgroundColor = "";
                document.getElementById("errorcontainer").innerHTML = '';

                // Länge des Passwortes zu lang
                if (input_pw.value.length <= 20) {
                    input_pw.style.backgroundColor = "";
                    document.getElementById("errorcontainer").innerHTML = '';
                }
                else {
                    input_pw.style.backgroundColor = "#ff6600";
                    document.getElementById("errorcontainer").innerHTML = render_error("Passwort zu lang");
                }
            }
            else {
                input_pw.style.backgroundColor = "#ff6600";
                document.getElementById("errorcontainer").innerHTML = render_error("Passwort zu kurz");
            }
        }
        else {
            input_pw.style.backgroundColor = "#ff6600";
            document.getElementById("errorcontainer").innerHTML = render_error("Es müssen mindestes zwei Vertreter von Buchstaben, Zahlen oder Sonderzeichen im Passwort sein");
        }
    }
    else {
      input_pw.style.backgroundColor = "#ff6600";
      document.getElementById("errorcontainer").innerHTML = render_error("Unerlaubte Zeichen in Passwort");
    }
}

/* Prüft ob die Passwort-Wiederholung dem Original entspricht.
   Färbt im Fehlerfall Input ein und setzte Meldungen ins HTML
*/
function checkPwr() {
    var input_pw  = document.getElementById("userpw");
    var input_pwr = document.getElementById("userpwr");

    if (input_pw.value == input_pwr.value) {
      input_pwr.style.backgroundColor = "";
      document.getElementById("errorcontainer").innerHTML = '';
    }
    else {
      input_pwr.style.backgroundColor = "#ff6600";
      document.getElementById("errorcontainer").innerHTML = render_error("Die Wiederholung entspricht nicht dem ursprünglichen Passwort");
    }
}

/* Fügt eine zusätzliches Input-Feld ein oder entfernt dieses,
   je nach Status einer Checkbox.
   Wird für den Dialog zur Passwort-Wiederholung benötigt.
*/
function pw_validation() {
    var checkbox  = document.getElementById("registration");
    if( checkbox.checked ) {
      document.getElementById("pwrepeat").innerHTML = '<td>Wiederholen:</td><td><input type="password" name="passwort" id="userpwr" onkeyup="checkPwr()"></td>';
    }
    else {
      document.getElementById("pwrepeat").innerHTML = '<td></td><td></td>';
    }
    
}

/* INTERNE FUNKTION, wird nicht von ausserhalb aufgerufen.
   Einheitliche Gestaltung der Fehlermeldungen mittels HTML-Tags, auf CSS-Stylesheet angepasst.
*/
function render_error(msg) {
    return "<span id='errorbox'><span id='errorheader'>Fehler in Eingabe:</span> <span id='errormessage'>" + msg + "</span></span>";
}