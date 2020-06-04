let juego = {
    
    //propiedades 
    equipo1: [],
    equipo2: [],


    //metodos

    escoge1(idLuchador){
        //aqui programaremos la funcionalidad para escoger los personajes del primer equipo
        console.log("LA ID DEL LUCHADOR ESCOGIDO ES:", idLuchador);
        let elegir = organizer();
        if(this.equipo1.lenght < 3){
            elegir = false;
        }

       this.equipo1.push(allplayers[idLuchador]);

       console.log(this.equipo1);
    },

    escoge2(){
        //aqui programaremos la funcionalidad para escoger los personajes del segundo equipo
    },

}