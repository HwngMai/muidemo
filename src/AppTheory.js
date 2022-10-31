import "./App.css";
import AccordionDemo from "./Components/AccordionDemo";
import CustomComponent from "./Components/CustomComponent";
import CustomTheme from "./Theme/customTheme";
import FlexDemo from "./Components/FlexDemo";
import FormDemo from "./Components/FormDemo";
import BasicGrid from "./Components/Grid";
import Index from "./Components/Index.jsx";
import StackDemo from "./Components/StackDemo";

function App() {
  return (
    <div className='App'>
      <Index />
      <BasicGrid />
      <AccordionDemo />
      <FormDemo />
      <StackDemo />
      <FlexDemo />
      <CustomComponent />
    </div>
  );
}

export default App;
