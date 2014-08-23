(function($){

  var worldYAngle = 0, worldXAngle = 0, d;
  var world = document.getElementById( 'banner' ),
      viewport = document.getElementById( 'header' );

  $( window ).bind( 'mousemove', function( e ){      

    worldYAngle = -( .5 - ( e.clientX / window.innerWidth ) ) * 2;
    worldXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 2;
    var t = 'translateZ( 0px ) rotateX( ' + worldXAngle + 'deg) rotateY( ' + worldYAngle + 'deg)';
    world.style.webkitTransform = t;
    world.style.MozTransform = t;
    world.style.oTransform = t;

    var disX = -( .5 - e.clientX / window.innerWidth ) * 200 - 150;
    var disY = ( .5 - e.clientY / window.innerHeight ) * 50;

    var d = 'translateX(' + -disX + 'px) translateY('+ disY +'px) scale(3.2)';

    $( '#banner > div' ).css( 'transform', d );

  } );
  
})(jQuery);