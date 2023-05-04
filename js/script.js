const url = "https://restcountries.com/v2/all"

const listapaises = $('#listapaises')
const cardsPagina = 12
let paginaAtual = 1

fetch(url)
  .then(response => response.json())
  .then(data => {
    //...............= arredonda para cima(numero total dividido pela quantidade escolhida)
    let paginasTotal = Math.ceil(data.length / cardsPagina)

    function mostrapagina(pagina) {
      let inicio = (pagina - 1) * cardsPagina
      let fim = inicio + cardsPagina
      //esvaziar a section
      listapaises.empty()

      for (let i = inicio; i < fim && i < data.length; i++) {
        const pais = data[i]
        const div =    `   
            <figure class="card">
                        <p class="text-success text-center img"><img src="${pais.flag}"  width = "200"  height = "150"></p>
                            <figcaption>
                            <h4 class="text-success text-center pais">${pais.name}</h4>
              <p class="text-success text-center capital">${pais.capital}</p>
                        <p class="text-success text-center regiao">${pais.region}</p>

                <div class="card-footer">
                <button type="button" class="btn btn-card bg-success-subtle " data-bs-toggle="modal" data-bs-target="#card-${i}">Ver país</button>
                </div>
                
                <div class="modal fade" id="card-${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                     <div class="modal-dialog modal-dialog-scrollable modal-lg">
                          <div class="modal-content modal-dialog-scrollable">
             
                            <div class="modal-header modal-header">
                                  <h1 class="modal-title fs-5">
                                  <B class="bg-success-subtle">${pais.name}</B></h1>
                             </div>
                                <div class="modal-body">
                                <p class="text-success text-center img"><img src="${pais.flag}"  width = "200"  height = "150"></p>
                                <p class="text-success text-center nativo">Nome nativo:${pais.nativeName}</p>
                                <p class="text-success text-center capital">Capital:${pais.capital}</p>
                                <p class="text-success text-center regiao">Região:${pais.region}</p>
                                <p class="text-success text-center subregiao">Subregião:${pais.subregion}</p>
                                <p class="text-success text-center codigo_area">Codigo de área:${pais.callingCodes}</p>
                                <p class="text-success text-center populacao">População:${pais.population}</p>
                                <p class="text-success text-center latlong">Latitude e Longitude:${pais.latlng}</p>
                                  
                  
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-close-card bg-success-subtle" data-bs-dismiss="modal">Sair</button>
                                  </div>
                                </div>
                                </div>
                                </div>
                             
                            
                        </figcaption>
                    </figure>
             `
        listapaises.append(div)



      }
    }

    function paginaAtualizar() {
      $('#contador-pagina').text(`Página${paginaAtual} de ${paginasTotal}`)
      $('#anterior').prop('disabled', paginaAtual === 1)
      $('#proximo').prop('disabled', paginaAtual === paginasTotal)
      mostrapagina(paginaAtual)
    }

    paginaAtualizar()
    $('#anterior').click(() => {
      if (paginaAtual > 1) {
        paginaAtual--
        paginaAtualizar()
      }
    })

    $('#proximo').click(() => {
      if (paginaAtual < paginasTotal) {
        paginaAtual++
        paginaAtualizar()
      }
    })
    
  })


  .catch(error => console.error(error))


