			//showPopup() wird aufgerufen, sobald man den "Los"-Knopf drückt
			//fügt dem popup_window die CSS-Klassenzugehörigkeit "show" hinzu, wodurch "visibility: visible" gesetzt wird

			//showDropdown() funktioniert analog
			//hidePopup() funktioniert genau umgekehrt
			
			
			function showPopup() {
				var popup = document.getElementById("popup_window");
				popup.classList.add("show");
			}

			
			function hidePopup() {
				var popup = document.getElementById("popup_window");
				popup.classList.remove("show");
			}

			function showDropdown() {
				var dropdown = document.getElementById("dropdown_window");
				dropdown.classList.toggle("show");
			}