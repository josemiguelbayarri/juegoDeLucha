let partida = {
    
    //propiedades 
    team1: [],
    team2: [],
    team1win: 0,
    team2win: 0,
    team2posibles: [],
    cont: 0,
    cont_fight: 0,
    fight_info: "",
    arg1: "",
    arg2: "",

    choose1(idfighter){

        this.team1.push(allplayers[idfighter]);

        if(this.team1.lenght < 4){
            document.getElementById(idfighter).className = "carasel";
            document.getElementById(idfighter).onclick = "";

        }

        for(let _x = 0; _x < this.team1.length; _x++){
            this.fight_info = document.getElementById("p1t" + _x);
            this.fight_info.innerHTML = `${this.team1[_x].Name} <br><br>Strength: ${this.team1[_x].Fuerza}<br><br>
                Defense: ${this.team1[_x].Defensa}<br><br> Luck: ${this.team1[_x].Suerte}<br><br> `;
        }

        //delay y pasamos a la funcion que detecta los personajes para el player 2.
        if(this.team1.length == 3){
            //inhabilitamos el click en todas las imagenes.
            for(_r = 1; _r < 10; _r++){
                document.getElementById(_r).onclick = "";
            }

            resolveIn(2000).then(delay => {
                this.init3();
            });
        }
    },
    choose2(idfighter2, idfighter2_d){
        this.fight_info = "";

        this.team2.push(this.team2posibles[idfighter2]);

        if(this.team2.length < 4){

            document.getElementById(idfighter2_d).className = "carasel";

            document.getElementById(idfighter2_d).onclick = "";

        }

        for(let _c = 0; _c < this.team2.length; _c++){
            this.fight_info = document.getElementById("p2t" + _c);

            this.fight_info.innerHTML = `${this.team2[_c].Name} <br><br>Strength: ${this.team2[_c].Fuerza}<br><br>
            Defense: ${this.team2[_c].Defensa}<br><br> Luck: ${this.team2[_c].Suerte}<br><br> `;

        }

        //delay y pasamos a la funcion que detecta los personajes del player 2
        if(this.team2.length == 3){

            for(_r2 = 11; _r2 < 17; _r2++){
                document.getElementById(_r2).onclick = "";
            }

            resolveIn(2000).then(delay => {

                this.init4();
            });

        }

    },
    init1(){
        location.reload(true);
    },
    init2() {
        this.organizer(2);
    },
    init3() {
        this.organizer(3);

        this.team2posibles = [f1, f2, f3, f4, f5, f6, f7, f8, f9];
        this.team2posibles = this.team2posibles.filter(val => !this.team1.includes(val));

        let plena_r2 = document.getElementById("pantalla3");
        plena_r2.innerHTML = `<div class="centrar">
            <div class="rooscont">
                <div class="faces">
                    <div class="facesup">

                    </div>
                    <div class="facesin">
                        <div class="cara"></div>
                        <div class="cara"><img src="img/fi/${this.team2posibles[0].Name}.png" alt="" id="11" onclick="partida.choose2(0,11)">
                            <div class="nom">${this.team2posibles[0].Name}</div>
                        </div>
                        <div class="cara"><img src="img/fi/${this.team2posibles[1].Name}.png" alt="" id="12" onclick="partida.choose2(1,12)">
                            <div class="nom">${this.team2posibles[1].Name}</div>
                        </div>
                        <div class="cara"><img src="img/fi/${this.team2posibles[2].Name}.png" alt="" id="13" onclick="partida.choose2(2,13)">
                            <div class="nom">${this.team2posibles[2].Name}</div>
                        </div>
                        <div class="cara"><img src="img/fi/${this.team2posibles[3].Name}.png" alt="" id="14" onclick="partida.choose2(3,14)">
                            <div class="nom">${this.team2posibles[3].Name}</div>
                        </div>
                        <div class="cara"><img src="img/fi/${this.team2posibles[4].Name}.png" alt="" id="15" onclick="partida.choose2(4,15)">
                            <div class="nom">${this.team2posibles[4].Name}</div>
                        </div>
                        <div class="cara"><img src="img/fi/${this.team2posibles[5].Name}.png" alt="" id="16" onclick="partida.choose2(5,16)">
                            <div class="nom">${this.team2posibles[5].Name}</div>
                        </div>
                        
                        <div class="cara"></div>
                    </div>
                </div>
                <div class="p1message">PLAYER 2<br><br> - SELECT YOUR 3 FIGHTERS -</div>

                <div class="fighterscont">
                    <div class="fightlm"></div>
                    <div id="p2t0" class="p1f"></div>
                    <div id="p2t1" class="p1f"></div>
                    <div id="p2t2" class="p1f"></div>
                    <div class="fightrm"></div>
                </div>
            </div>
        </div>
        </div>`;
    },
    init4() {

        this.organizer(4);

        let plena_pf = document.getElementById("fase4");
        plena_pf.innerHTML = `<div class="centrar">
        <div class="prefightking">
            <div class="getready">
                <div class="getready1"></div>
                <div class="getready2">FIGHT STARTS IN A FEW SECONDS...GET READY!!!</div>
            </div>
            <div class="prerest">
                

                <div class="prerestin">
                    <div class="preroundt"></div>
                    
                    <div class="preround1">
                    <img src="img/fi/${this.team1[0].Name}f.png" alt="">  VS
                    <img src="img/fi/${this.team2[0].Name}f.png" alt="">
                    </div>
                    
                    <div class="preroundt"></div>
                    
                    <div class="preround1">
                    <img src="img/fi/${this.team1[1].Name}f.png" alt="">  VS
                    <img src="img/fi/${this.team2[1].Name}f.png" alt="">
                    </div>
                    
                    <div class="preroundt"></div>
                    
                    <div class="preround1">
                    <img src="img/fi/${this.team1[2].Name}f.png" alt="">  VS
                    <img src="img/fi/${this.team2[2].Name}f.png" alt="">
                    </div>
                
                </div>
                
            </div>
        </div>`;

        resolveIn(2550).then(delay => {
            this.init5();
        });
    },
    init5() {
        this.organizer(5);

        if (this.cont_fight < 3) {
            
            //luchadores actuales.
            arg1 = this.team1[this.cont_fight];
            arg2 = this.team2[this.cont_fight];

            let plena_pf3 = document.getElementById("fase5");
            plena_pf3.innerHTML = `<div class="cabecera">
        <div class="cab1"></div>
        <div class="cab2">FIGHT ${this.cont_fight + 1}</div>
        <div class="cab3"></div>
    </div>
    <div class="bodyfight">
        <div class="bloca">
            <div class="luch1name">${this.team1[this.cont_fight].Name}</div>
            <div class="luch1sprite"><img src="./img/fi/${this.team1[this.cont_fight].Name}p1.png"></div>
            <div id="glad1v" class="luch1life">PLAYER 1 LIFE : ${this.team1[this.cont_fight].Vida}</div>
        </div>
        <div class="blocb">
            <div class="luch2name">${this.team2[this.cont_fight].Name}</div>
            <div class="luch2sprite"><img src="./img/fi/${this.team2[this.cont_fight].Name}p2.png"></div>
            <div id="glad2v" class="luch2life">PLAYER 2 LIFE : ${this.team2[this.cont_fight].Vida}</div>
        </div>
    </div>
    <div class="announcement">
        <div class="ann1"></div>
        <div id ="anuncioko" class="ann2"></div>
        <div class="ann3"></div>
    </div>
    <div class="punch">
        <div class="pun1"></div>
        <div class="pun2"><img id="fist" class ="hitter" src="./img/punch.png" onclick="game.turnoFight(arg1,arg2)"></div>
        <div class="pun3"></div>
    </div>`;
        } else {

            //entramos en la fase final....
            resolveIn(1500).then(delay => {
                this.init6();
            });
        }
    },
    init6() {
        this.organizer(6);

        let pn = 0;
        let pnc = 0;
        let tw = "";

        //comprobación del equipo ganador....
        if (this.team1win > this.team2win) {
            pn = 1;
            pnc = this.team1win;
            tw = this.team1;
        } else {
            pn = 2;
            pnc = this.team2win;
            tw = this.team2;
        };

        let plena_end = document.getElementById("fase6");
        plena_end.innerHTML = `<div class="centrar">
            <div class="winann">
                <div class="winteam">TEAM ${pn}</div>
                <div class="wininfo">
                    <div class="wpinfo">PLAYER ${pn} WON ${pnc} COMBATS OUT OF 3</div>
                    <div class="wrestinfo">
                        <div class="carasganan"><img src="img/fi/${tw[0].Name}f.png" alt="">
                        <img src="img/fi/${tw[1].Name}f.png" alt="">
                        <img src="img/fi/${tw[2].Name}f.png" alt=""></div>
                        <div class="winlogo"><img src="./img/winner.png"></div>
                        <div class="textrest"><p class="totres" onclick="partida.init1()">CLICK HERE TO PLAY AGAIN</p></div>
                        <div class="espaciowin"></div>
                    </div>
                </div>
            </div>
        </div>`;
    },
    organizer(arg_O) {

        let fasewant = "pantalla" + arg_O;
        let arrFases = ["pantalla1", "pantalla2", "pantalla3", "pantalla4", "pantalla5", "pantalla6"];

        arrFases = arrFases.filter(val => !fasewant.includes(val));

        document.getElementById(fasewant).style.display = "flex";

        for (let _f of arrFases) {
            document.getElementById(_f).style.display = "none";
        }
    }

}
 
