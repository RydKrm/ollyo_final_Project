import {  useField } from 'formik';
import './shared.css'
const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className='input_container'>
      <label className='form_label_text' htmlFor={props.id || props.name}>{label}</label>
      <input className="form_input_text" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyTextInput;