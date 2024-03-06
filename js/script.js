document.addEventListener("DOMContentLoaded", function() {
    const secao1 = document.getElementById("secao1");
    const secao2 = document.getElementById("secao2");
    const trocarSecaoBotao = document.getElementById("trocar-secao");

    trocarSecaoBotao.addEventListener("click", function() {
        // Adiciona classes para controlar a transição suave
        secao1.classList.add("fade-out", "hidden");
        secao2.classList.add("fade-in", "active");

        // Remove a classe "active" da secao1 após a transição
        setTimeout(function() {
            secao1.classList.remove("active");
            secao1.classList.remove("fade-out");
        }, 5000); // Tempo da transição em milissegundos
    });
});

