import { useState } from "react";
import doctorsData from "../data/doctors";
import DoctorCard from "../components/DoctorCard";

function Doctors() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const specializations = ["All", "Cardiologist", "Dermatologist", "Orthopedic"];

  const filteredDoctors = doctorsData.filter((doctor) => {
    const matchesSearch = doctor.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || doctor.specialization === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Our Doctors</h1>
        <p className="text-gray-600">
          Choose a specialist and book your appointment
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search doctor by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Filter */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {specializations.map((spec) => (
          <button
            key={spec}
            onClick={() => setFilter(spec)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === spec
                ? "bg-blue-900 text-white"
                : "bg-white text-gray-600 border"
            }`}
          >
            {spec}
          </button>
        ))}
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No doctors found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Doctors;
