export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }


  export class NewPlace extends Place {
    constructor(protected cep: string) {
      super(cep);
    }
  
     
  }

  export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }

    public getCep(): string {
      return this.cep
    }

    public getResidentsQuantity(): number {
      return this.residentsQuantity
    }

  }

  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }

    public getCep(): string {
      return this.cep
    }

    public getFloorQuantity(): number {
      return this.floorsQuantity
    }
  }

  

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
      ) {
        super(cep);
    }

    public getCep(): string {
      return this.cep
    }

    public getMachinesQuantity(): number {
      return this.machinesQuantity
    }
  }