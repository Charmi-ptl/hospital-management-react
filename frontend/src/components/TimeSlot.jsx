function TimeSlot({ time, selected, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-2 rounded-lg font-medium border transition
        w-full
        ${disabled 
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : selected
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-gray-700 hover:bg-blue-50"
        }`}
    >
      {time}
    </button>
  );
}

export default TimeSlot;
