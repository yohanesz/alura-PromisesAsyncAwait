const uploadBtn = document.getElementById('upload-btn');
const inputUpload = document.getElementById('image-upload');

uploadBtn.addEventListener('click', () => {
    inputUpload.click();
});

function readContent(arquivo) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = () => {
            resolve({url: reader.result, nome: arquivo.name})
        }

        reader.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`);
        }

        reader.readAsDataURL(arquivo);
    });
}

const imagemPrincipal = document.querySelector('.main-imagem');
const nomeDaImagem = document.querySelector('.container-imagem-nome p');

inputUpload.addEventListener('change', async (evento) => {
    const file = evento.target.files[0];

    if(file) {
        try {
            const fileContent = await readContent(file);
            imagemPrincipal.src = fileContent.url;
            nomeDaImagem.textContent = fileContent.nome;
        } catch(erro) {
            console.error('Erro na leitura do arquivo');
        }
    } 
});

const inputTags = document.getElementById('input-tags');
const tagsList = document.getElementById("lista-tags");


tagsList.addEventListener('click', (evento) => {
    if(evento.target.classList.contains("remove-tag")) {
        const tagSelected = evento.target.parentElement;
        tagsList.removeChild(tagSelected);
    }
});

const tagsDisponiveis = ["Front-end", "Programação", "Data Science", "Full-stack", "HTML", "CSS", "JavaScript"];

async function verificaTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto)); //percorre ate encontrar e retorna true
        }, 1000);
    });
};

inputTags.addEventListener('keypress', async (evento) => {
    if(evento.key === "Enter") {
        evento.preventDefault();
        const tagContent = inputTags.value.trim();

        if(tagContent !== "") {
            try {

                const tagExiste = await verificaTagsDisponiveis(tagContent);

                if(tagExiste) {
                    const newTag = document.createElement("li");
                    newTag.innerHTML = `<p> ${tagContent} </p> <img src="/img/close-black.svg" class="remove-tag">`;
                    console.log(tagContent)
                    tagsList.appendChild(newTag);
                    inputTags.value = "";
                } else {
                    alert("Tag não foi encontrada.")
                }

            } catch(error) {
                console.log(error);
                alert("Erro ao verificar a existência da tag");
            }
        }
    }
});

const botaoPublicar = document.querySelector(".botao-publicar");

botaoPublicar.addEventListener('click', async (evento) => {
    evento.preventDefault();

    const nomeProjeto = document.getElementById('nome').value;
    const descricaoProjeto = document.getElementById('descricao').value;
    const tagsProjeto = Array.from(listaTags.querySelectorAll("p")).map((tag) => tag.textContent);
});

async function publicarProjeto(nomeProjeto, descricaoProjeto, tagsProjeto) {

    return new Promisse((resolve, reject) => {
        setTimeout(() => {
            const deuCerto = Math.random() > 0.5;
        })
    })
}



