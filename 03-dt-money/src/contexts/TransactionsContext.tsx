import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transactions {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionsContextType{
    transactions: Transactions[];
    fecthTransactions: (query?: string) => Promise<void>
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

    useEffect(() => {
        fecthTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{ 
            transactions,
            fecthTransactions,
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}