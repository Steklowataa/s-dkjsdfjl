import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormUser() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    phoneNumber: '',
    email: '',
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

    // Walidacja formularza
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.email) newErrors.email = 'Email address is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.scalesChecked) newErrors.scalesChecked = 'You must confirm the information';
    if (!formData.agreeChecked) newErrors.agreeChecked = 'You must agree to the Privacy Policy and Terms of Use';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Jeśli nie ma błędów, przekieruj na stronę /chatbot
      navigate('/chatbot');
    }
  };

  return (
    <>
      <img src="/wave.png" alt="" className="absolute inset-0 w-full h-full object-cover z-[-1]" />
      <div className="flex justify-center mt-10 bg-[rgba(63,63,63,100)] w-[750px] h-[700px] ml-[350px] rounded-[30px]">
        <form className="grid grid-cols-2 gap-5 w-full max-w-3xl" onSubmit={handleSubmit}>
          <div className="flex flex-col ml-[60px]">
            <p className="info">Personal information</p>
            <input
              type="text"
              placeholder="Full name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="input"
            />
            {errors.fullName && <span className="text-red-500">{errors.fullName}</span>}
            <input
              type="date"
              placeholder="Date of birth"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="input"
            />
            {errors.dob && <span className="text-red-500">{errors.dob}</span>}
            <input
              type="text"
              placeholder="Phone number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="input"
            />
            {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber}</span>}
          </div>
          <div className="flex flex-col">
            <p className="info">Platform Access</p>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input"
            />
            {errors.password && <span className="text-red-500">{errors.password}</span>}
            <div className="flex flex-col mt-2">
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="scalesChecked"
                  checked={formData.scalesChecked}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="scalesChecked" className="text-[16px] w-[300px]">I confirm that the information provided is correct.</label>
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
                <label htmlFor="agreeChecked" className="text-[16px] w-[300px]">I agree to the Privacy Policy and Terms of Use.</label>
              </div>
              {errors.agreeChecked && <span className="text-red-500">{errors.agreeChecked}</span>}
            </div>
          </div>
          <div className="ml-[300px] mt-[30px]">
            <button
              type="submit"
              className="bg-[rgba(217,217,217,100)] w-[170px] h-[70px] rounded-[15px] text-[20px] font-futura font-extralight mb-[30px]"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
