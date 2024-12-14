import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import Chat from "./components/Chat";
import FormForDoctor from "./components/FormForDoctor";
import FormUser from "./components/FormUser";
import Success from "./components/Success";
import ChatBot from "./components/ChatBot";

function App() {
  const location = useLocation();

  const getBackgroundColor = () => {
    switch (location.pathname) {
      case '/':
        return 'rgb(59,58,59)';
      case '/form':
        return 'rgb(59,58,59)';  
      case '/chat':
        return 'rgb(100,100,100)'; 
      case '/formForDoctor':
        return 'rgb(29,29,29)'; 
      case '/formForUser':
          return 'rgb(29,29,29)'; 
      default:
        return 'white'; 
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = getBackgroundColor();
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/formForDoctor" element={<FormForDoctor />} />
        <Route path="/formForUser" element={<FormUser />} />
        <Route path="/success" element={<Success />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
