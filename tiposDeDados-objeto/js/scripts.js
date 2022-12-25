var obj = {
    nome: "erick",
    idade: 23,
    profissao: "programador",
    estaTrabalhando: true,

};

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("meu nome e: " + obj.nome + ", tenho" + obj.idade + " anos " + ", trabalho como " + obj.profissao);

obj.nome = "petterson";

console.log(obj);

obj.graduacao = true;

console.log(obj);