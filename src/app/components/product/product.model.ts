export interface Product {
  id?: number; // make it not obligatory, because when creating it won't exist
  name: string;
  price: number;
}
