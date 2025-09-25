const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite seu peso (kg):",(peso) => {
    rl.question("Digite sua altura (M):", (altura) => {
        peso = parseFloat(peso);
        altura = parseFloat(altura);

        let imc = peso / (altura * altura);
            console.log(`seu IMC é: ${imc.toFixed(2)}`);

        if (imc <18.5) {
            console.log("Classificação: abaixo do peso");
        } else if (imc < 24.9){
            console.log("Classificação: peso normal");
        } else if (imc < 29.9) {
            console.log("Classificação: sobrepeso");
        } else {
            console.log("Classificação: obesidade");
        }

        rl.close();
    });
});
