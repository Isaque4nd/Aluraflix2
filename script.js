function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    var formatoErrado = document.getElementById("erro");
    if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".png") || filmeFavorito.endsWith(".jpeg")) {
        listarFilmesNaTela(filmeFavorito);
    } else {
        formatoErrado.innerHTML = "O formato do link adicionado não é aceito (não contém direcionamento para alguma imagem)." + "<br>" + "Adicione um link que termina em .jpg, .jpeg ou .png"; 
    }
    document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filmeFavorito) {
    console.log(filmeFavorito);
    var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
    var elementolistaFilmes = document.getElementById("listaFilmes");

    elementolistaFilmes.innerHTML = elementolistaFilmes.innerHTML + elementoFilmeFavorito;
}