import { format } from 'date-fns';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface Transaction {
  date: string; // date string in UTC format. Example '2021-01-01T00:00:00.000Z'
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
  getListedCategory: () => Transaction['category'][];
  getListedSubCategory: () => Transaction['subCategory'][];
}

const dummyTransactions: Transaction[] = [
  {
    date: '2022-11-10T00:00:00.000Z',
    account: 'E-Money',
    category: 'Transportasi',
    subCategory: 'Parkir',
    title: 'Parkir Kantor',
    amount: 12000,
  },
  {
    date: '2022-11-09T00:00:00.000Z', 
    account: 'E-Money',
    category: 'Transportasi',
    subCategory: 'Parkir',
    title: 'Parkir Kantor',
    amount: 12000,
  },
  {
    date: '2022-11-10T00:00:00.000Z',
    account: 'Cash',
    category: 'Makan',
    subCategory: 'Makan Berat',
    title: 'Ayam Sosro',
    amount: 20000,
  },
  {
    date: '2022-11-10T00:00:00.000Z',
    account: 'Cash',
    category: 'Makan',
    subCategory: 'Minuman',
    title: 'Starbuck',
    amount: 30000,
  },
]

const useTransactionStore = create<TransactionState>()(persist((set, get) => ({
  transactions: dummyTransactions,
  addTransaction: (transaction) => {
    set(({transactions}) => ({transactions: [...transactions, transaction]}))
  },
  getTransactionsGroupByDate: () => {
    const transactions = get().transactions;
    return transactions.reduce((acc, transaction) => {
      const date = format(new Date(transaction.date), 'yyyy-MM-dd');
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(transaction);
      return acc;
    }, {} as TransactionListGroupByDate)
  },
  getListedCategory: () => {
    const transactions = get().transactions;
    return [...new Set(transactions.map(transaction => transaction.category))];
  },
  getListedSubCategory: () => {
    const transactions = get().transactions;
    return [...new Set(transactions.map(transaction => transaction.subCategory))];
  },
}), {
  name: 'transaction-store',
  getStorage: () => AsyncStorage,
}))

export default useTransactionStore;