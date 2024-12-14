import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const FormForDoctor = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    phoneNumber: '',
    email: '',
    specialization: '',
    licenseNumber: '',
    institution: '',
    password: '',
    scalesChecked: false,
    agreeChecked: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.email) newErrors.email = 'Email address is required';
    if (!formData.specialization) newErrors.specialization = 'Specialization is required';
    if (!formData.licenseNumber) newErrors.licenseNumber = 'Medical License Number is required';
    if (!formData.institution) newErrors.institution = 'Institution is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.scalesChecked) newErrors.scalesChecked = 'You must confirm the information';
    if (!formData.agreeChecked) newErrors.agreeChecked = 'You must agree to the Privacy Policy and Terms of Use';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // If no errors, submit form and navigate to the success page
      console.log('Form submitted successfully', formData);
      navigate("/success");
    }
  };

  return (
    <>
      <img src="/wave.png" alt="" className="absolute inset-0 w-full h-full object-cover z-[-1]" />
      <div className="relative w-full h-full">
        <div className="flex justify-center mt-10 w-[1289px] h-[710px] rounded-[25px] bg-[rgb(59,58,59,100)] ml-[100px]">
          <form className="grid grid-cols-3 gap-[20px] w-[80%]" onSubmit={handleSubmit}>
            {/* Personal information */}
            <div className="flex flex-col mb-[30px]">
              <p className="info">Personal information</p>
              <input
                type="text"
                placeholder="Full name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="input"
                required
              />
              {errors.fullName && <span className="text-red-500">{errors.fullName}</span>}
              <input
                type="date"
                placeholder="Date of birth"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="input"
                required
              />
              {errors.dob && <span className="text-red-500">{errors.dob}</span>}
              <input
                type="text"
                placeholder="Phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="input"
                required
              />
              {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber}</span>}
            </div>

            {/* Professional information */}
            <div className="flex flex-col mb-[30px]">
              <p className="info">Professional information</p>
              <input
                type="text"
                placeholder="Specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="input"
                required
              />
              {errors.specialization && <span className="text-red-500">{errors.specialization}</span>}
              <input
                type="text"
                placeholder="Medical License Number"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleChange}
                className="input"
                required
              />
              {errors.licenseNumber && <span className="text-red-500">{errors.licenseNumber}</span>}
              <select
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                className="input"
                required
              >
                <option value="">Select Institution</option>
                <option value="Institution1">Institution 1</option>
                <option value="Institution2">Institution 2</option>
              </select>
              {errors.institution && <span className="text-red-500">{errors.institution}</span>}
            </div>

            {/* Platform Access */}
            <div className="flex flex-col mb-[30px]">
              <p className="info">Platform Access</p>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                required
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input"
                required
              />
              {errors.password && <span className="text-red-500">{errors.password}</span>}

              <div className="flex flex-col mt-4">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="scalesChecked"
                    checked={formData.scalesChecked}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="scalesChecked">I confirm that the information provided is correct.</label>
                </div>
                {errors.scalesChecked && <span className="text-red-500">{errors.scalesChecked}</span>}
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="agreeChecked"
                    checked={formData.agreeChecked}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="agreeChecked">I agree to the Privacy Policy and Terms of Use.</label>
                </div>
                {errors.agreeChecked && <span className="text-red-500">{errors.agreeChecked}</span>}
              </div>
            </div>

            <div className="ml-[420px]">
              <button
                type="submit"
                className="bg-[rgba(217,217,217,100)] w-[170px] h-[70px] 
                rounded-[15px] text-[20px] font-futura font-extralight mb-[30px]"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormForDoctor;
