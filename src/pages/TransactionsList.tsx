import { BalanceBlock } from '../components/BalanceBlock';
import { DailyPointsBlock } from '../components/DailyPointsBlock';
import { PaymentStatusBlock } from '../components/PaymentStatusBlock';
import { TransactionItem } from '../components/TransactionItem';

import type { Transaction } from '../types/transaction';
import data from '../data/transactions.json';




const transactions: Transaction[] = data;

const TransactionsList = () => {
  return (
    <div className="w-full max-w-[430px] min-h-screen mx-auto bg-[#f2f2f7] pt-6 pb-8 px-0 shadow-lg rounded-2xl">
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
        {transactions.slice(0, 10).map((t: Transaction, i: number, arr: Transaction[]) => (
          <TransactionItem key={t.id} transaction={t} isLast={i === arr.length - 1} />
        ))}
      </div>
    </div>
  );
};

export default TransactionsList;