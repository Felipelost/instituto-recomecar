const botaoContraste = document.getElementById("alternar-contraste");

function aplicarContraste(ativo) {
    document.body.classList.toggle("alto-contraste", ativo);

    if (botaoContraste) {
        botaoContraste.setAttribute("aria-pressed", String(ativo));
    }
}

let contrasteSalvo = false;

try {
    contrasteSalvo = localStorage.getItem("alto-contraste") === "true";
} catch {
    contrasteSalvo = false;
}

aplicarContraste(contrasteSalvo);

if (botaoContraste) {
    botaoContraste.addEventListener("click", () => {
        const ativo = !document.body.classList.contains("alto-contraste");

        aplicarContraste(ativo);

        try {
            localStorage.setItem("alto-contraste", String(ativo));
        } catch {
        }
    });
}