

    let clickCounter = 0;

    function changeH1() {
    
    clickCounter++;
    
    if (clickCounter==1) {
    
        document.getElementById("header1").innerHTML = "Farveskift";
        document.getElementById("header1").style.color = "hotpink"
    
    }
    else if (clickCounter==2) {
        
        document.getElementById("header1").style.color = "yellow"
    
    }
    else if (clickCounter==3) {
        
        document.getElementById("header1").style.color = "black"
    
    }
    else if (clickCounter==4) {
        
        document.getElementById("header1").innerHTML = "Løbet tør for farver :( (click to reset)";
        clickCounter=0;
    }
    
    }
    
    