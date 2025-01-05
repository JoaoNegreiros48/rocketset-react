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
}

interface TransactionProviderProps{
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({children}:TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transactions[]>([])
    
    async function loadTrasnactions(){
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json()

        setTransactions(data)
    }

    useEffect(() => {
        loadTrasnactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}