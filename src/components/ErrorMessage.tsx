import { memo } from 'react';

interface Props {
  title?: string;
  message: string;
  onRetry?: () => void;
  onBack?: () => void;
  fullScreen?: boolean;
}

export const ErrorMessage = memo(({ 
  title = 'Error', 
  message, 
  onRetry, 
  onBack,
  fullScreen = true 
}: Props) => {
  const containerClass = fullScreen
    ? 'w-full max-w-[430px] min-h-screen mx-auto bg-[#f2f2f7] pt-6 pb-8 px-4 flex items-center justify-center'
    : 'p-6';

  return (
    <div className={containerClass}>
      <div className="text-center">
        <div className="text-5xl mb-4">⚠️</div>
        <div className="text-xl font-semibold text-red-600 mb-2">{title}</div>
        <p className="text-sm text-gray-600 mb-4">{message}</p>
        
        <div className="flex gap-3 justify-center">
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retry
            </button>
          )}
          {onBack && (
            <button
              onClick={onBack}
              className="px-4 py-2 text-blue-600 underline hover:text-blue-800 transition-colors"
            >
              Go Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

ErrorMessage.displayName = 'ErrorMessage';
