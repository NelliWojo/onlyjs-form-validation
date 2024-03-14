import Validation from "./components/Validation";

function App() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleInput(event) {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  }

  function handleValidation(event) {
    event.preventDefault();
    setErrors(Validation(values));

    // call API
  }

  return (
    <form onSubmit={handleValidation}>
      <label for="name">Name</label>
      <input type="text" name="name" onChange={handleInput} />
      {errors.name && <p className="text-red-500">{errors.name}</p>}

      <label for="email">Name</label>
      <input type="email" name="email" onChange={handleInput} />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <label for="password">Name</label>
      <input type="password" name="password" onChange={handleInput} />
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
