let imagenes = [];
imagenes['cauchin'] = 'vaca.png';
imagenes['Pokacho'] = 'pollo.png';
imagenes['Tocinauro'] = 'cerdo.png';

class Pakiman {

    constructor(n, v, a) {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;

        this.imagen.src = imagenes[this.nombre]; 
    }
    hablar() {
        
        alert(this.nombre);
        
    }
    mostrar() {
        document.body.appendChild(this.imagen);
        document.write('<center>');        
        document.write('<p>');
        document.write('<strong>' + this.nombre +'</strong><br />');
        document.write('vida: ' + this.vida + '<br />');
        document.write('ataque: ' + this.ataque + '<hr />');
        document.write('</p>');
        document.write('</center>')
    }
}

let cauchin = new Pakiman('cauchin', 100, 30);
let pokacho =new Pakiman('Pokacho', 80, 50);
let tocinauro = new Pakiman('Tocinauro', 120, 40);

pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();
