/**
 * PWA - Flex
 * @author Marcos Almeida
 * @link
 */

//Instalar SW
self.addEventListener('install', (event) => {
    console.log("Sw Instalando", event)
    //pre carregamento em cache
    event.waitUntil(
        caches.open('static')
            .then((cache) => {
                console.log("Pré carregamento do app")
                cache.add('/etagas/')
                cache.add('/etagas/index.html')
                cache.add('/etagas/style.css')
                cache.add('/etagas/app.js')
                cache.add('/etagas/img/flex.png')
                cache.add('/etagas/img/flex.png')
                cache.add('/etagas/img/flex.png')
                cache.add('/etagas/img/calcflex.png')
                cache.add('/etagas/img/etanol.png')
                cache.add('/etagas/img/gasolina.png')
            })
    )
})


//Ativação do Sw
self.addEventListener('activate', (event) => {
    console.log("Ativando Sw", event)
    return self.clients.claim()
})

//escutando requisições "buscando algo "
self.addEventListener('fetch', (event) => {
    //console.log("Buscando Algo...", event)
    //Armazenar em cache todas as requisiões
    event.respondWith(
        caches.match(event.request)
            .then((resposne) => {
                if (resposne) {
                    return resposne
                } else {
                    return fetch(event.request)
                }
            })
    )
})

