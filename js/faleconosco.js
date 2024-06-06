const form = document.querySelector('form')
const campos = document.getElementById('name')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const especi = document.getElementById('especi')

form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (campos.value === "") {
        alert("Preencha o nome.")
        return
    }
    event.preventDefault()
    if (email.value === "") {
        alert("Preencha o email.")
        return
    }
    event.preventDefault()
    if (telefone.value === "") {
        alert("Preencha seu telefone.")
        return
    }
    event.preventDefault()
    if (especi.value === "") {
        alert("Preencha sua dúvida.")
        return
    }

    form.submit(alert('Formulário enviado com sucesso!'))

})