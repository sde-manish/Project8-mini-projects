const buttons = document.querySelectorAll('#button');
const body = document.querySelector('body');
const defaultColorText = document.querySelector(".default");

buttons.forEach(function() { console.log("Button");})

buttons.forEach( function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e.target);
        if (e.target.className === 'grey') {
            body.style.backgroundColor = e.target.className;
            defaultColorText.style.display = 'grid';
        }else if (e.target.className === 'white') {
            body.style.backgroundColor = e.target.className;
            defaultColorText.style.display = 'grid';
        }else if (e.target.className === 'blue') {
            body.style.backgroundColor = e.target.className;
            defaultColorText.style.display = 'grid';
        }else if (e.target.className === 'yellow') {
            body.style.backgroundColor = e.target.className;
            defaultColorText.style.display = 'grid';
        }else if (e.target.className === 'default-color') {
            body.style.backgroundColor = 'rgb(3, 133, 133)';
            defaultColorText.style.display = 'none';
        }
    })
})

