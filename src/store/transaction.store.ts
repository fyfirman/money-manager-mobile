import { format } from 'date-fns';
import create from 'zustand'

export interface Transaction {
  date: Date;
  account: string;
  category: string;
  subCategory: string;
  title: string;
  amount: number;
}

export type TransactionListGroupByDate = {[key: string]: Transaction[]};

interface TransactionState {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  getTransactionsGroupByDate: () => TransactionListGroupByDate;
}

const useTransactionStore = create<TransactionState>()((set, get) => ({
  transactions: [
    {
      date: new Date(2022,11,10),
      account: 'E-Money',
      category: 'Transportasi',
      subCategory: 'Parkir',
      title: 'Parkir Kantor',
      amount: 12000,
    },
    {
      date: new Date(2022,11,9),
      account: 'E-Money',
      category: 'Transportasi',
      subCategory: 'Parkir',
      title: 'Parkir Kantor',
      amount: 12000,
    },
    {
      date: new Date(2022,11,10),
      account: 'Cash',
      category: 'Makan',
      subCategory: 'Makan Berat',
      title: 'Ayam Sosro',
      amount: 20000,
    },
    {
      date: new Date(2022,11,10),
      account: 'Cash',
      category: 'Makan',
      subCategory: 'Minuman',
      title: 'Starbuck',
      amount: 30000,
    },
  ],
  addTransaction: (transaction) => {
    set(({transactions}) => ({transactions: [...transactions, transaction]}))
  },
  getTransactionsGroupByDate: () => {
    const transactions = get().transactions;
    return transactions.reduce((acc, transaction) => {
      const date = format(transaction.date, 'yyyy-MM-dd');
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(transaction);
      return acc;
    }, {} as TransactionListGroupByDate)
  } 
}))

export default useTransactionStore;