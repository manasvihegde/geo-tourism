import { useState } from "react";

export default function AddPlaceForm() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    city: "",
    state: "",
    rating: 4
  });

  const submit = async () => {
    await fetch("http://127.0.0.1:8000/places/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    alert("Place added!");
  };

  return (
    <div>
      <h3>Add New Place</h3>
      {Object.keys(form).map(key => (
        <input
          key={key}
          placeholder={key}
          onChange={e => setForm({ ...form, [key]: e.target.value })}
        />
      ))}
      <button onClick={submit}>Add</button>
    </div>
  );
}
