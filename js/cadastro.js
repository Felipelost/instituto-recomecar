const formularioCadastro = document.getElementById("formulario-cadastro");
const botaoVerificar = document.getElementById("verificar-cadastro");
const resultadoCadastro = document.getElementById("resultado-cadastro");

if (formularioCadastro && botaoVerificar && resultadoCadastro) {
    botaoVerificar.disabled = false;

    formularioCadastro.addEventListener("submit", (evento) => {
        evento.preventDefault();
    });

    formularioCadastro.addEventListener("input", () => {
        resultadoCadastro.textContent = "";
    });

    formularioCadastro.addEventListener("change", () => {
        resultadoCadastro.textContent = "";
    });

    botaoVerificar.addEventListener("click", () => {
        resultadoCadastro.textContent = "";

        if (!formularioCadastro.reportValidity()) {
            return;
        }

        resultadoCadastro.textContent =
            "Os campos atendem às regras de preenchimento desta demonstração. Nenhum dado foi enviado ou armazenado pelo site.";
    });
}