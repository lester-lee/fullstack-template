import { useState } from "react";
import { useCreateStudentMutation } from "./studentSlice";

import { useDispatch } from "react-redux";

function StudentForm() {
  const [name, setName] = useState(" ");
  //   const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [createStudent] = useCreateStudentMutation();

  //   const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    createStudent({ name });
    setName(" ");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        {/* <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label> */}
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button>Add Student</button>
      </form>
    </>
  );
}

export default StudentForm;
