
// creamos la estructura basica de personajes y juego

class Fighter{
    constructor(nombre, defensa, ataque, agilidad, suerte){
        this.nombre = nombre;
        this.defensa = defensa;
        this.ataque = ataque;
        this.agilidad = agilidad;
        this.suerte = suerte;
        this.vida = 100;
    }

    atacar(){
        let luck = funciones.random(1, enemigo.suerte);

        let hit = (this.ataque - enemigo.defensa) * luck;

        enemigo.vida -= hit;
    }



    defenderse(){

    }

    esquivar(){

    }

    especial(){
        let hit = (this.ataque + 2);

        enemigo.vida -= hit;
    }
}



//instanciamos a los luchadores
let f1 = new Fighter("Jago", 20, 40, 70, 30);
let f2 = new Fighter("Black Orchid", 40, 30, 75, 35);
let f3 = new Fighter("Cinder", 10, 60, 50, 85);
let f4 = new Fighter("Spinal", 80, 50, 10, 0);
let f5 = new Fighter("Fulgore", 90, 40, 25, 15);
let f6 = new Fighter("Sabrewulf", 25, 70, 40, 95);
let f7 = new Fighter("Riptor", 10, 100, 80, 35);
let f8 = new Fighter("Glacius", 70, 70, 70, 75);
let f9 = new Fighter("Combo", 90, 90, 50, 2);


//traductor
let allplayers = {
    "1": f1,
    "2": f2,
    "3": f3,
    "4": f4,
    "5": f5,
    "6": f6,
    "7": f7,
    "8": f8,
    "9": f9,
}