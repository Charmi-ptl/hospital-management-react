import { Link } from "react-router-dom";

function DoctorCard({ doctor }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
      
      {/* Avatar */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center text-xl font-bold text-blue-600">
          {doctor.image ? (
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-cover"
            />
          ) : (
            doctor.name.charAt(0)
          )}
        </div>

        <div>
          <h2 className="text-lg font-bold">{doctor.name}</h2>
          <p className="text-gray-500 text-sm">
            {doctor.specialization}
          </p>
        </div>
      </div>

      {/* Status */}
      <div className="mb-4">
        <span
          className={`inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full ${
            doctor.available
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              doctor.available ? "bg-green-600" : "bg-red-600"
            }`}
          ></span>
          {doctor.available ? "Available" : "Unavailable"}
        </span>
      </div>

      {/* Action */}
      {doctor.available ? (
        <Link
          to={`/book/${doctor.id}`}
          className="block text-center bg-blue-900 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Book Appointment
        </Link>
      ) : (
        <button
          disabled
          className="block w-full bg-gray-300 text-gray-500 py-2 rounded-lg cursor-not-allowed"
        >
          Not Available
        </button>
      )}
    </div>
  );
}

export default DoctorCard;
