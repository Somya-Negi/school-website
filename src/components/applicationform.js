import React, { useState } from "react";
import "../App.css";

const FormPage = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    guardianName: "",
    email: "",
    phone: "",
    grade: "",
    pincode: "",
    dob: "",
    incomeSlab: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.studentName) tempErrors.studentName = "Student name is required";
    if (!formData.guardianName) tempErrors.guardianName = "Guardian name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Invalid email format";
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone)) tempErrors.phone = "Invalid phone number";
    if (!formData.grade) tempErrors.grade = "Grade is required";
    if (!formData.pincode) tempErrors.pincode = "Pincode is required";
    else if (!/^[0-9]{6}$/.test(formData.pincode)) tempErrors.pincode = "Invalid pincode";
    if (!formData.dob) tempErrors.dob = "Date of birth is required";
    if (!formData.incomeSlab) tempErrors.incomeSlab = "Income slab is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted Successfully:", formData);
      alert("Form submitted successfully!");
      setFormData({
        studentName: "",
        guardianName: "",
        email: "",
        phone: "",
        grade: "",
        pincode: "",
        dob: "",
        incomeSlab: "",
      });
    }
  };

  return (
    <div
  className="form-page-container"
  style={{
    backgroundImage: "url('/images/school-playground.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "40px",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Add background color overlay
    backgroundBlendMode: "overlay", // Blend with the image
  }}
>
  <div
    className="form-content-wrapper"
    style={{
      display: "flex",
      backgroundColor: "rgba(255, 255, 255, 1)", // Semi-transparent background
      overflow: "hidden",
      maxWidth: "1000px",
      width: "100%",
      height: "auto",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
      borderRadius: "20px",
    }}
  >
    {/* Text Area */}
    <div
      className="text-container"
      style={{
        flex: "1",
        padding: "30px",
        background: "linear-gradient(to right, #06b6d4, #0e7490)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: "20px 0 0 20px", // Rounded edges for the left side
      }}
    >
      <h2>Welcome to Our School</h2>
      <p style={{ lineHeight: "1.8", marginBottom: "30px" }}>
        Join our institution and give your child the best education possible. Fill out the form to get started with the
        admission process. We value your trust and look forward to welcoming you to our family.
      </p>
      <h3>Admissions open for 2025-26</h3>
    </div>

    {/* Form Container */}
    <div
      className="form-container"
      style={{
        flex: "1",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "0 20px 20px 0", // Rounded edges for the right side
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow for depth
      }}
    >
      <h2 className="form-title" style={{ textAlign: "center", marginBottom: "20px" }}>
        Admission Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field" style={{ marginBottom: "20px" }}>
          <label htmlFor="studentName">Student Name:</label>
          <input
            id="studentName"
            name="studentName"
            type="text"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Enter student's full name"
          />
          {errors.studentName && <div className="error-message">{errors.studentName}</div>}
        </div>

        <div className="form-field" style={{ marginBottom: "20px" }}>
          <label htmlFor="guardianName">Guardian Name:</label>
          <input
            id="guardianName"
            name="guardianName"
            type="text"
            value={formData.guardianName}
            onChange={handleChange}
            placeholder="Enter guardian's full name"
          />
          {errors.guardianName && <div className="error-message">{errors.guardianName}</div>}
        </div>

        <div className="form-field" style={{ marginBottom: "20px" }}>
          <label htmlFor="email">Email ID:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter a valid email address"
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <button
          type="submit"
          className="submit-btn"
          style={{
            marginTop: "20px",
            width: "100%",
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "12px",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>

  );
};

export default FormPage;