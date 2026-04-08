import { memo } from 'react';

interface Props {
  message?: string;
  fullScreen?: boolean;
}

export const LoadingSpinner = memo(({ message = 'Loading...', fullScreen = true }: Props) => {
  const containerClass = fullScreen
    ? 'w-full max-w-[430px] min-h-screen mx-auto bg-[#f2f2f7] pt-6 pb-8 px-4 flex items-center justify-center'
    : 'flex items-center justify-center p-6';

  return (
    <div className={containerClass}>
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
        <div className="text-xl font-semibold text-gray-700">{message}</div>
      </div>
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';
