import React from 'react'

export const ErrorMessage = ({message, onRetry}) => {
    return (
        <div className="h-full flex items-center justify-center">
            <div className="flex flex-col items-center space-y-4">
                <AlertCircle className="w-8 h-8 text-red-500" />
                <p className="text-gray-600">{message}</p>
                {onRetry && (
                    <button
                        onClick={onRetry}
                        className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors duration-200"
                    >
                        Intentar de nuevo
                    </button>
                )}
            </div>
        </div>
    );
}
