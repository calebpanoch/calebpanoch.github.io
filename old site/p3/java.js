let calc = document.getElementById("calculate");

function onCalculate(event) {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);    
    
    document.getElementById("results").classList.remove("invisible");

    let list = [num1, num2, num3];
    
    console.log(num1 < num2)
    
    if (num1 > num2) {
        list[0] = num2;
        list[1] = num1;
    }
    
    if (list[1] > list[2]){
        var temp = list[1];
        list[1] = list[2];
        list[2] = temp;
    }
    
    if (list[0] > list[1]){
        var temp = list[0];
        list[0] = list[1];
        list[1] = temp;
    }
    
    var avg = (num1+num2+num3)/3;
    
    let max = document.getElementById("max");
    let min = document.getElementById("min");
    let mean = document.getElementById("mean");
    let median = document.getElementById("median");
    let range = document.getElementById("range");
    
    max.innerHTML = list[2];
    min.innerHTML = list[0];
    mean.innerHTML = avg;
    median.innerHTML = list[1];
    range.innerHTML = list[2]-list[0];
}

calc.addEventListener("click", onCalculate)