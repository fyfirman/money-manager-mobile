import create from 'zustand'

export interface Transaction {
  date: Date;
  account: string;
  category: string;
  subCategory: string;
  title: string;
  amount: number;
}

interface TransactionState {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void
}

const useTransactionStore = create<TransactionState>()((set) => ({
  transactions: [],
  addTransaction: (transaction) => {
    set(({transactions}) => ({transactions: [...transactions, transaction]}))
  },
}))

export default useTransactionStore;