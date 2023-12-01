import MainForm from "./components/MainForm/MainForm"
import { FormProvider } from "./context/FormContext"
function App() {
  

  return (
    <>
    <FormProvider>
       <MainForm />
    </FormProvider>
     
    </>
  )
}

export default App
