const faturamentoMensal = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
];
  
// Ignorando os dias em que o faturamento é 0 (sábado e domingo)
  const diasUteis = faturamentoMensal.filter(dia => dia.faturamento > 0);
  
  // Calculando a média mensal do faturamento apenas considerando os dias úteis
  const mediaMensal = diasUteis.reduce((total, dia) => total + dia.faturamento, 0) / diasUteis.length;
  
  // Obtendo o menor valor de faturamento
  const menorFaturamento = Math.min(...faturamentoMensal.map(dia => dia.faturamento));
  
  // Obtendo o maior valor de faturamento
  const maiorFaturamento = Math.max(...faturamentoMensal.map(dia => dia.faturamento));
  
  // Obtendo o número de dias em que o faturamento diário foi superior à média mensal
  const diasAcimaDaMedia = diasUteis.filter(dia => dia.faturamento > mediaMensal).length;

  const linhas = diasUteis.map(a => {
    for(let i=0; i < diasUteis.length; i++){
      return `
      <ul>
        <li>${a.dia}</li>
        <li>${a.faturamento}</li>
      </ul>
      `
    }
  })
  
function diaFatura(){
  return `<ul>
        <li>Menor faturamento: ${menorFaturamento}</li>
        <li>Maior faturamento: ${maiorFaturamento}</li>
        <li>Dias com faturamento acima da média mensal: ${diasAcimaDaMedia}</li>
      </ul>`
}

const lista = document.getElementById('lista');
lista.innerHTML = linhas;

const total = document.getElementById('total');
total.innerHTML = diaFatura();

