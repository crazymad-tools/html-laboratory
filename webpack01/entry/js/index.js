import css from '../css/index.css'
import css2 from '../css/test.scss'

function hello() {
    var element = document.getElementsByClassName("test").item(0);
    element.setAttribute("class", element.getAttribute("class") + " node");
    alert("crazy_mad");
}

window.onload = function() {
    alert("hello 我是你爸爸");
    hello();
}
