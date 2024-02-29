function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var titulo = window.document.querySelector('h1')
    var data = new Date()
    var hora = data.getHours()
    hora = 10
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/dia.png'
        document.body.style.background = "#eae9e4"
        titulo.style.background = "#a5a5a5"
    } else if (hora >=12 && hora < 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = "#fe7800"
        titulo.style.background = "#ff5e00"
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = "#011c3a"
        titulo.style.background = "#0300c5"
    }
}
