import { Commerce } from "./AbstractClass";
import { Client } from "./ClientClass";

export class ComercialClientClass extends Commerce implements Client {
  constructor(
    private cnpj: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,    
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep)
  }

  public calculateBill(): number {
      return this.consumedEnergy*0.54
  }

  public getCnpj(): string {
    return this.cnpj
  }
}
