function toggleActive(buttonsPath, fieldsPath) {
    const buttons = document.querySelectorAll(buttonsPath)
    const fields = document.querySelectorAll(fieldsPath)

    buttons.forEach((element, index) => {
        element.addEventListener('click', () => {

            fields.forEach(field => {
                field.style.display = "none"
            })

            buttons.forEach(button => {
                button.classList.remove('active')
            })

            fields[index].style.display = "block"
            element.classList.add('active')
        })
    })
}
toggleActive('.correios a', '.correios-container')
toggleActive('.observacao a', '.field-container.observacao')