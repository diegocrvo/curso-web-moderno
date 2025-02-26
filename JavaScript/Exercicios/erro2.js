function maiorIdade(idade) {
    if (idade < 18) {
        throw new Error('Você é menor de idade!')
    }
    return 'Idade válida!'
}

try {
    console.log(maiorIdade(16))
} catch(erro) {
    console.log('Um erro foi encontrado:', erro.message)
}
