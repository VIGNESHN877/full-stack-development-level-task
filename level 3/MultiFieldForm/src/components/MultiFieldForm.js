import { Formik, Form, Field } from 'formik';

function MultiFieldForm() {
  return (
    <div>
      <h2>Multiple Input Form</h2>
      <Formik
        initialValues={{ firstName: '', lastName: '', age: '' }}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <Field type="text" id="firstName" name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <Field type="text" id="lastName" name="lastName" />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <Field type="number" id="age" name="age" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default MultiFieldForm;