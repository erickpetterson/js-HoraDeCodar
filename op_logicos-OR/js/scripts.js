var idade = 16;
var nome = 'erick';

if(nome == 'erick' || idade > 14){
    console.log("pode entrar");
} else {
    console.log('nao pode entrar');
};

if((nome == 'erick' || 30 > 20) && 10 == 20) {
    console.log('testando');
} else {
    console.log('nao entrou')
};

if(nome == 'erick' && (30 > 20 || 10 == 10)) {
    console.log('testando');
} else {
    console.log('nao entrou')
};