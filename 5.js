let texto = prompt("Digite um texto:");
let tamanho = texto.length;
let texto_invertido = "";
for (let i = tamanho - 1; i >= 0; i--) {  // itera de trás para frente
  texto_invertido += texto[i];  // concatena cada caracter na nova string
}
console.log("Texto invertido:", texto_invertido);