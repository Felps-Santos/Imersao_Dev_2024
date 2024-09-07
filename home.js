let dados = [
    {
        name: 'Rafaella Ballerini',
        descricao: 'Rafaella Ballerini, participante da Imersão Dev 2024, está entusiasmada em expandir seus conhecimentos em desenvolvimento web. Com o objetivo de se tornar uma desenvolvedora full-stack, ela busca aprimorar suas habilidades em JavaScript e React. Ao superar o desafio de construir sua primeira aplicação, ela se sente cada vez mais confiante em sua jornada como programadora.',
        link: 'rafa.html',
        tags: 'desenvolvedora, full, stack, programadora, javascript, react'
    },
    {
        name: 'Guilherme Lima',
        descricao: 'Guilherme Lima é um renomado profisional da área de tecnologia, atuando como Tech Educator e professor tanto na Alura quanto na USP. Com vasta experiência em diversas linguagens da programação e tecnologias, Guilherme combina conhecimento técnico aprofundado com habilidades excepcionais de ensino, tornando seus cursos e palestras referências no mercado.',
        link: 'gui.html',
        tags: 'educator, tech, alura, usp, '
    },
    {
        name: 'Luciano Martins',
        descricao: 'Luciano Martins é um profisisonal altamente qualificado e apaixonado por inteligência artificial.Sua experiência na Google e seu compromisso em capacitar a comunidade de desenvolvedores o tornam uma referência na área.Se você está interessado em acompanhar e adquirir mais conhecimento sobre a IA, Luciano Martins é uma ótima referência pelo profissional que ele é.',
        link: 'luciano.html',
        tags: 'inteligencia, artificial, google, goggle, gogle, ia, ai'
    }
];

function pesquisar() {
    function removerMarginFooter() {
        const footer = document.querySelector('.meu-footer');
        footer.style.marginTop = '0';
        console.log('Margin 0 agora');
    }
    

    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p style='color: #F5F7F8;'>Nada foi encontrado. Você precisa digitar o nome de um participante da Imersão Dev ou informação sobre ele</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = ""; 
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        nome = dado.name.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    ${dado.name}
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link}>Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
    removerMarginFooter();
}









