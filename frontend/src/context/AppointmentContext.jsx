import { createContext, useEffect, useState } from "react";

export const AppointmentContext = createContext();

// ✅ Helper to safely parse JSON
const safeJSONParse = (value, fallback) => {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.error("Invalid JSON in localStorage:", error);
    return fallback;
  }
};

export function AppointmentProvider({ children }) {
  const [appointments, setAppointments] = useState([]);

  // ✅ Load from localStorage on app start (safe)
  useEffect(() => {
    const stored = localStorage.getItem("appointments");
    setAppointments(safeJSONParse(stored, []));
  }, []);

  // ✅ Save to localStorage whenever appointments change
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  // ✅ Listen for changes from OTHER TABS (safe)
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "appointments") {
        setAppointments(safeJSONParse(event.newValue, []));
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const addAppointment = (appointment) => {
    setAppointments((prev) => [...prev, appointment]);
  };

  const cancelAppointment = (index) => {
    setAppointments((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <AppointmentContext.Provider
      value={{ appointments, addAppointment, cancelAppointment }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}
