
import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../Shared/TextInput';
import '../FirstForm/FirstForm.css'
import '../Shared/shared.css'
import { FormContext } from '../../context/FormContext';
import { useContext } from 'react';

// And now we can use these
const LastForm = () => {

    const {dispatch,state} = useContext(FormContext);

    const handlePrev=()=>{
      dispatch({type:'SET_PAGE',payload:2});
    }

    console.log("state => ",state);

  return (
    <>
      <Formik
        initialValues={{
          company: '',
          position: '',
          duration: '',
          description: '',
        }}
        validationSchema={Yup.object({
          company: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .min(3,'Must be Greater then 3 characters'),
          position: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .min(3,'Must be Greater then 3 characters'),
          duration: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .min(3,'Must be Greater then 3 characters'),
          description : Yup.string()
            .max(15, 'Must be 15 characters or less')
            .min(3,'Must be Greater then 3 characters'),
        })}

        onSubmit={(values, { setSubmitting }) => {
            
            dispatch({type:'SET_DATA',payload:values});
            dispatch({type:'SUBMIT_FORM'});
            console.log('testing ')
        }}
      >
        <Form>
            <div className="form_container">
             
             <MyTextInput
            label="Company Name"
            name="company"
            type="text"
            placeholder="Ollyo "
          />

          <MyTextInput
            label="Your Position"
            name="position"
            type="text"
            placeholder="Software Engineer"
          />
          <MyTextInput
            label="Duration Time "
            name="duration"
            type="text"
            placeholder="Duration Time"
          />

          <MyTextInput
            label="Description "
            name="description"
            type="text"
            placeholder="Who are you? "
          />

          <div className="button_container">
            <button onClick={handlePrev} className='btn_prev' style={{backgroundColor:"light-blue"}} > Prevous </button>
            <button  type="submit" className='btn_nex'> Submit </button>
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

export default LastForm;