import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import BookAppointment from "./pages/BookAppointment";
import Appointments from "./pages/Appointments";
import { AppointmentProvider } from "./context/AppointmentContext";

function App() {
  return (
    <AppointmentProvider>
      <BrowserRouter>
        <Navbar />  {/* Navbar shows on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/book/:id" element={<BookAppointment />} /> {/* dynamic route */}
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </BrowserRouter>
    </AppointmentProvider>
  );
}

export default App;
