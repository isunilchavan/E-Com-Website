import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    complaint: "",
  });

  const handleFormSubmit = async () => {
    try {
      const response = await fetch(
        "https://e-com-web-92540-default-rtdb.firebaseio.com/user.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("You have successfully registered a complaint.");
      } else {
        alert("Error sending data to Firebase.");
      }
    } catch (error) {
      // Handle network error
      console.error("Network error:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="complaint" className="form-label">
            Complaint
          </label>
          <textarea
            className="form-control"
            id="complaint"
            name="complaint"
            value={formData.complaint}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
