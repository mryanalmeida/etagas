/**
 * PWA - Flex
 * @author Marcos Almeida
 * @link
 */

//Registrar o ServiceWorker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
            console.log("service worker registrado.")
        })
}

function calcular() {
    // pegar valores dos inputs
    let gasolina = Number(document.getElementById('gasolina').value)
    let etanol = Number(document.getElementById('etanol').value)
    let kmlGasolina = Number(document.getElementById('kmGasolina').value)
    let kmlEtanol = Number(document.getElementById('kmEtanol').value)
    // calcular a vantagem
    if (etanol < (kmlEtanol / kmlGasolina) * gasolina) {
        document.getElementById("status").src = "./img/etanol.png"
    } else {
        document.getElementById("status").src = "./img/gasolina.png"
    }

}