document.addEventListener("keydown", function (event) {
    if (event.altKey && event.key === "F12") {
        
        
        document.body.style.backgroundImage = `url('https://picsum.photos/${innerWidth}/${innerHeight}?aa=${Math.random()}')`;
        
    }
});