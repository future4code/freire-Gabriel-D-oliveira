```
function calculaNota(ex, p1, p2) {
    let nota = (ex + p1 * 2 + p2 * 3) / 6
    let conceito
    if (nota >= 9) {
        conceito = `A`
    } else if ( nota >= 7.5 && nota < 9) {
        conceito = `B`
    } else if ( nota >= 6 && nota <7.5 ) {
        conceito = `C`
    } else {
        conceito = `D`
    }
    console.log(nota)
    return conceito
}
```
