let smallImg = document.querySelectorAll(".smallImg img");
let BigImg = document.querySelector(".BigImg img");

smallImg.forEach((image) => {
    image.addEventListener("click", () => {
        BigImg.setAttribute("src", image.getAttribute("src"));
        BigImg.parentElement.children[1].innerHTML = image.parentElement.children[1].innerHTML
        playOn(image.getAttribute("dataAudio"));
    });
});



let playOn = (audio) => new Audio("audio/"+audio+".mp3").play();