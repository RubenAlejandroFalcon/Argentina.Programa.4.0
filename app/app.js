function actualizarAnchoDeCaja() {

  let anchoDeVentana = window.innerWidth;
  const caja = document.getElementById('contenedor-grilla');
  anchoDeVentana = anchoDeVentana - 58;
  caja.style.width = `${anchoDeVentana}px`;
}
  
function orientation_changed ()
{
    if ( is_portrait() )
    {
      actualizarAnchoDeCaja();
    }
    else if ( is_landscape() )
    {
      actualizarAnchoDeCaja();
    }
    clearTimeout(window.t);
    delete window.t;
}
window.t = undefined;
window.onorientationchange = function (event)
{
    window.t = setTimeout('orientation_changed();', 2500);
}
function is_landscape()
{
    var uagent = navigator.userAgent.toLowerCase();
    if ( uagent.search('ipad') > -1 )
    {
        var r = ( window.orientation == 90 || window.orientation == -90 );
    }
    else
    {
        var r = ( screen.width > screen.height );
    }
    return r;
}
function is_portrait()
{
    var uagent = navigator.userAgent.toLowerCase();
    if ( uagent.search('ipad') > -1 )
    {
        var r = ( window.orientation == 0 || window.orientation == 180 );
    }
    else
    {
        var r = ( screen.width < screen.height );
    }
    return r;
}



// Ejecuta la función al cargar la página
actualizarAnchoDeCaja();
  
// Ejecuta la función cada vez que se redimensiona la ventana del navegador
window.addEventListener('resize', actualizarAnchoDeCaja);

// Ejecuta la función cada vez que se cambia la orientación en el celular, pero no tiene efecto
//window.addEventListener('orientationchange', actualizarAnchoDeCaja);
  
