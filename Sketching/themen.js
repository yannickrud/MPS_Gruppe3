var AufgabenIndex = 1;
        showAufgabe(AufgabenIndex);

        // Next/previous controls
        function plusAufgabe(n) {
            showAufgabe(AufgabenIndex += n);
        }

        // Thumbnail image controls
         function currentAufgaben(n) {
             showAufgaben(AufgabenIndex = n);
        }

        function showAufgaben(n) {
            var i;
            var Aufgaben = document.getElementsByClassName("myAufgaben");
            var dots = document.getElementsByClassName("dot");
            if (n > Aufgaben.length) {AufgabenIndex = 1} 
            if (n < 1) {AufgabenIndex = Aufgaben.length}
            for (i = 0; i < Aufgaben.length; i++) {
                Aufgaben[i].style.display = "none"; 
             }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            Aufgaben[AufgabenIndex-1].style.display = "block"; 
                dots[AufgabenIndex-1].className += " active";
             }