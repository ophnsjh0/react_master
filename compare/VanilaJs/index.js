// const title = document.getElementById("title");
const title = document.querySelector("#title");
// title.innerHTML = "Hello Wolrd";
// title.style.color = "blue";
//  console.dir(document);
// document.title = "good job";

const hasClick = "clicked";

// [ClassName toggle]
// function handclick(){
//     const currentClass = title.className;
//     if(currentClass !== hasClick){
//         title.className = hasClick;
//     }else{
//         title.className = "";
//     }
// }


// [ClassList add/remove]
// function handclick() {
//     const currentClass = title.classList.contains(hasClick)
//     if (currentClass){
//         title.classList.remove(hasClick)  
//     } else {
//         title.classList.add(hasClick)
//     }
// }

// [ClassList toggle]
function handclick() {
    title.classList.contains(hasClick)
    title.classList.toggle(hasClick)
}

function init() {
    title.addEventListener("click", handclick);
}

init();



