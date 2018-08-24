import css from '../src/css/index.css'

function hello() {
    var element = document.getElementsByClassName("test").item(0);
    element.setAttribute("class", element.getAttribute("class") + " node");
    element.innerHTML = "test";
    alert("crazy_mad");
}

window.onload = function() {
    alert("hello");
    hello();
}
