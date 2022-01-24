function tabuada() {
    let num = Number(document.querySelector('input#num').value)
    let tabuada = document.querySelector('select#tab')
    tabuada.innerHTML = ''
    for(let i = 1; i < 10; i++){
        let option = document.createElement("option")
        let resultado = num * i
        option.text = `${num} X ${i} = ${resultado}`
        option.value = `tab${i}`
        tabuada.add(option)
    }


}