function konami(feature) {
  var
    required = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    current = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  var on = 'addEventListener' in document ? function(object, event, func) {
    object.addEventListener(event, func, false);
  } : function(object, event, func) {
    object.attachEvent('on' + event, func);
  };

  var load = function() {
    if ( !(function(){try{return!!document.createEvent('TouchEvent')}catch(e){}})() ) {
      on(window, 'keyup', function(event) {
        current.push(event.keyCode ? event.keyCode : event.which);
        current.shift();

        if (current >= required && current <= required) {
          feature();
        }
      });
    }
  };

  on(window, 'load', load);
}
