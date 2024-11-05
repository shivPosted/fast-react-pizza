import { useState } from "react";
import Button from "../../ui/Button";

function Createuser() {
  const [name, setName] = useState("");

  return (
    <div>
      <p className="mb-4 text-sm   sm:mb-4 sm:text-base sm:text-stone-700">
        👋 Type your name to start ordering...
      </p>
      <input
        type="text"
        placeholder="your name here..."
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name && <Button type="primary">Start Ordering</Button>}
    </div>
  );
}
export default Createuser;
