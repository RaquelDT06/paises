
const campoFiltro = document.querySelector('#filtrar_paises')

campoFiltro.addEventListener('input', function () {

    let cards = document.querySelectorAll('.card')

    if (this.value.length > 0) {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            let nome = card.querySelector('.pais').textContent

            // cria uma expressao regular a partir do valor digitado no campo filtro
            let expressao = new RegExp(this.value, 'i')

            if (!expressao.test(nome)) {
                card.classList.add('invisivel')
            } else {
                card.classList.remove('invisivel')
            }
        }
    } else {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            card.classList.remove('invisivel')
        }
    }

})


const nomecapital = document.querySelector('#filtrar_button')

nomecapital.addEventListener('click', function () {
    let capital = document.querySelector('#filtrar_capitais').value
    let cards = document.querySelectorAll('.card')
    if (capital.length > 0) {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            let nome = card.querySelector('.capital').textContent
            if (capital != nome) {
                card.classList.add('invisivel')
            } else {
                card.classList.remove('invisivel')
            }
        }
    } else {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            card.classList.remove('invisivel')
        }
    }
})



const nomeregiao = document.querySelector('#regiao')

nomeregiao.addEventListener('click', function () {
    let nregiao = document.querySelector('#filtrar_regiao').value
    let cards = document.querySelectorAll('.card')
    if (nregiao.length > 0) {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            let nome = card.querySelector('.regiao').textContent
            

            if (nregiao.toLocaleLowerCase()!= nome.toLocaleLowerCase()) {
                card.classList.add('invisivel')
            } else {
                card.classList.remove('invisivel')
            }
            // console.log(nome)
        }
       
    } else {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            card.classList.remove('invisivel')
        }
    }
})