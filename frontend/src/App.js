import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import BookAppointment from "./pages/BookAppointment";
import Appointments from "./pages/Appointments";
import { AppointmentProvider } from "./context/AppointmentContext";

function App() {
  return (
    <AppointmentProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />  {/* Navbar shows on all pages */}

          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/book/:id" element={<BookAppointment />} /> {/* dynamic route */}
              <Route path="/appointments" element={<Appointments />} />
            </Routes>
          </div>

          <Footer />  {/* Footer shows on all pages */}
        </div>
      </BrowserRouter>
    </AppointmentProvider>
  );
}

export default App;
