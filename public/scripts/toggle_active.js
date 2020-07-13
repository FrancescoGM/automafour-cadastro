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
var buttons_observers = document.querySelectorAll('.observacao a')
var fields_observers = document.querySelectorAll('.field-container.observacao')

buttons_observers.forEach((a, index) => {
    a.addEventListener('click', () => {
        fields_observers.forEach(observer => {
            observer.style.display = "none"
        })
        buttons_observers.forEach((a) => {
            a.classList.remove('active')
        })
        fields_observers[index].style.display = "block"
        a.classList.add('active')
    })
})