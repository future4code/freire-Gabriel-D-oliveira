//Exercicio4

enum setor {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
}

const arrayEmployess: person[] = [
	{ nome: "Marcos", salário: 2500, setor: setor.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: setor.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: setor.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: setor.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: setor.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: setor.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: setor.MARKETING, presencial: true }
]


type person = {
    nome: string,
    salário: number,
    setor: string,
    presencial: boolean
}


function filterMarketing(array: person[],) : person[] {
   return array.filter((s)=>{
        return s.setor === setor.MARKETING && s.presencial
    })
}

console.table(filterMarketing(arrayEmployess))