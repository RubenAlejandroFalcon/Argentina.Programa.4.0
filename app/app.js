function actualizarAnchoDeCaja() {

  let anchoDeVentana = window.innerWidth;
  const caja = document.getElementById('contenedor-grilla');
  anchoDeVentana = anchoDeVentana - 58;
  caja.style.width = `${anchoDeVentana}px`;
}
  
window.t = undefined;
window.onorientationchange = function (event)
{
    window.t = setTimeout('actualizarAnchoDeCaja();', 2500);
}

  // Ejecuta la función al cargar la página
  actualizarAnchoDeCaja();
  
  // Ejecuta la función cada vez que se redimensiona la ventana del navegador
  window.addEventListener('resize', actualizarAnchoDeCaja);

  // Ejecuta la función cada vez que se cambia la orientación en el celular
  //window.addEventListener('orientationchange', actualizarAnchoDeCaja);
  
