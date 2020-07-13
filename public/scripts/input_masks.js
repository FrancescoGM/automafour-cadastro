function addEventListenerForEach(ElementIndicator, callback) {
    document.querySelectorAll(ElementIndicator).forEach(element => {
        element.addEventListener('input', callback)
    })
}

function maskCellphone(event) {
    event.target.value = event.target.value
        .replace(/\D/g, '')
        .replace(/(\d{0})(\d{1,2})/, '$1($2')
        .replace(/(\d{2})(\d)/, '$1) $2')
        .replace(/(\d{5})(\d{1,4})/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
}

function maskCnpj(event) {
    event.target.value = event.target.value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
}
function maskCep(event) {
    event.target.value = event.target.value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
}
function maskMoney(event) {

    event.target.value = event.target.value
        .replace(/\D/g, '')
        .replace(/(\d)/, 'R$ $1')
        .replace(/(\d{20})\d+?$/, '$1')
        .replace(/(\d)(\d{17}$)/, '$1.$2')
        .replace(/(\d)(\d{14}$)/, '$1.$2')
        .replace(/(\d)(\d{11}$)/, '$1.$2')
        .replace(/(\d)(\d{8}$)/, '$1.$2')
        .replace(/(\d)(\d{5}$)/, '$1.$2')
        .replace(/(\d)(\d{2}$)/, '$1,$2')

}

addEventListenerForEach('.telefone', maskCellphone)
addEventListenerForEach('.cnpj', maskCnpj)
addEventListenerForEach('.cep', maskCep)
addEventListenerForEach('.dinheiro', maskMoney)