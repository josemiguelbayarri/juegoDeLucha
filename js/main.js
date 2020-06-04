let partida = {
    
    //propiedades 
    equipo1: [],
    equipo2: [],



    //metodos

    escoge(idLuchador){
        if(this.equipo1.lenght < 3){
            this.equipo1.push(allplayers[idLuchador]);
            console.log(this.equipo1);
        }else if(this.equipo2.length < 3){
            this.equipo2.push(allplayers[idLuchador]);
            console.log(this.equipo2);
        }

        
    }
}