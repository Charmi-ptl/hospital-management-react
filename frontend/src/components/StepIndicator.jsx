function StepIndicator({ step }) {
  const steps = ["Date", "Time", "Confirm"];

  return (
    <div className="flex justify-between mb-8">
      {steps.map((label, index) => (
        <div key={index} className="flex-1 text-center">
          <div
            className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-sm font-bold
              ${step >= index + 1 ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"}
            `}
          >
            {index + 1}
          </div>
          <p className="text-sm mt-2">{label}</p>
        </div>
      ))}
    </div>
  );
}

export default StepIndicator;
