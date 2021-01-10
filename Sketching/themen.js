let aufgaben =[

     "Zitat: Kein Mensch ist so beschäftigt, dass er nicht die Zeit hat, überall zu erzählen, wie beschäftigt er ist.",
     "Coronavirus",
     "Trump",
     "Zitat: Man ist meistens nur durch Nachdenken unglücklich",
     "Tierversuche (Sollen Tierversuche verboten werden?)",
     "Impfpflicht (Brauchen wir eine Impfpflicht?)",
     "Brauchen wir den 6-Stunden-Arbeitstag?",
     "US-Wahl 2020",
     "Digitalisierung",
     "Brexit",
     "WHO",
     "Zitat: Die Leute streiten im allgemeinen nur deshalb, weil sie nicht diskutieren können.",
     "Klimawandel",
     "Lockdown",
     "Social Media",
     "Wirecard Skandal",
     "George Floyd",
]

        function showAufgaben() {
            var AufgabenIndex = Math.floor(Math.random() * aufgaben.length);     // returns a random integer from 0 to 14;
            document.getElementById("Aufgaben").innerHTML = aufgaben[AufgabenIndex];
        }