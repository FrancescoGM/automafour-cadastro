var buttons_correio = document.querySelectorAll('.correios a')
var correios_container = document.querySelectorAll('.correios-container')

buttons_correio.forEach((a, index) => {
    a.addEventListener('click', () => {
        correios_container.forEach(container => {
            container.style.display = "none"
        })
        buttons_correio.forEach((a) => {
            a.classList.remove('active')
        })
        correios_container[index].style.display = "block"
        a.classList.add('active')
    })
})
var buttons_observacao = document.querySelectorAll('.observacao a')
var fields_observacao = document.querySelectorAll('.field-container.observacao')

buttons_observacao.forEach((a, index) => {
    a.addEventListener('click', () => {
        fields_observacao.forEach(observacao => {
            observacao.style.display = "none"
        })
        buttons_observacao.forEach((a) => {
            a.classList.remove('active')
        })
        fields_observacao[index].style.display = "block"
        a.classList.add('active')
    })
})