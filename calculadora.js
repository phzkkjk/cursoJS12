// Lista de ingredientes do bolo (array)
const ingredientes = [
  "3 ovos",
  "2 xícaras de farinha de trigo",
  "1 xícara de açúcar",
  "1/2 xícara de óleo",
  "1 xícara de leite",
  "1 colher de sopa de fermento em pó"
];
// Título
console.log("🎂 Receita de Bolo Simples");
console.log("Ingredientes:");
// Exibindo cada ingrediente da lista
ingredientes.forEach((item, index) => {
  console.log(`${index + 1} - ${item}`);
});
console.log("Número 1:", numero1);
console.log("Número 2:", numero2);
console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);