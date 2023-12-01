import {  useField } from 'formik';
import './shared.css'
const MyImageInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className='input_container'>
      <label className='form_label_text' htmlFor={props.id || props.name}>{label}</label>
      <input className="form_input_text form_input_image" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyImageInput;