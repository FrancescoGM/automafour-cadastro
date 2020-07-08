const buttons_correio = document.querySelectorAll('.correios a')

buttons_correio.forEach((a) => {
    a.addEventListener('click', () => {
        buttons_correio.forEach((a) => {
            a.classList.remove('active')
        })
        a.classList.add('active')
    })
})
const buttons_observacao = document.querySelectorAll('.observacao a')

buttons_observacao.forEach((a) => {
    a.addEventListener('click', () => {
        buttons_observacao.forEach((a) => {
            a.classList.remove('active')
        })
        a.classList.add('active')
    })
})