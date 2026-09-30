const fs = require("node:fs/promises");
const path = require("node:path");
const { minify: minificarHTML } = require("html-minifier-terser");
const CleanCSS = require("clean-css");
const { minify: minificarJS } = require("terser");
const sharp = require("sharp");

const raiz = __dirname;
const destino = path.join(raiz, "dist");
const resultados = [];

async function salvar(arquivo, original, otimizado, categoria) {
    const saida = path.join(destino, arquivo);

    await fs.mkdir(path.dirname(saida), { recursive: true });
    await fs.writeFile(saida, otimizado);

    const antes = original.length;
    const depois = Buffer.byteLength(otimizado);

    resultados.push({
        arquivo,
        categoria,
        antes,
        depois,
        reducao: antes ? ((1 - depois / antes) * 100).toFixed(2) + "%" : "0%"
    });
}

async function processar(arquivo) {
    const original = await fs.readFile(path.join(raiz, arquivo));
    const extensao = path.extname(arquivo).toLowerCase();
    let otimizado = original;
    let categoria = "Outros";

    if (extensao === ".html") {
        categoria = "HTML";
        otimizado = await minificarHTML(original.toString("utf8"), {
            collapseWhitespace: true,
            conservativeCollapse: true,
            removeComments: true,
            minifyCSS: true,
            minifyJS: true
        });
    } else if (extensao === ".css") {
        categoria = "CSS";
        const resultado = new CleanCSS({ level: 1 }).minify(
            original.toString("utf8")
        );

        if (resultado.errors.length) {
            throw new Error(resultado.errors.join("\n"));
        }

        otimizado = resultado.styles;
    } else if (extensao === ".js") {
        categoria = "JavaScript";
        const resultado = await minificarJS(original.toString("utf8"), {
            compress: true,
            mangle: true,
            format: { comments: false }
        });

        if (typeof resultado.code !== "string") {
            throw new Error("Não foi possível minificar " + arquivo);
        }

        otimizado = resultado.code;
    } else if ([".jpg", ".jpeg", ".png", ".webp"].includes(extensao)) {
        categoria = "Imagens";

        let imagem = sharp(original).rotate().resize({
            width: 1600,
            withoutEnlargement: true
        });

        if (extensao === ".jpg" || extensao === ".jpeg") {
            imagem = imagem.jpeg({ quality: 80, mozjpeg: true });
        } else if (extensao === ".png") {
            imagem = imagem.png({ compressionLevel: 9 });
        } else {
            imagem = imagem.webp({ quality: 80 });
        }

        const comprimido = await imagem.toBuffer();

        if (comprimido.length < original.length) {
            otimizado = comprimido;
        }
    }

    await salvar(arquivo, original, otimizado, categoria);
}

async function processarPasta(pasta) {
    const itens = await fs.readdir(path.join(raiz, pasta), {
        withFileTypes: true
    });

    for (const item of itens) {
        const arquivo = path.join(pasta, item.name);

        if (item.isDirectory()) {
            await processarPasta(arquivo);
        } else if (item.isFile()) {
            await processar(arquivo);
        }
    }
}

async function executar() {
    await fs.mkdir(destino, { recursive: true });

    const paginas = [
        "index.html",
        "quemsomos.html",
        "projetos.html",
        "comoajudar.html",
        "cadastro.html"
    ];

    for (const pagina of paginas) {
        await processar(pagina);
    }

    for (const pasta of ["css", "js", "imagens"]) {
        await processarPasta(pasta);
    }

    await fs.writeFile(path.join(destino, ".nojekyll"), "");

    console.table(resultados);

    for (const categoria of ["Código", "Imagens"]) {
        const itens = resultados.filter((item) =>
            categoria === "Código"
                ? ["HTML", "CSS", "JavaScript"].includes(item.categoria)
                : item.categoria === "Imagens"
        );

        const antes = itens.reduce((total, item) => total + item.antes, 0);
        const depois = itens.reduce((total, item) => total + item.depois, 0);
        const reducao = antes ? ((1 - depois / antes) * 100).toFixed(2) : "0";

        console.log(
            `${categoria}: ${antes} bytes → ${depois} bytes. Redução: ${reducao}%`
        );
    }

    await fs.writeFile(
        path.join(raiz, "relatorio-build.json"),
        JSON.stringify(resultados, null, 2)
    );

    console.log("Build concluída. Arquivos de publicação na pasta dist.");
}

executar().catch((erro) => {
    console.error(erro);
    process.exitCode = 1;
});