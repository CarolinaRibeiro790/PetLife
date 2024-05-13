var elementosDuvida = document.querySelectorAll('.duvida');

//forEach significa para cada
elementosDuvida.forEach(function(duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa');
    })
});

