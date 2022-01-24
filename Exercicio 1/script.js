function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = './assets/manha.jpg'
        document.body.style.background = '#ede482'
    } else if (hora >= 12 && hora < 18) {
        // BOM TARDE!
        img.src = './assets/tarde.jpg'
        document.body.style.background = '#e69825'
    } else {
        // BOA NOITE!
        img.src = './assets/noite.jpg'
        document.body.style.background = '#3257d1'
    }
}

