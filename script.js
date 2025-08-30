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

let x, y, z;  // Statement 1
x = 5;        // Statement 2
y = 6;        // Statement 3
z = x + y;    // Statement 4
document.getElementById('Statement').innerText = "The sum of " + x + " and " + y + " is " + z;




  const num1 = document.getElementById('num1');
  const num2 = document.getElementById('num2');
  const op = document.getElementById('op');
  const calcBtn = document.getElementById('calcBtn');
  const result = document.getElementById('result');


  calcBtn.addEventListener('click', function () {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    let res;

    if (isNaN(a) || isNaN(b)) {
      result.innerText = " Please enter both numbers!";
      return;
    }

    switch (op.value) {

      case '+': res = a + b; break;

      case '-': res = a - b; break;

      case '*': res = a * b; break;

      case '/':
        if (b === 0) {
          alert("Cannot divide by 0");
          result.innerText = " Division by zero not allowed!";
          return;
        }
        res = a / b;
        break;

      case '%':
        if (b === 0) {
          alert("Cannot modulo by 0");
          result.innerText = " Modulo by zero not allowed!";
          return;
        }
        res = a % b;
        break;

      case '**': res = a ** b; break;
      default: res = "Invalid operator!";
    }

    result.innerText = `Result: ${res}`;
    alert(`Result: ${res}`);
    
  });

let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

document.getElementById("hh").innerHTML =
answer1 + "<br>" + 
answer2 + "<br>" + 
answer3;

function myFunction(p1, p2) {
  return p1 * p2;
}

let result13 = myFunction(4, 3);
document.getElementById("hh1").innerHTML = "The result is: " + result13;





const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

document.getElementById("hh3").innerHTML = person.fullName();


{

// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age:50,
  eyeColor: "blue"
};

// Try to create a Copy
const x = person;

// This will change age in person !!!
x.age = 10;

document.getElementById("hh4").innerHTML =
person.firstName + " is " + person.age + " years old.";
}});
