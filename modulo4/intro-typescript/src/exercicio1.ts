

function checaTriangulo (ladoA:number, ladoB:number, ladoC:number) : string {

    if(ladoA !== ladoB && ladoB !== ladoC){
        return "Escaleno";
    } else if (ladoA === ladoB && ladoB === ladoC ){
        return "Equilátero"
    }else {
        return "Escaleno"
    }

}

console.log(checaTriangulo(2,3,4))
console.log(checaTriangulo(2,2,2))