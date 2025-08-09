window.addEventListener('DOMContentLoaded', function() {

    let clicked = false;

    document.getElementById('btn').addEventListener('click', function(){
        if (!clicked) {
            alert("Button clicked");
            document.getElementById('d1').innerHTML = "<b>You clicked the submit button!</b>";
            document.getElementById('d1').style.color = "red";
            document.getElementById('d1').style.fontWeight = "bold";
            document.getElementById('d1').style.fontSize = "15px";
            
            clicked = true;
        } else {
            alert("Already submitted");
            
        }
    });

    document.getElementById('date').onclick = function() {
        document.getElementById('d2').textContent = new Date();
    };

   let clickMeClicked = 0;

    document.getElementById('clickMe').addEventListener('click', function() {
    if (clickMeClicked === 0) {
        document.getElementById('Msg').innerHTML = "<b> So nice joy! You clicked and used inner html</b>";
        alert("Button clicked");
        clickMeClicked++;
    } else {
        document.getElementById('Msg').innerText = "<b> So nice joy! You again clicked and  again used inner html</b>";
        alert("Button again clicked   ");
    }
});

    


   document.getElementById('click1').onclick = function() {
        document.getElementById("Msg1").innerText = "Paragraph changed.";
    };

    document.getElementById('sum').onclick = function() {
        let s = 5 + 6;
        document.getElementById('d3').textContent = "Sum Result: " + s;
        alert("Sum is: " + s);
    };

    document.getElementById('d4').onclick = function() {
        let sum = 10 + 6;
    document.getElementById('d4').innerText = " Window Alert Result Is: " + sum;
    window.alert(" Window Alert Result: " + sum);
};

 document.getElementById('d6').addEventListener('click', function() {
    let sum = 100 + 6;
    document.getElementById('d6').innerText = "Result Is Just alert: " + sum;
    alert("Alert Result: " + sum);
});

 document.getElementById('d5').onclick = function() {
    document.write("document.write() Result: " + (10 + 6));

};

document.getElementById('d7').onclick = function() {
    window.print();
}
});
