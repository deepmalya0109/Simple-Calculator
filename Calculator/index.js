(function(){
    let screen = document.querySelector('.screen');
    let button = document.querySelectorAll('.btn');
    let equal = document.querySelector('.equals');
    let clear = document.querySelector('.n4');
 

    button.forEach(function(buttons){
        buttons.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });


    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = "Please Enter";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    
    clear.addEventListener('click', function(e){
        screen.value = "";
        })
})();