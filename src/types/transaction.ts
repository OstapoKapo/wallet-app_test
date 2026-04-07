export interface Transaction {
  id: number;
  type: string;
  amount: number;
  name: string;
  description: string;
  date: string;
  status?: string;
  authorizedUser?: string;
  icon?: string;
  percentage?: string;
}
