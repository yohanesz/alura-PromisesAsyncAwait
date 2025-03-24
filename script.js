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
