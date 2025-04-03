import { Formik, Form, Field } from 'formik';

function BasicFormikForm() {
  return (
    <div>
      <h2>Basic Formik Form</h2>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default BasicFormikForm;