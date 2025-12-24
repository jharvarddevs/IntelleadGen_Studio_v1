import React from 'react';

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

export const FormProgress: React.FC<FormProgressProps> = ({ currentStep, totalSteps }) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-primary-600">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-primary-600">{Math.round(percentage)}%</span>
      </div>
      <div className="w-full h-2 bg-primary-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-black transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-xs text-primary-500 mt-2">About {Math.max(1, totalSteps - currentStep + 1)} short steps remaining</p>
    </div>
  );
};
