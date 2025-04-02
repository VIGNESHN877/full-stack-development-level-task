import PropTypes from 'prop-types';

function PropTypesDemo({ name, age }) {
  return (
    <div>
      <h2>PropTypes Validation</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

PropTypesDemo.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};

export default PropTypesDemo;