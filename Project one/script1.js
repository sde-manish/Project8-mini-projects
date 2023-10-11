const buttons = document.querySelectorAll('#button');
const body = document.querySelector('body');

buttons.forEach(function() { console.log("Button");})

buttons.forEach( function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e.target);
        if (e.target.className === 'grey') {
            body.style.backgroundColor = e.target.className
        }else if (e.target.className === 'white') {
            body.style.backgroundColor = e.target.className
        }else if (e.target.className === 'blue') {
            body.style.backgroundColor = e.target.className
        }else if (e.target.className === 'yellow') {
            body.style.backgroundColor = e.target.className
        }
    })
})