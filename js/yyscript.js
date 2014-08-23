( function( $ ){
  var bannerYAngle = 0, 
      bannerXAngle = 0,
      disX = 0, 
      disY = 0,
      t,
      d;

  var $banner = $( '#banner' ),
      $shadow = $( '#banner > div' );

  $( window ).bind( 'mousemove', function( e ){  
      bannerYAngle = -( .5 - ( e.clientX / $( window ).width() ) ) * 2;
      bannerXAngle = ( .5 - ( e.clientY / $( window ).height() ) ) * 2;
      t = 'rotateX( ' + bannerXAngle + 'deg) rotateY( ' + bannerYAngle + 'deg)';
      $banner.css( 'transform', t );
  
      disX = -( .5 - e.clientX / $( window ).width() ) * 200 - 150;
      disY = ( .5 - e.clientY / $( window ).height() ) * 50;
      d = 'translateX(' + -disX + 'px) translateY(' + disY + 'px) scale(3.2)';
      $shadow.css( 'transform', d );
  } );
} )( jQuery );