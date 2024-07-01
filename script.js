document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const body = document.querySelector('.body'); 

    if (body === null) {
        console.error('No element found with the class "body"');
        return;
    }

    buttons.forEach(function(button) {
        console.log(button);
        button.addEventListener('click', function(e) {
            console.log(e);
            console.log(e.target);
            body.style.backgroundColor = e.target.id; 
        });
    });
});
