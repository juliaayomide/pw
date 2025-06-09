const cep = document.querySelector('#cep');
const endereco = document.querySelector('#endereco');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const uf = document.querySelector('#uf');
const ibge = document.querySelector('#ibge');
const botao = document.querySelector('button');

botao.addEventListener('click', async (event) => {
    event.preventDefault(); // impede o envio do formulário

    const cepValor = cep.value.trim();

    if (cepValor.length !== 8 || isNaN(cepValor)) {
        alert('Digite um CEP válido com 8 números.');
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cepValor}/json/`);
        const conteudo = await response.json();

        if (!response.ok || conteudo.erro) {
            alert('Erro, CEP não localizado.');
            return;
        }

        endereco.value = conteudo.logradouro || '';
        bairro.value = conteudo.bairro || '';
        cidade.value = conteudo.localidade || '';
        uf.value = conteudo.uf || '';
        ibge.value = conteudo.ibge || '';

    } catch (erro) {
        alert('Erro ao buscar o CEP.');
        console.error(erro);
    }
});