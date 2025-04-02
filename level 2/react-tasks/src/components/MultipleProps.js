function MultipleProps({ name, age, city }) {
    return (
      <div>
        <h2>User Details</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>City: {city}</p>
      </div>
    );
  }
  
  export default MultipleProps;