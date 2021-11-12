//Para iniciar va para o final da pagina.
//--------------------------------------------------------------------------------//

// Configuração da seleção de alimentos
let selecioneAlimento = function(alimentos) {
    switch (alimentos) {
        case "Pipoca": console.log("O tempo padrão para pipoca é 10, ou digite seu tempo")
            break;
        case "Macarrão": console.log('O tempo padrão para macarrão é 8, ou digite seu tempo')
            break;
        case "Carne": console.log('O tempo padrão para carne é 15, ou digite seu tempo')
            break;
        case "Feijão": console.log('O tempo padrão para feijão é 12, ou digite seu tempo')
            break;
        case 'Brigadeiro': console.log('O tempo padrão para brigadeiro é 8, ou digite seu tempo')
            break;
        default: console.log("Prato inexistente")
        
    }
    
}

//----------------------------------------------------------------------------//

// Aqui é a configuração do tempo da pipoca
let selecioneOtempoDaPipoca = function (tempodepreparo){
    let tempoPadrao=10
    if (tempodepreparo > 2 * tempoPadrao) {
        console.log('Sua pipoca queimou')
    }
    if (tempodepreparo > 3 * tempoPadrao) {
        console.log('Kaboomm')
    }
    if (tempodepreparo < tempoPadrao) {
        console.log('Tempo insuficiente')}
    if (tempodepreparo == tempoPadrao) {
        console.log('Pipoca feita com sucesso')
    }
    else {
        console.log('Preparo finalizado')
        
    }
    
}

//Aqui é a configuração do tempo do macarrão
let selecioneOtempoDoMacarrao = function (tempodepreparo){
    let tempoPadraoMacarrao=8
    if (tempodepreparo > 2 * tempoPadraoMacarrao) {
        console.log('Seu Macarrão queimou')
    }
    if (tempodepreparo > 3 * tempoPadraoMacarrao) {
        console.log('Kaboomm')
    }
    if (tempodepreparo < tempoPadraoMacarrao) {
        console.log('Tempo insuficiente')}
    if (tempodepreparo == tempoPadraoMacarrao) {
        console.log('Macarrao feito com sucesso')
    }
    
}

//Aqui é a configuração do tempo da carne
let selecioneOtempoDaCarne = function (tempodepreparo){
    let tempoPadrao=15
    if (tempodepreparo > 2 * tempoPadrao) {
        console.log('Sua carne queimou')
    }
    if (tempodepreparo > 3 * tempoPadrao) {
        console.log('Kaboomm')
    }
    if (tempodepreparo < tempoPadrao) {
        console.log('Tempo insuficiente')}

    if (tempodepreparo == tempoPadrao) {
        console.log('Carne feita com sucesso')
    }
    
}


//Aqui é a configuração do tempo do feijão
let selecioneOtempoDoFeijao = function (tempodepreparo){
    let tempoPadrao=12
    if (tempodepreparo > 2 * tempoPadrao) {
        console.log('Seu feijão queimou')
    }
    if (tempodepreparo > 3 * tempoPadrao) {
        console.log('Kaboomm')
    }
    if (tempodepreparo < tempoPadrao) {
        console.log('Tempo insuficiente')}

    if (tempodepreparo == tempoPadrao) {
        console.log('Feijão feito com sucesso')
    }
}


//Aqui é a configuração do tempo do brigadeiro
let selecioneOtempoDoBrigadeiro = function (tempodepreparo){
    let tempoPadrao=8
    if (tempodepreparo > 2 * tempoPadrao) {
        console.log('Seu brigadeiro queimou')
    }
    if (tempodepreparo > 3 * tempoPadrao) {
        console.log('Kaboomm')
    }
    if (tempodepreparo < tempoPadrao) {
        console.log('Tempo insuficiente')}
    if (tempodepreparo == tempoPadrao) {
        console.log('Brigadeiro feito com sucesso')
    }
    
}



//Selecione o Alimento para Iniciar.
//Opções: 'Pipoca', 'Macarrão', 'Carne', 'Feijão', 'Brigadeiro'

selecioneAlimento('Brigadeiro')

//Caso tenha escolhido 'Pipoca', digite o tempo entre parenteses para iniciar o preparo.
selecioneOtempoDaPipoca()

//Caso tenha escolhido 'Macarrão', digite o tempo entre parenteses para iniciar o preparo.
selecioneOtempoDoMacarrao()

//Caso tenha escolhido 'Carne', digite o tempo entre parenteses para iniciar o preparo.
selecioneOtempoDaCarne()

//Caso tenha escolhido Feijão', digite o tempo entre parenteses para iniciar o preparo.
selecioneOtempoDoFeijao()

//Caso tenha escolhido 'Brigadeiro', digite o tempo entre parenteses para iniciar o preparo.
selecioneOtempoDoBrigadeiro(8)