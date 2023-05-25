window.onload = function() {
    const indexContainer = document.querySelector('.indexMainContainer');
    const windowWidth = window.innerWidth;
    if(windowWidth < 1920){
        indexContainer.style.left = `-${1800 - windowWidth}px`;
    }
    window.onresize = function() {
        const windowWidth = window.innerWidth;
        if(windowWidth < 1920){
            indexContainer.style.left = `-${1800 - windowWidth}px`;
        }else{
    
        }
    }
    window.onfocus = function() {
        const windowWidth = window.innerWidth;
        if(windowWidth < 1920){
            indexContainer.style.left = `-${1800 - windowWidth}px`;
        }else{
    
        }
    }
}
