function caculadora() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseInt(num1) + parseInt(num2);
    if (!isNaN(result)) {
        document.getElementById("result").innerHTML = result;
    }
}
console.log(result)