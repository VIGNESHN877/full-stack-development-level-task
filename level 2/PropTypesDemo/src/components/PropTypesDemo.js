import PropTypes from 'prop-types';

function PropTypesDemo(props) {
  return <h1>Hello, {props.name} (Age: {props.age})</h1>;
}

PropTypesDemo.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};

export default PropTypesDemo;