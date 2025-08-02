const start = document.querySelector('#start');
    const stop = document.querySelector('#stop');

    const randomColor = function(){
        const hex = '0123456789ABCDEF'
        let color = '#'
        for(let i = 0; i < 6; i++){
            color += hex[Math.floor(Math.random() * 16)]
        }
        return color;
    }
    
    let interval;
    const execute = function(){
        interval = setInterval(colorChange, 2000);

        function colorChange(){
            document.querySelector('body').style.backgroundColor = randomColor();
        }
    }
    start.addEventListener('click', execute);
    
    stop.addEventListener('click', function(){
        clearInterval(interval);
        console.log("Stopped and this color sustains");
    })