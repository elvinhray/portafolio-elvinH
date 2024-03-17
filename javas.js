function enviarComentario() {
    var comentario = document.getElementById("comentarios").value;

    if (comentario.trim() === "") {
        alert("No se puede mandar un comnetario vacio.");
    } else {
        alert("Gracias por su comentario: " + comentario);
    }
}
