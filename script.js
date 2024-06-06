document.getElementById('calcular').addEventListener('click', function () {
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value * 2
    const total = peso / altura

    document.getElementById('resultado').innerHTML = total.toFixed(2)
})
