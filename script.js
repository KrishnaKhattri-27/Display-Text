(function () {

    const message = document.querySelector("#fuck");

    message.addEventListener('submit', function(e) {
      
        e.preventDefault()
        const sub = document.querySelector('#typehere');
        const feed = document.querySelector('.feedback');
        const result = document.querySelector('.display');


        if (sub.value === '') {
            feed.classList.add('show')
            setTimeout(function () {
                feed.classList.remove('show')
                // feed.classList.add('feedback')
            }, 4000)
        } else {     
            result.textContent = sub.value;

            sub.value = '';
        }
    })
    
})()