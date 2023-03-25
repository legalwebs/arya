var swatchWidget = (function(){

    var init,
        checkStorage,
        setDataAttr,
        currentDataAttr,
        previousDataAttr = '',
        bodyElement = document.querySelector('body');
        swatchWrap = document.getElementById('panel');


    init = function(){
        checkStorage(window.localStorage.getItem('dataAttr'));
        swatchWrap.addEventListener('click', setDataAttr);
    };

    // localstorage        
    checkStorage = function(storage){
        if (storage === null) {
            return;
        } else {
            bodyElement.classList.add(window.localStorage.getItem('dataAttr'));
        }
    };

    setDataAttr = function(event){
        event.preventDefault();
        //console.log('DEBUG: running setDataAttr');

        // Get data attr
        currentDataAttr = event.target.getAttribute('data-showName');

        // Check for a match of class names
        if (currentDataAttr != window.localStorage.getItem('dataAttr')) {

            // Remove previous data attr
            bodyElement.classList.remove(window.localStorage.getItem('dataAttr'));
        }

        // Add data attr as class
        bodyElement.classList.add(currentDataAttr);

        // Set currentAttr to localStorage
        window.localStorage.setItem('dataAttr', currentDataAttr);
    };

    return {
        init: init
    };

})();

swatchWidget.init();   

// box color

function openColor() {
  var element = document.getElementById("SwitcherControl");
  element.classList.toggle("ColorSwitcher--open");  
  return false;
}