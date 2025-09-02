document.addEventListener("DOMContentLoaded", () => {
    const rotateBtn = document.getElementById("rotate");
    const sofaImg = document.getElementById("sofa");
    const closeIcon = document.getElementById("closeIcon");

    // clicar em 360 para trocar para sofa_rotate.gif
    rotateBtn.addEventListener("click", () => {
        // troca a imagem mostrada
        sofaImg.src = "assets/sofa_rotate.gif";
        // esconde o 360
        rotateBtn.style.display = "none";
        // mostra o icone x
        closeIcon.style.display = "block";
    });

    // clique no icone x para voltar
    closeIcon.addEventListener("click", () => {
        // troca a imagem mostrada
        sofaImg.src = "assets/sofa.png";
        // mostra o 360
        rotateBtn.style.display = "block";
        // esconde o icone x
        closeIcon.style.display = "none";
    });
})