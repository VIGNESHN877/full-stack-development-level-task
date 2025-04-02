function DefaultPropGreeting({ name }) {
    return <h2>Hello, {name}!</h2>;
  }
  
  DefaultPropGreeting.defaultProps = {
    name: "World"
  };
  
  export default DefaultPropGreeting;