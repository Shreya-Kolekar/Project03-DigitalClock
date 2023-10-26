const clock = document.getElementById('clock');

// method to run after a certain interval continuously -- setInterval

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML =  date.toLocaleTimeString();
}, 1000);
