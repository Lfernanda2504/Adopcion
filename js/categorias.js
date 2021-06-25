<<<<<<< HEAD
const doc= document;
const mascotas = doc.getElementById('mascotas');
const btnPerro = doc.getElementById('perro');
const btnGato =doc.getElementById('gato')
=======
const mascotas = document.getElementById('mascotas');
>>>>>>> 38c7878dfbe34ae296a49340ea630f13f8723949
let dataApi;

window.addEventListener('load', () => {
    fetchData();
<<<<<<< HEAD
    btnPerro.onclick =showAlert;
    btnGato.onclick =showAlert;
    
})



=======
})

>>>>>>> 38c7878dfbe34ae296a49340ea630f13f8723949
const fetchData = async () => {
    try {
        const rest = await fetch('api/api.json')
        dataApi = await rest.json()
<<<<<<< HEAD
        mostrarCardPerros(dataApi)
=======
        mostrarCard(dataApi)
>>>>>>> 38c7878dfbe34ae296a49340ea630f13f8723949
    } catch (error) {
        console.log(error)
    }
}

<<<<<<< HEAD
function showAlert(event){
  alert("evento detectado");
}

let Card = ''
const mostrarCardPerros = () => {
=======
let Card = ''
const mostrarCard = () => {
>>>>>>> 38c7878dfbe34ae296a49340ea630f13f8723949
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

<<<<<<< HEAD
}



    
  
=======
}
>>>>>>> 38c7878dfbe34ae296a49340ea630f13f8723949
