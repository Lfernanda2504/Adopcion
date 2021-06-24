
function anade() {
    var elemento = document.createElement("li");
  
    var lista = document.getElementById("mensajes");
    lista.appendChild(elemento);
  
    var nuevoMensaje = `<div id="mensajes">
    <div class="mensaje-amigo">
        <div class="contenido">
        Me encataría ¿Podemos acordar un lugar para conocerla mañana?
        </div>
        <div class="flecha-derecha"></div>
        <img class="img_cont rounded-circle" src="img/Frame 13.png" width="36px;" height="36px;">
        <div class="fecha">Enviado hace tres minutos</div>
    </div>
    <div class="mensaje-autor">
        <img class="img_cont rounded-circle" src="img/foto-perfil.jpg" width="36px;" height="36px;">
        <div class="flecha-izquierda"></div>
        <div class="contenido" id="mensaje">
            Si, claro no hay problema
        </div>
        <div class="fecha">Enviado hace tres minutos</div>
      </div>
</div>`
    lista.innerHTML = nuevoMensaje;
  }
  
  
  