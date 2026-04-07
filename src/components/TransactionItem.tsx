import { Link } from 'react-router-dom';
import { ChevronRight, CreditCard, ShoppingBag } from 'lucide-react';
import type { Transaction } from '../types/transaction';
import { formatTransactionDate } from '../utils/dateFormat';

interface Props {
  transaction: Transaction;
  isLast?: boolean;
}

export const TransactionItem = ({ transaction, isLast }: Props) => {
  let iconBg = 'bg-[#333]';
  if (transaction.name === 'Payment') iconBg = 'bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600';
  if (transaction.name === 'IKEA') iconBg = 'bg-[#0058a3]';
  if (transaction.name === 'Target') iconBg = 'bg-[#cc0000]';

  return (
    <Link to={`/transaction/${transaction.id}`} className="block active:bg-gray-100 transition-colors">
      <div className={`flex items-center justify-between p-3 ${!isLast ? 'border-b border-[#e5e5ea]' : ''}`}>
        
        <div className="flex items-center gap-3 min-w-0">
          <div className={`flex items-center justify-center w-10 h-10 rounded-lg text-white shrink-0 ${iconBg}`}>
            {transaction.name === 'Apple' || transaction.name === 'Payment' ? (
              <CreditCard size={22} strokeWidth={2.5} />
            ) : transaction.name === 'IKEA' || transaction.name === 'Target' ? (
              <span className="font-bold text-xs uppercase tracking-tighter">
                {transaction.name[0]}
              </span>
            ) : (
              <ShoppingBag size={20} />
            )}
          </div>

          <div className="flex flex-col min-w-0">
            <span className="font-semibold text-[16px] text-black truncate leading-tight">
              {transaction.name}
            </span>
            <span className="text-[#8e8e93] text-[13px] truncate leading-tight mt-0.5">
              {transaction.status === 'Pending' && 'Pending - '}
              {transaction.description}
            </span>
            <span className="text-[#8e8e93] text-[13px] leading-tight">
              {transaction.authorizedUser ? `${transaction.authorizedUser} — ` : ''}{formatTransactionDate(transaction.date)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 ml-2">
          <div className="flex flex-col items-end">
            <span className="font-semibold text-[16px] text-black">
              {transaction.type === 'Payment' ? `+` : ''}${transaction.amount.toFixed(2)}
            </span>
            {transaction.percentage && (
              <span className="text-[10px] bg-[#f2f2f7] text-[#8e8e93] px-1 rounded font-bold mt-0.5">
                {transaction.percentage}
              </span>
            )}
          </div>
          <ChevronRight size={18} className="text-[#c7c7cc]" />
        </div>

      </div>
    </Link>
  );
};