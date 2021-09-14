var btns=document.querySelectorAll(".drum");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        
        var but=this.innerHTML;
        check(but);
        clicked(but)
    
    });
    }
    document.addEventListener("keydown", function (event) {
        check(event.key);
        clicked(event.key);
    })
function check(n) {
    switch (n) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:console.log(n)
            break;}
}
function clicked(n1) {
    var doc=document.querySelector("."+n1);
    doc.classList.add("pressed");
    setTimeout(() => {
        doc.classList.remove("pressed")
    }, 100);

}