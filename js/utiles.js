const organizer = (arg_0) => {
    let fasewant = "pantalla" + arg_0;

    let arrFases = ["pantalla1", "pantalla2", "pantalla3", "pantalla4", "pantalla5"];

    arrFases = arrFases.filter(val => !fasewant.includes(val));

    document.getElementById(fasewant).style.display = "flex";

    for (let _f of arrFases){
        document.getElementById(_f).style.display = "none";
    }

}