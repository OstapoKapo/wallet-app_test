import { memo } from 'react';
import { Check } from "lucide-react";

export const PaymentStatusBlock = memo(() => {
  return (
    <div className="bg-white rounded-xl p-3 flex flex-col justify-between h-full shadow-sm">
      <div className="flex flex-col gap-1">
        <p className="text-[#000] text-[15px] font-semibold leading-tight">
          No Payment Due
        </p>
        <p className="text-[#8e8e93] text-[15px] leading-tight">
          You've paid your September balance.
        </p>
      </div>
      
      <div className="flex justify-end">
        <div className="w-15 h-15 bg-[#f2f2f7] rounded-full flex items-center justify-center">
           <Check className="w-8 h-8 text-black" strokeWidth={3} />
        </div>
      </div>
    </div>
  );
});

PaymentStatusBlock.displayName = 'PaymentStatusBlock';