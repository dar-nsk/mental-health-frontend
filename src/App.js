import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import AuthForm from "./components/AuthForm";
import Dashboard from "./components/Dashboard";
import Chat from "./components/Chat";
import Book from "./components/Book";
import Activities from "./components/Activities";
import Privacy from "./components/Privacy";
import DashboardLayout from "./components/DashboardLayout";
import AudioLibrary from "./components/activities/AudioLibrary";
import VideoRecommendations from "./components/activities/VideoRecommendations";
import YogaMeditation from "./components/activities/YogaMeditation";
import BreathingExercises from "./components/activities/BreathingExercises";
import GratitudeJournal from "./components/activities/GratitudeJournal";
import Articles from "./components/activities/Articles";
import CounselorDashboard from "./components/CounselorDashboard";
import CounselorBookings from "./components/counselordashboard/CounselorBookings";


import { useState, useEffect } from "react";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      console.log("Restoring user:", stored);
      setUser(JSON.parse(stored));
    } else {
      console.log("No user in localStorage");
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-100">
              <Header />
              <Hero />
              <About />
              <Contact />
            </div>
          }
        />
        <Route
          path="/auth"
          element={
            <div className="min-h-screen bg-gray-100">
              <Header />
              <AuthForm />
            </div>
          }
        />

        {/* Student routes */}
        {user?.role === "student" && (
          <>
            <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
            <Route path="/book" element={<DashboardLayout><Book /></DashboardLayout>} />
            <Route path="/activities" element={<DashboardLayout><Activities /></DashboardLayout>} />
            <Route path="/activities/audio" element={<DashboardLayout><AudioLibrary /></DashboardLayout>} />
            <Route path="/activities/videos" element={<DashboardLayout><VideoRecommendations /></DashboardLayout>} />
            <Route path="/activities/yoga" element={<DashboardLayout><YogaMeditation /></DashboardLayout>} />
            <Route path="/activities/breathing" element={<DashboardLayout><BreathingExercises /></DashboardLayout>} />
            <Route path="/activities/journal" element={<DashboardLayout><GratitudeJournal /></DashboardLayout>} />
            <Route path="/activities/articles" element={<DashboardLayout><Articles /></DashboardLayout>} />
            <Route path="/chat" element={<DashboardLayout><Chat /></DashboardLayout>} />
            <Route path="/privacy" element={<DashboardLayout><Privacy /></DashboardLayout>} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/auth" element={<Navigate to="/dashboard" />} />
          </>
        )}

        {/* Counselor routes */}
        {user?.role === "counselor" && (
          <>
            <Route path="/counselordashboard" element={<DashboardLayout><CounselorDashboard /></DashboardLayout>} />
            <Route path="/" element={<Navigate to="/counselordashboard" />} />
            <Route path="/auth" element={<Navigate to="/counselordashboard" />} />

             <Route
      path="/counselordashboard/bookings"
      element={
        <DashboardLayout>
          <CounselorBookings />
        </DashboardLayout>
      }
    />
          </>
        )}

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
