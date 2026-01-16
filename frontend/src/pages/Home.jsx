import { Link } from "react-router-dom";
import doctors from "../data/doctors";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative text-white h-[400px] md:h-[500px] text-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center filter class=scale-105 ;"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        ></div>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Doctor Appointments Easily
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Find trusted doctors and book appointments in minutes
          </p>
        </div>
      </section>

      {/* DOCTOR PREVIEW */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Available Doctors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {doctors.slice(0, 3).map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl hover:scale-105 transition transform"
            >
              {/* Top Section */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center text-xl font-bold text-blue-600">
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
                  <h3 className="text-xl font-semibold">{doctor.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{doctor.specialization}</p>
                </div>
              </div>

              {/* Availability */}
              <span
                className={`inline-block px-3 py-1 text-sm rounded-full font-semibold mb-4 ${
                  doctor.available
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {doctor.available ? "Available" : "Unavailable"}
              </span>

              {/* Book Appointment Button */}
              {doctor.available && (
                <Link to={`/book/${doctor.id}`}>
                  <button className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium">
                    Book Appointment
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link to="/doctors" className="text-blue-600 font-semibold hover:underline">
            View All Doctors →
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          How It Works
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8 text-center max-w-5xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition transform hover:-translate-y-2">
            <div className="text-4xl mb-2">🩺</div>
            <h3 className="font-semibold text-lg mb-2">1️⃣ Choose Doctor</h3>
            <p className="text-gray-600 text-sm">
              Select a doctor based on specialization
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition transform hover:-translate-y-2">
            <div className="text-4xl mb-2">⏰</div>
            <h3 className="font-semibold text-lg mb-2">2️⃣ Select Time</h3>
            <p className="text-gray-600 text-sm">
              Pick a suitable appointment time
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition transform hover:-translate-y-2">
            <div className="text-4xl mb-2">✅</div>
            <h3 className="font-semibold text-lg mb-2">3️⃣ Confirm</h3>
            <p className="text-gray-600 text-sm">
              Book and manage appointments easily
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
