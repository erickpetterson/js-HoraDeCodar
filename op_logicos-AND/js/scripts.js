var idade = 14;
var nome = 'erick';

if (nome == 'erick' && idade == 16) {
    console.log("pode entrar")
} else {
    console.log('ele nao pode entrar')
};

if ((1 == 1 && 3 > 2) && true) {
    console.log('passou')
};

if ((1 == 1 && 3 > 3) && true) {
    console.log('passou')
} else if (nome === 'erick' && idade >= 14) {
    console.log('aqui passa')
};