import { Industry } from "./AbstractClass";
import { Client } from "./ClientClass";

export class IndustrialClientClass extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private registroIndustrial: string,
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
    this.registroIndustrial = registroIndustrial;
  }

  public getRegistroIndustrial(): string {
    return this.registroIndustrial;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
}
