import { ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

interface Transactions {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}


interface CreateTransactionInput {
    description: string;
    price: string;
    category: string;
    type: 'income' | 'outcome'
}

interface TransactionsContextType{
    transactions: Transactions[];
    fecthTransactions: (query?: string) => Promise<void>
    createTransaction: (data: CreateTransactionInput)  => Promise<void>
}

interface TransactionProviderProps{
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({children}:TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transactions[]>([])
    
    async function fecthTransactions(query?: string){
        const response = await api.get('/transactions', {
            params: {
                description: query
            }
        })

        setTransactions(response.data)
    }

    async function createTransaction (data: CreateTransactionInput) {
        const { description, price, category, type } = data

        const response = await api.post('/transactions', {
            description,
            price,
            category,
            type,
            createdAt: new Date()
        })

        console.log(response)

        setTransactions(state => [response.data, ...state])
    }

    useEffect(() => {
        fecthTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{ 
            transactions,
            fecthTransactions,
            createTransaction,
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}