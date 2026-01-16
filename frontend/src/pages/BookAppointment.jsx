import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import doctors from "../data/doctors";
import { AppointmentContext } from "../context/AppointmentContext";
import TimeSlot from "../components/TimeSlot";

function BookAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((d) => d.id === Number(id));

  const { appointments, addAppointment } = useContext(AppointmentContext);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  // ✅ Error states (VISIBLE validation)
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // ✅ Name validation (no blocking)
  const handlePatientNameChange = (e) => {
    const value = e.target.value;
    setPatientName(value);

    if (!value.trim()) {
      setNameError("Patient name is required");
    } else if (!/^[A-Za-z\s]+$/.test(value)) {
      setNameError("Name should contain only letters");
    } else {
      setNameError("");
    }
  };

  // ✅ Phone validation (no blocking)
  const handlePatientPhoneChange = (e) => {
    const value = e.target.value;
    setPatientPhone(value);

    if (!value.trim()) {
      setPhoneError("Phone number is required");
    } else if (!/^\d+$/.test(value)) {
      setPhoneError("Phone number should contain only digits");
    } else if (value.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
    } else {
      setPhoneError("");
    }
  };

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      ["00", "30"].forEach((min) => {
        let displayHour = hour % 12 === 0 ? 12 : hour % 12;
        let ampm = hour < 12 ? "AM" : "PM";
        slots.push(`${displayHour}:${min} ${ampm}`);
      });
    }
    return slots;
  };
  const timeSlots = generateTimeSlots();

  const handleConfirm = () => {
    addAppointment({
      doctorId: doctor.id,
      doctorName: doctor.name,
      specialization: doctor.specialization,
      date,
      time,
      patientName,
      patientPhone,
      status: "Booked",
    });
    setConfirmed(true);
  };

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">

        {/* Doctor Card */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-xl font-bold text-blue-600 overflow-hidden">
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
            <p className="text-gray-500 text-sm">{doctor.specialization}</p>
          </div>
        </div>

        {!confirmed ? (
          <>
            {/* Patient Form */}
            <div className="mb-6">
              <label className="block mb-2 font-medium">Patient Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={patientName}
                onChange={handlePatientNameChange}
                className="w-full p-3 border rounded-lg"
              />
              {nameError && (
                <p className="text-red-600 text-sm mt-1">{nameError}</p>
              )}

              <label className="block mb-2 font-medium mt-4">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                value={patientPhone}
                onChange={handlePatientPhoneChange}
                className="w-full p-3 border rounded-lg"
              />
              {phoneError && (
                <p className="text-red-600 text-sm mt-1">{phoneError}</p>
              )}
            </div>

            {/* Date Picker */}
            <div className="mb-6">
              <label className="block mb-2 font-medium">Select Date</label>
              <input
                type="date"
                min={todayStr}
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  setTime("");
                }}
                className="w-full p-3 border rounded-lg"
              />
            </div>

            {/* Time Slots */}
            {date && (
              <div className="mb-6">
                <label className="block mb-2 font-medium">Select Time</label>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((t) => {
                    const isBooked = appointments.some(
                      (a) =>
                        a.doctorId === doctor.id &&
                        a.date === date &&
                        a.time === t
                    );

                    let isPast = false;
                    const selectedDate = new Date(date);
                    const now = new Date();
                    if (selectedDate.toDateString() === now.toDateString()) {
                      const [hourMin, ampm] = t.split(" ");
                      let [hour, min] = hourMin.split(":").map(Number);
                      if (ampm === "PM" && hour !== 12) hour += 12;
                      if (ampm === "AM" && hour === 12) hour = 0;

                      const slotTime = new Date();
                      slotTime.setHours(hour, min, 0, 0);
                      if (slotTime <= now) isPast = true;
                    }

                    return (
                      <TimeSlot
                        key={t}
                        time={t}
                        selected={time === t}
                        onClick={() => setTime(t)}
                        disabled={isBooked || isPast}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {/* Confirm Button */}
            <button
              onClick={handleConfirm}
              disabled={
                !date ||
                !time ||
                !patientName ||
                !patientPhone ||
                nameError ||
                phoneError
              }
              className={`w-full py-3 rounded-lg font-semibold
                ${
                  !date ||
                  !time ||
                  !patientName ||
                  !patientPhone ||
                  nameError ||
                  phoneError
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-900 text-white hover:bg-blue-700"
                }`}
            >
              Confirm Appointment
            </button>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-2">
              Appointment Confirmed 🎉
            </h2>
            <p className="text-gray-600 mb-6">
              Your appointment has been booked successfully.
            </p>
            <button
              onClick={() => navigate("/appointments")}
              className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Appointments
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookAppointment;
