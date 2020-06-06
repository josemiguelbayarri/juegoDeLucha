
// creamos la estructura basica de personajes y juego

class Fighter{
    constructor(nombre, defensa, ataque, agilidad, suerte, velocidad){
        this.Vida = 200;
        this.Nombre = nombre;
        this.Defensa = defensa;
        this.Ataque = ataque;
        this.Agilidad = agilidad;
        this.Suerte = suerte;
        this.Velocidad = velocidad;
        
    }

    atacar(enemigo){
        let luck = func.random(1, enemigo.suerte); // suerte defensa
        let handic = func.random(1, 5); //handicap ataque
        let hit = (this.Ataque - handic) - (enemigo.Defensa + suerte);
        let speed = func.random(1, 100); //handicap de velocidad

        if(speed < enemigo.Velocidad){
            hit -= func.random(1, 5);
        }
        enemigo.Vida -= hit;
    }

}



//instanciamos a los luchadores
let f1 = new Fighter("Jago", 20, 40, 70, 30, 90);
let f2 = new Fighter("Black Orchid", 40, 30, 75, 35, 80);
let f3 = new Fighter("Cinder", 10, 60, 50, 85, 70);
let f4 = new Fighter("Spinal", 80, 50, 10, 0, 59);
let f5 = new Fighter("Fulgore", 90, 40, 25, 15, 69);
let f6 = new Fighter("Sabrewulf", 25, 70, 40, 95, 95);
let f7 = new Fighter("Riptor", 10, 100, 80, 35, 100);
let f8 = new Fighter("Glacius", 70, 70, 70, 75, 70);
let f9 = new Fighter("Combo", 90, 90, 50, 2, 88);


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

//juego
let game = {
    turno: 0,
    winner: "",
    victoriap2: "",
    victoriap1: "",
    iniciativa: "",
    p1: "",
    p2: "",

    resetFight(){
        this.turno = 0;
        this.iniciativa = "";
        this.p1 = "";
        this.p2 = "";
    },
    clearFight(){
        this.resetFight();

        partida.cont_fight++;
        this.p1.Vida = 200;
        this.p2.Vida = 300;

        partida.init5();
    },
    turnoFight(arglu1, arglu2){

        iniciativa = func.random(1, 3);

        this.turno++;
        this.p1 = arglu1;
        this.p2 = arglu2;

        //condición del luchador1 y acciones
        if(this.p1.vida > 0){
            if(this.iniciativa == 1){
                this.victoriap1 = (this.p2.Vida <= 0) ? "v" : "m";
                if(this.victoriap1 == "v"){
                    //gana el player1
                }else{
                    this.p1.atacar(this.p2);

                    if(this.p2.Vida < 0){
                        this.p2.Vida = 0;
                    }

                    let lbact = document.getElementById("..");//REVISARRRRRRRRRRRRR EN EL INDEXXXXXXXX
                    lbact.innerHTML = `Player 2 life : ${this.p2.Vida}`;
                }
            }
        }else{
            //gana el player2
            document.getElementById("..").onclick = "";//REVISARRRRRRRRRRRRR EN EL INDEXXXXXXXX
            this.winner = `${this.p2.Name} WINS... ${this.p1.Name} IS KO`;


            let koknow2 = document.getElementById("..");//REVISARRRRRRRRRRRRR EN EL INDEXXXXXXXX
            koknow2.innerHTML = `${this.p2.Name} WINS... ${this.p1.Name} IS KO`;

            partida.team2win++;

            resolveIn(1500).then(delay => {
                //console.log("gana el equipo 2");
                this.clearFight();
            });
        }

        //condicion y acciones player2
        if(this.p2.Vida > 0){
            if(iniciativa == 2){
                this.victoriap2 = (this.p1.Vida <= 0) ? "v" : "m";
                if(this.victoriap2 == "v"){
                    //gana el player
                }else{

                    this.p2.atacar(this.p1);

                    if(this.p1.Vida < 0){
                        this.p1.Vida = 0;
                    }
                    let lbact = document.getElementById("..");//REVISARRRRRRRRRRRRR EN EL INDEXXXXXXXX
                    lbact.innerHTML = `PLAYER 1 LIFE : ${this.p1.Vida}`;
                }
            }
        }else{
            //gana el player1
            this.winner = `${this.p1.Name} GANA ${this.p2.Name} KO`;
            document.getElementById("..").onclick = "";//REVISARRRRRRRRRRRRR EN EL INDEXXXXXXXX

            let koknow = document.getElementById("..");//REVISARRRRRRRRRRRRR EN EL INDEXXXXXXXX

            koknow.innerHTML = `${this.p1.Name} WINS.. ${this.p2.Name} IS KO`;

            partida.team1win++;

            resolveIn(2000).then(delay => {
                //console.log("gana el equipo1");
                this.clearFight();
            });
        }
    }
}