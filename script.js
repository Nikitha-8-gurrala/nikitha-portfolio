const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
cursor.style.top = e.clientY + "px";
cursor.style.left = e.clientX + "px";
});
const elements = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
elements.forEach(el => {
const position = el.getBoundingClientRect().top;
if(position < window.innerHeight - 100){
el.classList.add("show");
}
});
});
