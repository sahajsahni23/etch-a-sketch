const container = document.querySelector('#container');
for(let i=0; i<256; i++){
    const content = document.createElement('div');
    content.classList.add('content');
    //content.textContent = 'This is the glorious text-content!';
    container.appendChild(content);
    
}

const content = document.querySelectorAll('div');
for(i=0; i<256; i++){
content[i].addEventListener("mouseover", function(event){
    if(!event.target.style.background){
    let x = Math.floor( Math.random() * 256 );
    let y = Math.floor( Math.random() * 256 );
    let z = Math.floor( Math.random() * 256 );
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    event.target.style.background = bgColor;
    }
});
}


const resetButton = document.querySelector("#resetBtn");

resetButton.addEventListener("click", function(event){
    for(i=0; i<257; i++){
    content[i].style.background = null;
    }
});