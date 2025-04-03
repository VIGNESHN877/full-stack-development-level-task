function ListRendering() {
    const items = ['Apple', 'Banana', 'Cherry', 'Date'];
  
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  
  export default ListRendering;