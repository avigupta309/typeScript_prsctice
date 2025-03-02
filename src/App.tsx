import React, { useEffect, useState } from "react";
import { FormData } from "./components/ContextForm";
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

  useEffect(() => {
    console.log(information);
  }, [information]);

  return (
    <>
      <div className="showing">
        <div className="AppData">
      <h1>FormData</h1>
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

        <h1>Name Of User :</h1>
        <ul>
          {information.length > 0 ? (
            information.map((data, index) => {
              return (
                <div key={index}>
                  <li> Name - {data.userName}</li>
                  <li> EmailAddress - {data.userEmail}</li>
                  <li> Phone No. - {data.userMobile}</li>
                  <br />
                </div>
              );
            })
          ) : (
            <i>No Data Here To Show</i>
          )}
        </ul>
        </div>
        <div>
          <FormData/>
        </div>
      </div>
    </>
  );
};
