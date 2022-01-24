function contador() {
    // Coletando os inputs e designando variáveis
    var inicio = document.querySelector('input#inicio')
    var contando = document.querySelector('div#contando')
    var fim = document.querySelector('input#fim')
    var passos = document.querySelector('input#passos')
    // Criar o laço para contagem
    contando.innerHTML = ''
    for(var i = Number(inicio.value); i <= Number(fim.value); i += Number(passos.value)){
        contando.innerHTML += `${i} `
    }

}