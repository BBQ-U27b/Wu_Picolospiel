/*
Erstelle ein Trinkspiel nach dem Vorbild von "Picolo" mithilfe der JavaScript-Konsole.
    Anforderungen:
Spielstart
Die Spieler:innen geben ihre Namen ein (mehrere Namen möglich).
Spielablauf
Das Spiel läuft 30 Runden lang.
    In jeder Runde wird zufällig eine Aufgabe oder eine Aussage generiert.
    Beispiele:
„[Spieler X] sieht heute gut aus und muss 2-mal trinken.“
„[Spieler Y] und [Spieler Z] tauschen ihre Getränke.“
„Alle, die Schwarz tragen, trinken 1-mal.“
*/


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Start
rl.question("Wie viele Spieler:innen gibt es?  ", (input) => {
    const anzahl = parseInt(input); //anzahl der Personen werden abspeichert
    Spielernamen(anzahl); //geht an function Spielernamen rüber

});


function Spielernamen(anzahl, spieler = []) {
    if (spieler.length < anzahl) {
        rl.question(`Spielername ${spieler.length + 1} : `, (name) => {
            spieler.push(name);  //Name wird in das array gepushed
            Spielernamen(anzahl, spieler); //Output 
        });
    } else {
        ausgabe(spieler); // weiter zu nächsten Funktion
    }
}

function spiele(spieler) {
    const aufgabe = [
        `${spieler} stinkt nicht nach Alkohol, muss 10 shots trinken.`,
        `Alle, die noch keine 50 shots getrunken haben müssen 10 shots trinken.`,
        `${spieler} steht noch, muss 10 shots trinken.`,
        `${spieler} muss einen Schluck Wasser trinken.`,
        `${spieler} sucht sich jemanden aus mit der 100 shots trinken kann`,
        `Alle dürfen einmal reiern.`,
        `${spieler} stirbt wahrscheinlich gerade an einer Alkoholvergiftung.`,
        `${spieler} trink doch einfach nochmal 10 shots`
    ];

    const zufall = Math.floor(Math.random() * aufgabe.length);
    return aufgabe[zufall];
}

function ausgabe(spieler) {
    for (i = 1; i <= 30; i++) {
        let runden = i;
        const zufallsspieler = spieler[Math.floor(Math.random() * spieler.length)]; //Spieler zuordnung
        console.log(`Runde ${runden}: ${spiele(zufallsspieler, spieler)}`); //Ausgabe
    }
    rl.close(); //Ende
}

