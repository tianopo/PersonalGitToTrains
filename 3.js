const faturamentoMensal = [
    { "dia": 1, "faturamento": 500 },
    { "dia": 2, "faturamento": 650 },
    { "dia": 3, "faturamento": 750 },
    { "dia": 4, "faturamento": 800 },
    { "dia": 5, "faturamento": 700 },
    { "dia": 6, "faturamento": 600 },
    { "dia": 7, "faturamento": 0 },
    { "dia": 8, "faturamento": 450 },
    { "dia": 9, "faturamento": 500 },
    { "dia": 10, "faturamento": 700 },
    { "dia": 11, "faturamento": 850 },
    { "dia": 12, "faturamento": 900 },
    { "dia": 13, "faturamento": 950 },
    { "dia": 14, "faturamento": 0 },
    { "dia": 15, "faturamento": 750 },
    { "dia": 16, "faturamento": 800 },
    { "dia": 17, "faturamento": 600 },
    { "dia": 18, "faturamento": 500 },
    { "dia": 19, "faturamento": 400 },
    { "dia": 20, "faturamento": 450 }
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
  
  console.log(`Menor faturamento: ${menorFaturamento}`);
  console.log(`Maior faturamento: ${maiorFaturamento}`);
  console.log(`Dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`);