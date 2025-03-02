import React from "react";

export const FormData:React.FC = () => {
  return (
    <>
      <h1>FormData</h1>
      <form>
        <div className="formData">
          <label htmlFor="name">Name</label>
          <input type="text" name="userName" placeholder="Name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="userEmail" placeholder="emailAderss" />
          <label htmlFor="phone">Phone No.</label>
          <input type="number" name="userMobile" placeholder="Mobile" />
          <button type="submit">Submit</button>
        </div>
      </form>

      <h1>Name Of User :</h1>
    </>
  );
};
