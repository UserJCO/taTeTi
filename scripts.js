let turno = "P1";
const cuadroDeTablero = document.querySelectorAll('.cuadro');

cuadroDeTablero.forEach((element, i) => {
    element.addEventListener('click', marca);
        
    function marca(evt) {
        if(element.textContent !== ""){
            return
        }
    if(turno == 'PAUSA'){
        return;
    }else{
        if (turno == 'P1'){
        element.innerHTML = 'X';
        turno = 'P2';
    }else{
        element.innerHTML = 'O';
        turno = 'P1';
    }
        juego()
    }
}
});

function juego (){
    let estadoDeJuego = Array.from(cuadroDeTablero).map(cuadroDeTablero => cuadroDeTablero.textContent);
    if (estadoDeJuego.includes("")){
    for(let i=0; i<=9; i+=3){
        if(estadoDeJuego[i] && estadoDeJuego[i] == estadoDeJuego[i+1] && estadoDeJuego[i] == estadoDeJuego[i+2]){
            return ganador([i,i+1,i+2])
         }
    }
    for(let i=0; i<3; i++){
        if(estadoDeJuego[i] && estadoDeJuego[i] == estadoDeJuego[i+3] && estadoDeJuego [i] == estadoDeJuego[i+6]){
            return ganador([i,i+3,i+6])
        }
    }
        if(estadoDeJuego[0] && estadoDeJuego[0] == estadoDeJuego[4] && estadoDeJuego [0] == estadoDeJuego[8]){
            return ganador([0,4,8])
        }
    
    
        if(estadoDeJuego[2] && estadoDeJuego[2] == estadoDeJuego[4] && estadoDeJuego [2] == estadoDeJuego[6]){
            return ganador([2,4,6])
        }} else{
            return empate()
        }
    

    function ganador(arr) {
        arr.forEach(elemento => {
            cuadroDeTablero[elemento].classList.toggle('ganador', true)
        })
        turno = 'PAUSA'
    }

    function empate(){
        alert('empate')
        turno = 'PAUSA'
    }
}

