import { useContext } from "react";
import Footer from "../Footer";
import Header from "../Header/Header";
import { FormContext } from "../../context/FormContext";
import SecondForm from "../SecondForm/SecondForm";
import LastForm from "../LastForm/LastForm";
import './MainForm.css';
import FirstForm from "../FirstForm/FirstForm";

export default function MainForm() {

    const {state} = useContext(FormContext)

  return (
    <div className="main_form_container">
      <div className="main_container">
        <Header/>
          {state.page===1 && <FirstForm/>}
          {state.page===2 && <SecondForm/>}
          {state.page===3 && <LastForm/>}
      <Footer/>
      </div>
     
    </div>
  )
}
