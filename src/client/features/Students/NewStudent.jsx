import { useState } from "react";
import { useCreateStudentMutation } from "./studentSlice";

/** Form for creating new tasks */
export default function NewTask() {
  const [description, setDescription] = useState("");
  const [createStudent] = useCreateStudentMutation();

  const create = async (evt) => {
    evt.preventDefault();
    createStudent({ description });
  };

  return (
    <form onSubmit={create}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button>Create</button>
    </form>
  );
}