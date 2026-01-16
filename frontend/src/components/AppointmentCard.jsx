function AppointmentCard({ appointment, onCancel }) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 w-96 hover:shadow-3xl transition-all">

      {/* Top */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          {/* Doctor Image */}
          <div className="w-16 h-16 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center text-xl font-bold text-blue-600">
            {appointment.image ? (
              <img
                src={appointment.image}
                alt={appointment.doctorName}
                className="w-full h-full object-cover"
              />
            ) : (
              appointment.doctorName?.charAt(0)
            )}
          </div>

          {/* Name & Specialization */}
          <div>
            <h3 className="text-2xl font-bold">
              {appointment.doctorName}
            </h3>
            <p className="text-md text-gray-500 mt-1">
              {appointment.specialization}
            </p>
          </div>
        </div>

        <span className="text-sm px-4 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
          {appointment.status || "Confirmed"}
        </span>
      </div>

      {/* Info */}
      <div className="flex items-center gap-8 text-gray-700 mb-6">
        <div className="flex items-center gap-3 text-lg">
          📅 <span>{appointment.date}</span>
        </div>
        <div className="flex items-center gap-3 text-lg">
          ⏰ <span>{appointment.time}</span>
        </div>
      </div>

      {/* Action */}
      <button
        onClick={onCancel}
        className="w-full py-3 rounded-xl border border-red-300 text-red-600 hover:bg-red-50 transition text-lg font-semibold"
      >
        Cancel Appointment
      </button>
    </div>
  );
}

export default AppointmentCard;
