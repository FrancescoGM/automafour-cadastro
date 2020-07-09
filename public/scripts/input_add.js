function addItem(event) {
    console.log(event)
    const input = event.path[1].children[1]
    const select = event.path[2].children[2]

    const inputContent = input.value
    if (inputContent == '') {

    } else {
        input.value = ''
        select.innerHTML += `<option value="${inputContent}">${inputContent}</option>`
    }
}
document.querySelectorAll('.add-container a').forEach(a => {
    a.addEventListener('click', addItem)
})