export interface Sale {
  salesItems: number;
  date: Date;
  customer: string;
  totalAmount: number;
  branch: string;
  isCancelled: boolean;
  itens: SalesItems[];
}

export interface SalesItems {
  productId: number;
  quantity: number;
  unitPrice: number;
  discount: number;
  totalAmount: number;
}

