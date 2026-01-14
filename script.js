let contador = 0;

const botao = document.getElementById("btnClique");
const mensagem = document.getElementById("mensagem");
const spanContador = document.getElementById("contador");

botao.addEventListener("click", function () {
    contador++;
    mensagem.textContent = "Você clicou no botão!";
    spanContador.textContent = contador;
});

const btnDarkMode = document.ElementById("btnDarkMode");

btnDarkMode.addEventListener("click", function() {
    document.body.classlist.toggle("dark-mode");
});

const btnProjetos = document.getElementById("btnProjetos");
const listaProjetos = document.ElementById("listaProjetos");

btnProjetos.addEventListener("click", function() {
    if (listaProjetos.style.display === "none") {
        listaProjetos.style.display = "block";
        btnProjetos.textContent = "Esconder projetos";
    } else {
        listaProjetos.style.display = "none";
        btnProjetos.textContent = "Mostrar projetos";
    }
});