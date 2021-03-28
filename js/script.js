//alterar imagem de acordo com o tamanho da tela
var img = document.querySelector("#curved-img")
window.onresize = function(){
    loadImg()
}
window.onload = function(){
    loadImg()
}
function loadImg(){
    if(screen.availWidth < 760){
        img.src = "./images/bg-curvy-mobile.svg"
    }else{
        img.src = "./images/bg-curvy-desktop.svg"
    }
}

//verificar email valido
const emailValid = (email) => {
    const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    return emailRegex.test(email);
}

const button = document.querySelector(".early-access button")
var count = 0
var p = document.createElement("p")
p.innerHTML = "Please enter a valid email address"
button.addEventListener("click", function(){
    const input = document.querySelector(".early-access input").value
    if(input.length > 0){
        var result = emailValid(input)
    }
    if(!result){
        const early = document.querySelector(".early-access")
        if(count === 0){
            early.appendChild(p)
            count++
        }
    }else{
        p.remove()
        count = 0
    }
})