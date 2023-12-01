import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../Shared/TextInput';
import './FirstForm.css'
import '../Shared/shared.css'
import MyImageInput from '../Shared/ImageInput';
import { FormContext } from '../../context/FormContext';

// And now we can use these
const FirstForm = () => {

    const {dispatch,state} = useContext(FormContext);

    console.log("state => ",state);

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          address: '',
          image:null // added for our checkbox
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .min(3,'Must be Greater then 3 characters')
            .required('Required'),
          email: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          phone: Yup.string()
            .max(13,'Invalid email address')
            .min(3,'greater than 3 character ')
            .required('Required'),
          address : Yup.string()
            .required('Required'),
          image : Yup.string()
            .required('Required'),  
        })}

        onSubmit={(values, { setSubmitting }) => {
            dispatch({type:'SET_PAGE',payload:2});
            dispatch({type:'SET_DATA',payload:values});
            console.log('testing ')
        }}
      >
        <Form>
            <div className="form_container">
             
             <MyTextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Jhon Deo"
          />

          <MyTextInput
            label="Email"
            name="email"
            type="email"
            placeholder="jhon@gmail.com"
          />
          <MyTextInput
            label="Phone"
            name="phone"
            type="text"
            placeholder="+8801712345678 "
          />

          <MyTextInput
            label="Address"
            name="address"
            type="text"
            placeholder="2464 Royal Ln. Mesa, New Jersey 45463"
          />

          <MyImageInput
            label="Image"
            name="image"
            type="file"
            placeholder="Upload Your Image"
          />
          <div className="button_container">
            <button className='btn_prev' style={{backgroundColor:"white"}} disabled={true}> Prevous </button>
            <button  type="submit" className='btn_nex'> Next </button>
          </div>
            

            </div>
         

          {/* <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>

          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox> */}

          
        </Form>
      </Formik>
    </>
  );
};

export default FirstForm;