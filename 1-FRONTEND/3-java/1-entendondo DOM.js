const alunos = [
    {
        nome: "Ricardo",
        idade: 49,
    },
    {
        nome: "Elaine",
        idade: 45,
    },
    {
        nome: "Graziela",
        idade: 43,
    },
];

const acimaDeNove = alunos.some((aluno) => aluno.idade > 10);
const menorQueNove = alunos.every((aluno) => aluno.idade < 90);

console.log(acimaDeNove); // true
console.log(menorQueNove); // true  