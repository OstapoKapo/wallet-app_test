import { memo, useMemo } from 'react';
import { calculateDailyPoints } from '../utils/pointsCalculator';

export const DailyPointsBlock = memo(() => {
  const points = useMemo(() => calculateDailyPoints(new Date()), []);

  return (
    <div className="bg-white rounded-xl p-3 flex flex-col justify-center">
      <p className=" text-[13px] font-bold my-0">Daily Points</p>
      <p className="text-[#8e8e93]">{points}</p>
    </div>
  );
});

DailyPointsBlock.displayName = 'DailyPointsBlock';