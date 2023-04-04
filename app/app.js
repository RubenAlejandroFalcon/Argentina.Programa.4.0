function actualizarAnchoDeCaja(boolchangeorientation = false) {

  window.t = undefined;

  if (boolchangeorientation) {

    setTimeout('console.log("cambió la orientación");', 250);
      
  }


  let anchoDeVentana = window.innerWidth;
    const caja = document.getElementById('contenedor-grilla');
    anchoDeVentana = anchoDeVentana - 58;
    caja.style.width = `${anchoDeVentana}px`;


  }
  
  // Ejecuta la función al cargar la página
  actualizarAnchoDeCaja();
  
  // Ejecuta la función cada vez que se redimensiona la ventana del navegador
  window.addEventListener('resize', actualizarAnchoDeCaja);
  window.addEventListener('orientationchange', actualizarAnchoDeCaja(true));
  
