import React, { useEffect, useState } from "react";
import "./App.css";

export const App: React.FC = () => {
  interface FormDataProps {
    userName: string;
    userEmail: string;
    userMobile: number;
  }
  const [formData, setFormData] = useState<FormDataProps>({
    userName: "",
    userEmail: "",
    userMobile: 0,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputName: string = e.target.name;
    const inputValue: string | number = e.target.value;
    const tempData = { ...formData };
    tempData[inputName] = inputValue;
    setFormData(tempData);
  }
  const [information, setInformation] = useState<FormDataProps[]>([]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const setData = { ...formData };
    const storedData = [...information, setData];
    setInformation(storedData);
  }

  useEffect(()=>{
    console.log(information)
  },[information])

  return (
    <>
      <h1>Avinash</h1>
      <form onSubmit={handleSubmit}>
        <div className="formData">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="userName"
            onChange={handleChange}
            placeholder="Name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="userEmail"
            onChange={handleChange}
            placeholder="emailAderss"
          />
          <label htmlFor="phone">Phone No.</label>
          <input
            type="number"
            name="userMobile"
            onChange={handleChange}
            placeholder="Mobile"
          />
          <button type="submit">Submit</button>
        </div>
      </form>

      <div className="showing">
   
      </div>
    </>
  );
};
