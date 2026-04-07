export const BalanceBlock = () => {
  const balance = (Math.random() * 1500).toFixed(2); 
  const available = (1500 - parseFloat(balance)).toFixed(2);

  return (
    <div className="bg-white rounded-xl font-semibold p-3 flex flex-col justify-center">
      <p className="text-[15px] my-0">Card Balance</p>
      <h2 className="text-3xl my-1 font-bold">${balance}</h2>
      <p className="text-[#8e8e93] text-[15px] my-0">${available} Available</p>
    </div>
  );
};