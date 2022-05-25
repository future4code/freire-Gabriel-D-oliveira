```
function calculaPrecoTotal(quantidade) {
    let preco
    if (quantidade >= 12) {
        preco = 1
    } else {
        preco = 1.3
    }
    let custoTotal = quantidade * preco
    return custoTotal
}
```