let tecla = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39
};

let teclas = {
    W: 87,
    A: 65,
    S: 83,
    D: 68
};

let tecliado = {
    O: 79,
    L: 76,
    K: 75,
    Ñ: 192
};

let vp = document.getElementById('villaplatzi');
let papel = vp.getContext('2d');
let x = 100;
let y = 300;
let x1 = 300;
let y1 = 100;
let x2 = 200;
let y2 = 200;




let fondo = {
    url: 'tile.png',
    cargarOK: false
};

let vaca = {
    url: 'vaca.png',
    cargaOK: 'false'
};

let cerdo = {
    url:'cerdo.png',
    cargarOK: 'false'
};

let pollo = {
    url:'pollo.png',
    cargarOK: 'false'
};

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener('load', cargarfondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener('load', cargarvacas);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener('load', cargarcerdo);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener('load', cargarpollo);


function cargarfondo() {
    fondo.cargarOK = true;
    dibujar();
}

function cargarvacas() {
    vaca.cargaOK = true;
    dibujar();
}

function cargarcerdo() {
    cerdo.cargarOK = true;
    dibujar();
}

function cargarpollo() {
    pollo.cargarOK = true;
    dibujar();
}

function dibujar() {
    if (fondo.cargarOK) {
        papel.drawImage(fondo.objeto, 0, 0);
    } 
    
    if (vaca.cargaOK) {
            papel.drawImage(vaca.objeto, x2, y2);
        
        
    } 

    if (cerdo.cargarOK) {
        papel.drawImage(cerdo.objeto, x, y);
    }

    if (pollo.cargarOK) {
    
            papel.drawImage(pollo.objeto, x1, y1);
        
    }
    
}


    

document.addEventListener('keydown', mover);
function mover(evento) {
    let mover = 10;
    switch(evento.keyCode) {
        
        case tecla.UP:
                papel.drawImage(cerdo.objeto,x, y - mover);
                y = y - mover;
                dibujar();
            break;

        case tecla.DOWN:
            papel.drawImage(cerdo.objeto, x, y + mover);
                y = y + mover;
                dibujar();
            break
        
        case tecla.LEFT: 
        papel.drawImage(cerdo.objeto, x - mover, y);
                x = x - mover;
                dibujar();
            break
            
        case tecla.RIGTH:
            papel.drawImage(cerdo.objeto, x + mover, y);
                x = x + mover;
                dibujar();
            break     
    }

    switch(evento.keyCode) {
    
        case teclas.W:
                papel.drawImage(pollo.objeto,x1, y1 - mover);
                y1 = y1 - mover;
                dibujar();
            break;

        case teclas.S:
            papel.drawImage(pollo.objeto, x1, y1 + mover);
                y1 = y1 + mover;
                dibujar();
            break
        
        case teclas.A: 
        papel.drawImage(pollo.objeto, x1 - mover, y1);
                x1 = x1 - mover;
                dibujar();
            break
            
        case teclas.D:
            papel.drawImage(pollo.objeto, x1 + mover, y1);
                x1 = x1 + mover;
                dibujar();
            break     
}

    switch (evento.keyCode) {

        case tecliado.O:
            papel.drawImage(vaca.objeto,x2, y2 - mover);
            y2 = y2 - mover;
            dibujar();
        break;

        case tecliado.L:
            papel.drawImage(vaca.objeto, x2, y2 + mover);
                y2 = y2 + mover;
                dibujar();
        break
    
        case tecliado.K: 
            papel.drawImage(vaca.objeto, x2 - mover, y2);
                x2 = x2 - mover;
                dibujar();
        break
        
        case tecliado.Ñ:
            papel.drawImage(vaca.objeto, x2 + mover, y2);
                x2 = x2 + mover;
                dibujar();
        break             
    }
}





  
    


function aleatorio(min, maxi) {
    let resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}