import { useMemo } from 'react';
import { BalanceBlock } from '../components/BalanceBlock';
import { DailyPointsBlock } from '../components/DailyPointsBlock';
import { PaymentStatusBlock } from '../components/PaymentStatusBlock';
import { TransactionItem } from '../components/TransactionItem';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { useTransactions } from '../hooks/useTransactions';
import type { Transaction } from '../types/transaction';

const TransactionsList = () => {
  const { transactions, loading, error } = useTransactions();

  const latestTransactions = useMemo(
    () => transactions.slice(0, 10),
    [transactions]
  );

  if (loading) {
    return <LoadingSpinner message="Loading transactions..." />;
  }

  if (error) {
    return <ErrorMessage message={error.message} title="Failed to load transactions" />;
  }

  return (
    <div className="w-full max-w-[430px] min-h-screen mx-auto bg-[#f2f2f7] pt-6 pb-8 px-0 shadow-lg rounded-2xl">
      {/* Верхня сітка */}
      <div className="grid grid-cols-2 gap-4 px-4 mb-6">
        <div className="flex flex-col gap-4">
          <BalanceBlock />
          <DailyPointsBlock />
        </div>
        <div className="flex items-stretch">
          <PaymentStatusBlock />
        </div>
      </div>

      <h2 className="font-bold text-2xl mx-4 mb-3 mt-2">Latest Transactions</h2>
      <div className="bg-white rounded-2xl shadow-sm mx-4 p-0 overflow-hidden">
        {latestTransactions.length > 0 ? (
          latestTransactions.map((t: Transaction, i: number, arr: Transaction[]) => (
            <TransactionItem key={t.id} transaction={t} isLast={i === arr.length - 1} />
          ))
        ) : (
          <div className="p-6 text-center text-gray-500">
            No transactions found
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionsList;