    //Virtuell PT kod

    function virtuellPT() {

        let minuter = Number(prompt("Hur länge har du motionerat idag?"));

        if (minuter > 0 && minuter <= 60) {
            alert("Dåligt, Bättre kan du")
        }
        if (minuter >= 60 && minuter < 120) {
            alert("Hurtigt")
        }
        if (minuter > 120 && minuter < 200) {
            alert("Oj, duktigt men kom ihåg att chilla")
        }
        if (minuter == 0 || minuter > 200) {
            alert("Jag tror inte på dig, mata in pånytt")}
        
    }
    