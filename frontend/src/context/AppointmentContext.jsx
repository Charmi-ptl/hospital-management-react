import { createContext, useState } from "react";

// Create the context
export const AppointmentContext = createContext();

// Create and export the provider
export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  return (
    <AppointmentContext.Provider value={{ appointments, setAppointments }}>
      {children}
    </AppointmentContext.Provider>
  );
};
