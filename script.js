document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
        });
    });
});

const form = document.getElementById("mensagem");

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(" ");
    return nomeComoArray.length >= 2 && nomeComoArray[1] != "";
}

form.addEventListener("submit", function (e) {
    let formEValido = false;
    e.preventDefault();

    const nomeUsuario = document.getElementById("nomeUsuario");
    const emailUsuario = document.getElementById("emailUsuario");
    const telUsuario = document.getElementById("telUsuario");
    const mensage = document.getElementById("mensage");

    formEValido = validaNome(nomeUsuario.value);
    if (formEValido) {
        alert("Muito Obrigado pela sua mensagem!");

        nomeUsuario.value = "";
        emailUsuario.value = "";
        telUsuario.value = "";
        mensage.value = "";
    } else {
        alert("Por Favor. Insira o nome completo!");
    }
});

console.log(form);
