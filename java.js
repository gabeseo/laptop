window.unload = function(){
    redP();
}


function redP(){
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Hey I\'m red!';
    paragraph.style.color = 'red';

    const container = document.getElementById('container');
    container.appendChild(paragraph);
}
