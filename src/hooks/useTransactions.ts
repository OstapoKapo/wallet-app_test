import { useState, useEffect } from 'react';
import type { Transaction } from '../types/transaction';

interface UseTransactionsResult {
  transactions: Transaction[];
  loading: boolean;
  error: Error | null;
}

export const useTransactions = (): UseTransactionsResult => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch з публічної папки або API
        const response = await fetch('/data/transactions.json');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch transactions: ${response.statusText}`);
        }
        
        const data = await response.json() as Transaction[];
        setTransactions(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        console.error('Error fetching transactions:', err);
      } finally {
        setLoading(false);
      }
    };

    void fetchTransactions();
  }, []);

  return { transactions, loading, error };
};
