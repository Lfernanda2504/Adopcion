const doc= document;
const mascotas = doc.getElementById('mascotas');
const btnPerro = doc.getElementById('perro');
const btnGato =doc.getElementById('gato')
let dataApi;

window.addEventListener('load', () => {
    fetchData();
    btnPerro.onclick =mostrarCard();
    btnGato.onclick =mostrarCard();
    
})



const fetchData = async () => {
    try {
        const res = await fetch('api/api.json')
        dataApi = await res.json()
        mostrarCard(dataApi)
    } catch (error) {
        console.log(error)
    }
}

let Card = ''
const mostrarCard = () => {
    Card = ""
    dataApi.forEach(mascotas => {
        Card += `
                <div class="col-12 mb-2 col-md-4 mt-3 btnDataMascotas">
                <div class="card-sm-6">
                    <div class="view zoom overlay">
                        <img class="img-fluid w-100"
                            src="${mascotas.imagen}" alt="Sample">
                        <h4 class="mb-0"><span class="badge badge-primary badge-pill badge-news">Sale</span></h4>
                    </div>
                    <div class="card-body text-center">
                        <h5>${mascotas.nombre}</h5>
                        <h6 class="mb-3">
                            <span class="text-danger mr-1">${mascotas.raza}</span>
                        </h6>
                    </div>
                </div>
            </div>
        `
    }
)
console.log(mascotas);
mascotas.innerHTML=Card

}



    
  
