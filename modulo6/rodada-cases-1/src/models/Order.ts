export interface IOrderDB {
    id: string
}

export interface IOrderItemDB {
    id: string,
    pizza_id: string,
    quantity: number,
    order_id: string
}

export interface IOrderItem {
    id: string,
    pizza_name: string,
    price: number,
    quantity: number,
    order_id: string
}

export interface IOrderResume {
    id: string,
    pizzas: {
        name: string,
        quantity: number,
        price: number
    }[],
    total: number
}

export class Order {
    private total: number = 0;

    constructor(
        private id: string,
        private orderItens: IOrderItem[],        
    ) {
        this.total = this.calculateBill()
    }

    private calculateBill = () =>{
        const bill = this.orderItens.reduce(
            (acc, pizza) => acc + (pizza.price*pizza.quantity), 0
        )
        return bill
    }

    public getId = () => {
        return this.id
    }

    public getOrderItems = () => {
        return this.orderItens
    }   
   
    public setOrderItens = (newOrderItens: IOrderItem[]) => {
        this.orderItens = newOrderItens
        this.total = this.calculateBill()
    }

    public addOrderItem = (newOrderItem: IOrderItem) => {
        this.orderItens.push(newOrderItem)
        this.total = this.calculateBill()
    }

    public RemoveOrderItem = (IdToRemove: string) => {
        this.orderItens.filter(orderItem => orderItem.id !== IdToRemove)
        this.total = this.calculateBill()
    }

    public getTotal = () =>{
        return this.total
    }
}

export interface ICreateOrderInputDTO {
    pizzas: {
        name: string;
        quantity: number;
    }[]
}

export interface CreateOrderOutputDTO {
    message: string,
    order: IOrderResume
}

export interface IGetOrderOutputDTO {
    orders: IOrderResume[] 
}