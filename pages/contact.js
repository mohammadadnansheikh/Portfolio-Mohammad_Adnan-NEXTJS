import React, { useState } from "react";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { sendContactForm } from "../lib/api";

const initialValue = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initialState = { values: initialValue };

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState(initialState);
  const { values } = state;


  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  
  const onSubmit = async (e)=>{
    e.preventDefault()
    setState((prev)=>({
      ...prev
    }))
    try {
      await sendContactForm(values)
      alert("Message Send")
      setState(initialState);
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
   

  }
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header>
        <Navbar toggleSidebar={toggleSidebar} />
      </header>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <section className="container  mx-auto py-10 px-4">
        <Heading title="Contact Us" />
        <form action="" className="flex flex-col gap-8 w-[75%] mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="inputStyle"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="inputStyle"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            placeholder="Subject"
            className="inputStyle"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            id=""
            rows="3"
            required
            className="inputStyle"
            placeholder="Type Here......"
            value={values.message}
            onChange={handleChange}
          ></textarea>
          <div className="mb-8">
            <button
              type="submit"
              className="btn"
              disabled={
                !values.name ||
                !values.email ||
                !values.subject ||
                !values.message
              }
              onClick={onSubmit}
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
