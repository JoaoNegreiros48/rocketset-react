import { createContext, ReactNode, useEffect, useState } from "react";

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
        const url = new URL('http://localhost:3000/transactions')

        if (query) {
            url.searchParams.append('description', query)
        }
        
        const response = await fetch(url)
        const data = await response.json()

        setTransactions(data)
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