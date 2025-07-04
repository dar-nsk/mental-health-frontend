import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const navigate = useNavigate(); // ✅ Moved here, top-level
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setErrors({});
    setFormData({ username: "", email: "", password: "" });
    setIsRegister(!isRegister);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (isRegister && formData.username.trim().length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch(
        `https://mental-health-backend-1.onrender.com`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        if (isRegister) {
          alert(data.message || "Registration successful! You can now log in.");
          toggleForm();
        } else {
          alert(data.message || "Login successful!");
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));

          // ✅ Role-based navigation without reload
          setTimeout(() => {
  if (data.user && data.user.role === "counselor") {
    navigate("/counselordashboard");
  } else {
    navigate("/dashboard");
  }
}, 5000);
        }
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="max-w-md w-full space-y-8 p-8 border border-gray-200 shadow rounded-lg">
        <h2 className="text-center text-3xl font-bold text-teal-600">
          {isRegister ? "Create your account" : "Sign in to your account"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {isRegister && (
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-green-600 py-2 outline-none"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>
          )}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-green-600 py-2 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-green-600 py-2 outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded transition"
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        <div className="text-center mt-4">
          <button
            onClick={toggleForm}
            className="text-teal-600 hover:underline text-sm"
          >
            {isRegister
              ? "Already have an account? Sign in"
              : "Don't have an account? Register"}
          </button>
        </div>
      </div>
    </div>
  );
}
