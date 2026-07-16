import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateResume from "./pages/CreateResume";
import PreviewResume from "./pages/PreviewResume";
import Templates from "./pages/Templates";
import ProtectedRoute from "./components/ProtectedRoute";
import EditResume from "./pages/EditResume";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
        <Route path="/createResume" element={<ProtectedRoute> <CreateResume /> </ProtectedRoute>} />
        <Route path="/createResume/:template" element={<ProtectedRoute> <CreateResume /> </ProtectedRoute>} />
        <Route path="/previewResume/:id" element={<PreviewResume />} />
        <Route path="/edit-resume/:id" element={<EditResume />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;