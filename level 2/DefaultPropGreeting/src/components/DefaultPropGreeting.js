function DefaultPropGreeting(props) {
    return <h1>{props.greeting}</h1>;
  }
  
  DefaultPropGreeting.defaultProps = {
    greeting: "Hello, World!"
  };
  
  export default DefaultPropGreeting;