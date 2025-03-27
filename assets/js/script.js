        const events = [
            { name: "Englisch Klausur", date: "2025-04-01" },
            { name: "Winf Klausur", date: "2025-04-03" },
            { name: "Fahrt Maastricht", date: "2025-04-10" },
            { name: "Letzter Schultag", date: "2025-05-02" },
            { name: "Vor Notenbekanntgabe", date: "2025-05-05" },
            { name: "Deutsch Prüfung", date: "2025-05-19" },
            { name: "BWL Prüfung", date: "2025-05-21" },
            { name: "Englisch Prüfung", date: "2025-05-23" },
            { name: "WINF Prüfung", date: "2025-05-26" },
            { name: "INFO Prüfung", date: "2025-05-28" },
            { name: "PP 1. Tag", date: "2025-06-02" },
            { name: "PP 2. Tag", date: "2025-06-03" },
            { name: "Mitteilung Prüfungsergebnis", date: "2025-06-18" },
            { name: "Meldung mdl. Prüfung", date: "2025-06-20" },
            { name: "Mdl. Prüfung", date: "2025-06-27" },
            { name: "Zeugnisausgabe", date: "2025-07-04" },
        ];

        function updateCountdowns() {
            const now = new Date();
            document.getElementById("timers").innerHTML = "";
            
            events.forEach(event => {
                const eventDate = new Date(event.date);
                const diff = eventDate - now;
                
                if (diff > 0) {
                    let totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
                    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
                    const minutes = Math.floor(diff / (1000 * 60)) % 60;
                    const seconds = Math.floor(diff / 1000) % 60;
        
                    // Monate berechnen (ungefähr 30 Tage pro Monat)
                    const months = Math.floor(totalDays / 30);
                    totalDays -= months * 30;  // Verbleibende Tage nach Abzug der Monate
        
                    // Wochen berechnen
                    const weeks = Math.floor(totalDays / 7);
                    totalDays -= weeks * 7;  // Verbleibende Tage nach Abzug der Wochen
        
                    const countdownDiv = document.createElement("div");
                    countdownDiv.className = "countdown";
                    countdownDiv.innerHTML = `
                        <h2>${event.name}</h2>
                        <p>${months} Monate, ${weeks} Wochen, ${totalDays} Tage, ${hours} Std, ${minutes} Min, ${seconds} Sek</p>
                    `;
                    document.getElementById("timers").appendChild(countdownDiv);
                }
            });
        }
        
        setInterval(updateCountdowns, 1000);
        updateCountdowns();
        
