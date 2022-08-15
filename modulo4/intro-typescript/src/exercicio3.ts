

function checaAnoBissexto (year: number) : boolean {
    const cond1: boolean = (year % 400 === 0)
    const cond2: boolean = (year % 4 === 0) && (year % 100 !== 0)
    return cond1 || cond2
}


console.log(`O ano informado é bissexto: ${checaAnoBissexto(2024)}`)