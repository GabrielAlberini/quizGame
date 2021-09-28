console.log("Inicio")



leerPregunta()

function leerPregunta () {
    let base_preguntas = readText("JSON/questions.json");
    let interprete_bp = JSON.parse(base_preguntas);
    pregunta = interprete_bp[n]
    select_id("categoria").innerHTML = pregunta.categoria;
}




console.log("Fin")