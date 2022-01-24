let array = []

let num = Number(document.querySelector('input#num').value)
let seletor = document.querySelector('select#seletor')
let resultado = document.querySelector('div#res')

function check(number, list) {
    let tmp = list.indexOf(number)
    if(number > 0 && number < 101 && tmp == -1){
        window.alert('deu certo')
        return true
    } else{
        window.alert(`teste, falhou ${tmp}`)
        return false
    }

}

function adicionar(){


    if (check(num.value, array)){
        array.push(num)
        let option = document.createElement("option")
        option.text = `Valor ${num} adicionado`
        // option.value = `tab${array(indexOf(num))}`
        seletor.add(option)
    }
}

function analisar() {

}