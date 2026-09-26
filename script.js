

const catalogo = [ //--> Início da array 
    {
        id: 1,
        titulo: "Resident Evil",
        tipo: "Filme",
        ano: 2026,
        generos: ["Ação", "Aventura", "Terror"],
        nota: 9,
        assistido: true
    }, //  --> Vírgula para separar esse objeto do próximo
    {
        id: 2,
        titulo: "Breaking Bad",
        tipo: "serie", // <-- Exemplo de série
        ano: 2008,
        generos: ["Drama", "Crime"],
        nota: 9.5,
        assistido: false // <-- Marcado como NÃO assistido
    },
    {
        id: 3,
        titulo: "Matrix",
        tipo: "filme",
        ano: 1999,
        generos: ["Ação", "Ficção Científica"],
        nota: 9,
        assistido: true
    },
    {
        id: 4,
        titulo: "The Office",
        tipo: "serie",
        ano: 2005,
        generos: ["Comédia"], // <-- Apenas um género
        nota: 9.2,
        assistido: false
    },
    {
        id: 5,
        titulo: "Interstellar",
        tipo: "filme",
        ano: 2014,
        generos: ["Aventura", "Drama", "Ficção Científica"],
        nota: 8.8,
        assistido: false
    },
    {
        id: 6,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["Ficção Científica", "Terror"],
        nota: 8.5,
        assistido: true
    }

];


//Acesso e leitura dos dados
console.log("Leitura de Dados")
console.log(catalogo);
console.log("Titulo do primeiro item:", catalogo[0].titulo);
console.log("Ano do último item: ", catalogo[catalogo.length - 1].ano);


//Verificação do segundo gênero do terceiro item
if (catalogo[2].generos.length > 1) {
    console.log("Segundo gênero do terceiro item: ", catalogo[2].generos[1]);
} else {
    console.log("O terceiro item possui apenas um gênero.");
}


// Interações com iterators (tarefas)

// A) Listagem com forEach
console.log("Listagem (forEach)");
catalogo.forEach(item => {
    console.log(`[${item.tipo}] ${item.titulo} ${item.ano}`);
});

// B) Transformação com map
console.log(" Caixa Alta (map) ");
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log(titulosEmCaixaAlta);

// C) Seleção com filter
console.log("Seleção com filter para não assistidos");
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log(`Quantidade de itens não assistidos: ${naoAssistidos.length}`);

// D) Busca com find
console.log("Busca de nota => 9 (find)");
const filmeNotaAlta = catalogo.find(item => item.nota >=9);
if (filmeNotaAlta){
    console.log(`Encontrado: ${filmeNotaAlta.titulo} - Nota: ${filmeNotaAlta.nota}`);

} else{
    console.log("Nenhum item com a nota maior ou igual a 9 foi encontrado.");
}

// E)  Agregação com reduce
console.log("Médias  (reduce)");
//Média Geral
const somaGeral = catalogo.reduce((acumulador, item) => acumulador + item.nota, 0);
const mediaGeral = somaGeral / catalogo.length;

//Média Apenas dos Assistidos
const assistidos = catalogo.filter(item => item.assistido === true);
const somaAssistidos = assistidos.reduce((acumulador, item) => acumulador + item.nota, 0);
const mediaAssistidos = somaAssistidos / assistidos.length;

console.log(`Média geral das notas: ${mediaGeral.toFixed(2)}`);
console.log(`Média das notas (apenas assisitidos): ${mediaAssistidos.toFixed(2)}`);

// F) Checagens com some e every
console.log("\n=== B.3.F: Checagens (some e every) ===");
const temAntes2000 = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length >= 1);
console.log(`Existe algum item com ano menor que 2000? ${temAntes2000}`);
console.log(`Todos os itens têm pelo menos 1 gênero? ${todosTemGenero}`);


// B.4. Saída na tela (DOM simples)
// Preparando os dados para a tela
const totalItens = catalogo.length;
const qtdFilmes = catalogo.filter(item => item.tipo === "filme").length;
const qtdSeries = catalogo.filter(item => item.tipo === "serie").length;

// Mini ranking (copia o array, ordena de forma decrescente pela nota e pega os 3 primeiros)
const ranking = [...catalogo].sort((a, b) => b.nota - a.nota).slice(0, 3);
let htmlRanking = "<ol>";
ranking.forEach(item => {
  htmlRanking += `<li>${item.titulo} (Nota: ${item.nota})</li>`;
});
htmlRanking += "</ol>";

// Injetando no HTML
const outputDiv = document.getElementById("output");
if (outputDiv) {
  outputDiv.innerHTML = `
    <h2>Resumo do Catálogo</h2>
    <p><strong>Total de itens:</strong> ${totalItens}</p>
    <p><strong>Filmes:</strong> ${qtdFilmes} | <strong>Séries:</strong> ${qtdSeries}</p>
    <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>
    <p><strong>Média geral:</strong> ${mediaGeral.toFixed(2)}</p>
    <h3>Top 3 - Melhores Notas</h3>
    ${htmlRanking}
  `;
}
