
function actualizarAnchoDeCaja() {

  let anchoDeVentana = window.innerWidth;
  const caja = document.getElementById('contenedor-grilla');
  anchoDeVentana = anchoDeVentana - 58;
  caja.style.width = `${anchoDeVentana}px`;
}
  
// Ejecuta la función al cargar la página
actualizarAnchoDeCaja();
  
// Ejecuta la función cada vez que se redimensiona la ventana del navegador
window.addEventListener('resize', actualizarAnchoDeCaja);


//orientationchange fires before the window resize event, 
//which is not ideal when you need to resize content 
//for the new viewport dimensions. 
//This fix will allow you to handle orientation changes after the page has resized
window.addEventListener("orientationchange", function() {
  var orientationChange = function(evt) {
    actualizarAnchoDeCaja();
    window.removeEventListener('resize', orientationChange);
  }
  window.addEventListener('resize', orientationChange);
}, false);






// Llamada a la API mediante fetch
const API_BASE = "https://rickandmortyapi.com/api"
const API_CHARACTERS = "https://rickandmortyapi.com/api/character"

const llamadaApi = fetch(API_CHARACTERS);

llamadaApi.then((data) => {
    return data.json()
}).then((data) => {
    const $characters = document.getElementById("contenedor-grilla")
    console.log(data.results[0])
    for(let i = 0; i < data.results.length; i++) {
        
        $characters.innerHTML += `
        <div class="grilla-item">
                <img src=${data.results[i].image} alt="imagen de personaje"/>
                <h3>${data.results[i].name}</h3>
                <p>Gender: ${data.results[i].gender}</p>
                <p>Species: ${data.results[i].species}</p>
                <p>Status: ${data.results[i].status}</p>
        </div>
        `
    }
}).catch((error) => {
    console.log(error)
})







//scroll horizontal con la rueda del mouse
const element = document.querySelector("#contenedor-grilla");

element.addEventListener('wheel', (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
    
  });
});