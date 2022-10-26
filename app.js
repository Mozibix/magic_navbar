let marker = document.querySelector("#marker");
let item = document.querySelectorAll("ul li a");

const Indicator=(e) =>{
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

item.forEach(Link => {
    Link.addEventListener('mousemove', (e) => {
        Indicator(e.target);
    })
})