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
  window.addEventListener('orientationchange', actualizarAnchoDeCaja);
  