

function button() {
    alert("hello");
    document.getElementById("bttn").addEventListener("click", alert("hello world"));
}

function changeColor() {
    var box = document.getElementById("box");
    var bt = document.getElementById("mytext");
    var color = bt.value;
    box.style.backgroundColor = color;
}