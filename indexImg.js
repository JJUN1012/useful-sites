window.onload = function() {
    const indexContainer = document.querySelector('.indexMainContainer');
    const windowWidth = window.innerWidth;
    if(windowWidth < 1920 && windowWidth > 1300){
        indexContainer.style.left = `-${1920 - windowWidth}px`;
    }else if(windowWidth > 1920){

    }else{
        indexContainer.style.left = `0px`;
    }
    window.onresize = function() {
        const windowWidth = window.innerWidth;
        if(windowWidth < 1920 && windowWidth > 1300){
            indexContainer.style.left = `-${1920 - windowWidth}px`;
        }else if(windowWidth > 1920){
    
        }else{
            indexContainer.style.left = `0px`;
        }
    }
    window.onfocus = function() {
        const windowWidth = window.innerWidth;
        if(windowWidth < 1920 && windowWidth > 1300){
            indexContainer.style.left = `-${1920 - windowWidth}px`;
        }else if(windowWidth > 1920){
    
        }else{ 
            indexContainer.style.left = `0px`;
        }
    }
}
