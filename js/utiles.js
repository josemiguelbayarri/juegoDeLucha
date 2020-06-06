//objeto útil de funciones ...
const func = {

    minMax: (n, min, max) => {
        //limite del minimo y el maximo
        return Math.max(Math.min(n, max), min);
    },
    random(min, max){
        //creacion de numero aleatoria
        return Math.floor(Math.random() * (max - min) + min);
    }
}

function log (arg){
    //console log..
    console.log(arg);
}


//funcion de delay...

const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));