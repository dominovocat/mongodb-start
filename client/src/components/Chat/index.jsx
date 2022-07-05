import React from "react";
import { Formik, Form, Field } from "formik";
//rfce
function Chat() {

  const initialData={
    body:'',
  }
  const handlerSubmit=()=>{};

  return (
    <div>
      <Formik
      initialValues={initialData}
      onSubmit={handlerSubmit}
      >
        {(formikProps) => {
          return (
            <Form>
              <Field type="text" name="body"/>
              <button type="submit"></button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Chat;
