let contador = 0;

const botao = document.getElementById("btnClique");
const mensagem = document.getElementById("mensagem");
const spanContador = document.getElementById("contador");

botao.addEventListener("click", function () {
    contador++;
    mensagem.textContent = "Você clicou no botão!";
    spanContador.textContent = contador;
});

// Dark mode
const btnDarkMode = document.getElementById("btnDarkMode");

btnDarkMode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Mostrar / esconder projetos
const btnProjetos = document.getElementById("btnProjetos");
const listaProjetos = document.getElementById("listaProjetos");

btnProjetos.addEventListener("click", function () {
    if (listaProjetos.style.display === "none") {
        listaProjetos.style.display = "block";
        btnProjetos.textContent = "Esconder projetos";
    } else {
        listaProjetos.style.display = "none";
        btnProjetos.textContent = "Mostrar projetos";
    }
});
