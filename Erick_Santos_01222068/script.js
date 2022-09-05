function calcular(){
    var custo= (Number(input_1.value)*3.12 );
    var lucro = (Number(input_1.value)  * 12.8) - custo;
    var perda = lucro * 0.72;
    var representante = (Number (input_1.value)/ (Number(input_3.value)));

    resultado.innerHTML = `
    <h1>SEM A SMARTICE,</h1><br> 
    • Produz anualmente: <span>${Number(input_1.value)}L</span><br>
    • por <span>${Number(input_2.value)} unidades.</span><br>
    • para <span>${Number(input_3.value)} representantes.</span><br>
    • Gerando <span>R$${custo} de Custo de Produção.</span><br>
    • Distribuindo <span>${representante} Litros por Representante.</span><br>


    <h1> • MÉDIA DE PERDA DO PRODUTO FINAL POR DESREGULAÇÃO TÉRMICA</h1><br>
    • <b>5%</b> No periodo de armazenamento</br>
    • <b>8%</b> Durante transporte do produto<br>
    • <b>15%</b> Do produto em varejo<br>

    <h1>Você perdeu aproximadamente <span>28%</span> do seu produto final, seu lucro final foi apenas de <span>R$${perda}</span>.</h1><br>


    <h1>COM A SMARTICE,</h1><br>
    • Ganhando até 30% a mais.<br>
    • ${custo} Custo de Produção.<br>
    • ${representante} Litros por Representante.<br>
    • E seu lucro final com a tecnologia SMARTICE é de até<br>
    
    <h1 style="color: green; font-size: 25px;  font-family: 'Paytone One', sans-serif;">R$${lucro}</h1>
    `

    saida.innerHTML = `
    R$${lucro} 
    `
}

