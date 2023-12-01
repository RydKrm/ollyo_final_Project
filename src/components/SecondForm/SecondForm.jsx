import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../Shared/TextInput';
import '../FirstForm/FirstForm.css'
import '../Shared/shared.css'
import MyImageInput from '../Shared/ImageInput';
import { FormContext } from '../../context/FormContext';

// And now we can use these
const SecondForm = () => {

    const {dispatch,state} = useContext(FormContext);

    const handlePrev=()=>{
      dispatch({type:'SET_PAGE',payload:1});
    }

    console.log("state => ",state);

  return (
    <>
      <Formik
        initialValues={{
          higherDegree: '',
          field: '',
          institution: '',
          graduation: '',
        }}
        validationSchema={Yup.object({
          higherDegree: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .min(3,'Must be Greater then 3 characters'),
          field: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .min(3,'Must be Greater then 3 characters'),
          institution: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .min(3,'Must be Greater then 3 characters'),
          graduation : Yup.string()
            .max(15, 'Must be 15 characters or less')
            .min(3,'Must be Greater then 3 characters'),
        })}

        onSubmit={(values, { setSubmitting }) => {
            dispatch({type:'SET_PAGE',payload:3});
            dispatch({type:'SET_DATA',payload:values});
            console.log('testing ')
        }}
      >
        <Form>
            <div className="form_container">
             
             <MyTextInput
            label="Higher Degree"
            name="higherDegree"
            type="text"
            placeholder="Jhon Deo"
          />

          <MyTextInput
            label="Field of Study"
            name="field"
            type="text"
            placeholder="jhon@gmail.com"
          />
          <MyTextInput
            label="Institution "
            name="institution"
            type="text"
            placeholder="Institution Name"
          />

          <MyTextInput
            label="Graduation Year"
            name="graduation"
            type="text"
            placeholder="2022"
          />

          <div className="button_container">
            <button onClick={handlePrev} className='btn_prev' style={{backgroundColor:"light-blue"}} > Prevous </button>
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
      */}

          
        </Form>
      </Formik>
    </>
  );
};

export default SecondForm;