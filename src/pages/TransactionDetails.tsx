import { useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTransactions } from '../hooks/useTransactions';
import { formatTransactionDate } from '../utils/dateFormat';

export default function TransactionDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { transactions, loading, error } = useTransactions();
  
  const transaction = useMemo(
    () => transactions.find(t => t.id === Number(id)),
    [transactions, id]
  );

  const formattedDate = useMemo(
    () => transaction ? formatTransactionDate(transaction.date) : '',
    [transaction]
  );

  const handleBack = useCallback(() => {
    void navigate(-1);
  }, [navigate]);

  if (loading) {
    return (
      <div className="w-full max-w-[430px] min-h-screen mx-auto bg-[#f2f2f7] flex items-center justify-center">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-[430px] mx-auto p-6">
        <div className="text-center">
          <div className="text-xl font-semibold text-red-600">Error loading transaction</div>
          <p className="text-sm text-gray-600 mt-2">{error.message}</p>
          <button onClick={handleBack} className="mt-4 text-blue-600 underline">Back</button>
        </div>
      </div>
    );
  }

  if (!transaction) {
    return (
      <div className="w-full max-w-[430px] mx-auto p-6">
        <p>Transaction not found.</p>
        <button onClick={handleBack} className="text-blue-600 underline">Back</button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[430px] min-h-screen mx-auto bg-[#f2f2f7] flex flex-col items-center pt-6 pb-8">
      <button onClick={handleBack} className="absolute left-4 top-6 text-2xl text-[#8e8e93] focus:outline-none">
        <span aria-label="Back" role="img">&#8592;</span>
      </button>

      <div className="flex flex-col items-center mt-10 mb-6">
        <div className="text-5xl font-bold tracking-tight">${transaction.amount.toFixed(2)}</div>
        <div className="text-[#8e8e93] text-lg mt-2 font-medium">{transaction.name}</div>
        <div className="text-[#8e8e93] text-base mt-1">{formattedDate}</div>
      </div>

      <div className="w-full px-4">
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="mb-2 font-semibold">
            Status: <span className="font-normal text-[#1a1a1a]">{transaction.status || '—'}</span>
          </div>
          <div className="text-[#8e8e93] mb-4">{transaction.description}</div>
          <hr className="my-2 border-[#e5e5ea]" />
          <div className="flex justify-between items-center font-semibold text-[17px]">
            <span>Total</span>
            <span>${transaction.amount.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
