import { useState } from "react";

function NameList() {
  const [list, setList] = useState(["Ram", "Hari", "Shyam"]);
  const [name, setName] = useState("");
  const onAddName = () => {
    setList([...list, name]);
    setName("");
  };
  return (
    <>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={onAddName}>Add Name</button>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(10);

  function addOnClick() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <header className="App-header"></header>
      <button onClick={addOnClick}>Count = {count}</button>
    </div>
  );
}
function App() {
  return (
    <>
      <Counter />

      <NameList />
    </>
  );
}

export default App;
