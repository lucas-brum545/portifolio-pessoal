// Substitua 'SEU_USUARIO_AQUI' pelo seu nome de usuário real no GitHub
const usuarioGitHub = 'lucas-brum545'; 
const urlAPI = `https://api.github.com/users/${usuarioGitHub}/repos`;

async function buscarRepositorios() {
    try {
        const resposta = await fetch(urlAPI);
        
        if (!resposta.ok) {
            throw new Error('Erro ao buscar os dados do GitHub');
        }

        const repos = await resposta.json();
        exibirRepositorios(repos);

    } catch (erro) {
        console.error('Ocorreu um erro:', erro);
        document.getElementById('repos-container').innerHTML = '<p>Não foi possível carregar os projetos no momento.</p>';
    }
}

function exibirRepositorios(repos) {
    const container = document.getElementById('repos-container');
    container.innerHTML = ''; // Limpa a mensagem de "carregando"

    // Ordena opcionalmente por data de atualização (mais recentes primeiro)
    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    repos.forEach(repo => {
        // Cria os elementos do card
        const card = document.createElement('div');
        card.classList.add('repo-card');

        const titulo = document.createElement('h3');
        const link = document.createElement('a');
        link.href = repo.html_url;
        link.target = '_blank'; // Abre em outra aba
        link.textContent = repo.name;
        titulo.appendChild(link);

        const descricao = document.createElement('p');
        // Se o repositório não tiver descrição cadastrada, exibe um texto padrão
        descricao.textContent = repo.description || 'Nenhuma descrição informada.';

        // Junta tudo no card
        card.appendChild(titulo);
        card.appendChild(descricao);

        // Adiciona o card final no container da página
        container.appendChild(card);
    });
}

// Inicia a execução da função
buscarRepositorios();