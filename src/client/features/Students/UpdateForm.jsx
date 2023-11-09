import { useState } from "react";
import { useEditStudentMutation } from "./studentSlice";
import { useParams } from "react-router-dom";

export default function UpdateForm() {
    const { id } = useParams();
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ gpa, setGpa ] = useState("");
    const [ imageUrl, setImageUrl ] = useState("");
    const [ editStudent ] = useEditStudentMutation(id);

    const handleSubmit = (e) => {
        e.preventDefault();
        editStudent({
            id: id,
            firstName,
            lastName,
            email,
            imageUrl,
            gpa: parseFloat(gpa),
        })
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          GPA:
          <input
            type="number"
            value={gpa}
            onChange={(e) => setGpa(e.target.value)}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <button>Update Student</button>
      </form>
        </>
    )
}