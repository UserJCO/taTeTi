let jugador = 'X';  //definimos el primer click que va a ser X
for (let i = 1; i <= 9; i++) {
    document.getElementById('ct' + i).addEventListener('click', presion);   //solo definimos donde vamos a escuchar un click, en este caso en la cuadricuta CT 
}

function presion(evt) {
    if(evt.target.value == undefined){  // leemos si dentro del lugar donde hicimos click (evt) hay valor,
        evt.target.value = jugador;     // si no hay valor ejecutamos 
        if (jugador == 'X'){
            evt.target.innerHTML = "X";
            jugador = 'O';
        }else{
            evt.target.innerHTML = "O";
            jugador = 'X';
        }
    } else{
        alert('otro');
    }
    verificarGanador();
}

function verificarGanador() {
    let b1 = document.getElementById('ct1').value;
    let b2 = document.getElementById('ct2').value;
    let b3 = document.getElementById('ct3').value;
    let b4 = document.getElementById('ct4').value;
    let b5 = document.getElementById('ct5').value;
    let b6 = document.getElementById('ct6').value;
    let b7 = document.getElementById('ct7').value;
    let b8 = document.getElementById('ct8').value;
    let b9 = document.getElementById('ct9').value;

            if (b1 == 'X' && b2 == 'X' && b3 == 'X')
                alert('Gano la X');
            
            if (b4 == 'X' && b5 == 'X' && b6 == 'X')
                alert('Gano la X');
            if (b7 == 'X' && b8 == 'X' && b9 == 'X')
                alert('Gano la X');
            if (b1 == 'X' && b4 == 'X' && b7 == 'X')
                alert('Gano la X');
            if (b2 == 'X' && b5 == 'X' && b8 == 'X')
                alert('Gano la X');
            if (b3 == 'X' && b6 == 'X' && b9 == 'X')
                alert('Gano la X');
            if (b1 == 'X' && b5 == 'X' && b9 == 'X')
                alert('Gano la X');
            if (b3 == 'X' && b5 == 'X' && b7 == 'X')
                alert('Gano la X');

            if (b1 == 'O' && b2 == 'O' && b3 == 'O')
                alert('Gano la O');
            if (b4 == 'O' && b5 == 'O' && b6 == 'O')
                alert('Gano la O');
            if (b7 == 'O' && b8 == 'O' && b9 == 'O')
                alert('Gano la O');
            if (b1 == 'O' && b4 == 'O' && b7 == 'O')
                alert('Gano la O');
            if (b2 == 'O' && b5 == 'O' && b8 == 'O')
                alert('Gano la O');
            if (b3 == 'O' && b6 == 'O' && b9 == 'O')
                alert('Gano la O');
            if (b1 == 'O' && b5 == 'O' && b9 == 'O')
                alert('Gano la O');
            if (b3 == 'O' && b5 == 'O' && b7 == 'O')
                alert('Gano la O');
        }