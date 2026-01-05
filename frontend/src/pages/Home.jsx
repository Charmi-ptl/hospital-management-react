import { Link } from "react-router-dom";
import doctors from "../data/doctors";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Book Doctor Appointments Easily
        </h1>
        <p className="text-lg mb-6">
          Find trusted doctors and book appointments in minutes
        </p>
      </section>

      {/* DOCTOR PREVIEW */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Available Doctors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {doctors.slice(0, 3).map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white p-4 rounded shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialization}</p>

                <span
                  className={`inline-block mt-2 px-3 py-1 text-sm rounded ${
                    doctor.available
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {doctor.available ? "Available" : "Unavailable"}
                </span>
              </div>

              {/* BOOK APPOINTMENT BUTTON */}
              {doctor.available && (
                <Link to={`/book/${doctor.id}`} className="mt-4">
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Book Appointment
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link to="/doctors" className="text-blue-600 font-semibold">
            View All Doctors →
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-12">
        <h2 className="text-2xl font-bold text-center mb-8">
          How It Works
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
          <div>
            <h3 className="font-semibold text-lg">1️⃣ Choose Doctor</h3>
            <p className="text-gray-600">Select a doctor based on specialization</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">2️⃣ Select Time</h3>
            <p className="text-gray-600">Pick a suitable appointment time</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">3️⃣ Confirm</h3>
            <p className="text-gray-600">Book and manage appointments easily</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-4 text-gray-500">
        © 2026 CityCare Hospital
      </footer>
    </div>
  );
}

export default Home;
