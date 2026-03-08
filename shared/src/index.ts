export interface IUser {
  id: string;
  email: string;
  role: 'admin' | 'customer';
  created_at: string;
}

export interface ICategory {
  id: string;
  name: string;
}

export interface IProduct {
  id: string;
  name: string;
  description: string | null;
  price: number;
  stock: number;
  category_id: string | null;
}

export interface IOrder {
  id: string;
  user_id: string;
  total: number;
  status: 'pending' | 'shipped' | 'delivered';
  created_at: string;
}

export interface IOrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price_at_time: number;
}
