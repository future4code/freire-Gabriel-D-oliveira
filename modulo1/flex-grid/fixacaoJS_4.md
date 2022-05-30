```
    let repeticoes = 0
    for (let i = 0; i < arrayDeNumeros.length; i++){
        if(arrayDeNumeros[i] == numeroEscolhido){
            repeticoes++
        }
    }

    if(repeticoes > 0 ){
        return `O número ${numeroEscolhido} aparece ${repeticoes} vezes`
    }else {
       return "Número não encontrado"
    }
  }
```