import { useContext } from "react";
import { AppointmentContext } from "../context/AppointmentContext";
import AppointmentCard from "../components/AppointmentCard";
import doctors from "../data/doctors";

function Appointments() {
  const { appointments, cancelAppointment } = useContext(AppointmentContext);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-4xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-8 text-center">
            My Appointments
          </h1>
          <p className="text-gray-600 text-lg">
            View and manage your booked appointments
          </p>
        </div>

        {/* Content */}
        {appointments.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-xl p-16 text-center mx-auto max-w-md">
            <p className="text-xl font-semibold mb-2">
              No Appointments Yet
            </p>
            <p className="text-gray-500 text-sm">
              Book an appointment to see it here.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 justify-items-center">
            {appointments.map((appointment, index) => {
              const doctor = doctors.find(d => d.id === appointment.doctorId);

              if (!doctor) return null; // skip if doctor not found

              return (
                <AppointmentCard
                  key={index}
                  appointment={{
                    ...appointment,
                    doctorName: doctor.name,
                    specialization: doctor.specialization,
                    image: doctor.image,
                  }}
                  onCancel={() => cancelAppointment(index)}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Appointments;
