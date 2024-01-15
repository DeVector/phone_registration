const form = document.getElementById('form-clients');
const select = document.querySelector('#country');

let linhas = ''

const imgBrazil = '<img src="./src/brasil.png" alt="Bandeira do Brasil">';
const imgUsa = '<img src="./src/estados-unidos.png" alt="Bandeira dos Estados Unidos da América">';

const fullNames = [];
const phoneNumbers = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    addLinha();
    atualizarTabela();
    atualizarQuantidade();

})

/* Função para fazer a criação dos dados que irão ficar na tabela */
function addLinha() {

    const fullName = document.getElementById('full-name');
    const fullPhone = document.getElementById('phone-number');

    if (phoneNumbers.includes(fullPhone)) {
        alert('Este númera já está cadastrado!!!!!')
    } else {
        fullNames.push(fullName);
        phoneNumbers.push(fullPhone);

        let linha = `<tr>`;
        linha += `<td>${fullName.value}</td>`;
        linha += `<td>${fullPhone.value}</td>`;
        linha += `<td>${select.value == 'usa' ? imgUsa : imgBrazil}</td>`
        linha += `</tr>`;

        linhas += linha;

        fullName.value = '';
        fullPhone.value = '';
        select.value = '';
    }


}

/** Função para adicionar o html criado pela função addLinha()*/
function atualizarTabela() {

    const corpoTable = document.querySelector('tbody');
    corpoTable.innerHTML = linhas;

}

/**Para atualizar a quantidade de contatos da lista */
function atualizarQuantidade() {

    document.getElementById('count-contacts').innerHTML = fullNames.length;

}