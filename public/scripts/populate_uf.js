document.querySelectorAll('select[name="uf"]').forEach((select) => {
    select.addEventListener('change', getCitiesHandle)
})

function getFetch(url, object) {
    fetch(url)
        .then((response) => response.json())
        .then((values) => {
            values.forEach((value => {
                object.innerHTML += `<option value="${value.id}">${value.nome}</option>`
            }))
        })
}

function populateUFs() {
    const stateSelect = document.querySelectorAll('select[name="uf"]')
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    stateSelect.forEach(select => {
        getFetch(url, select)
    })
}

populateUFs()

function getCitiesHandle(event) {
    const citiesSelect = event.path[2].children[1].children[1]
    const stateInput = event.path[2].children[3].children[2]
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event.target.value}/municipios`

    stateInput.value = event.target.options[event.target.selectedIndex].text

    citiesSelect.innerHTML = ""
    if (document.querySelector('select[name="uf"]').value != "") {

        fetch(url)
            .then((response) => response.json())
            .then((values) => {
                values.forEach((value => {
                    citiesSelect.innerHTML += `<option value="${value.nome}">${value.nome}</option>`
                }))
            })
    }
}