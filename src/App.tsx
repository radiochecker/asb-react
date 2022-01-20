import './App.css';
import { useState } from 'react';
import CreditCardSection from './CreditCardSection';
import MenuSection from './MenuSection';
import {CardInfo} from './model'

function App() {

  const [pageModal, setPageModal] = useState("creditcard");
  const cardInfo:CardInfo = {
    expiredDate:"test",
    name:"tt",
    cardNumber:"134123411341",
    cvc:"133"
  }

  const quitSection = (section:string) =>{
    if(section === "creditcard"){
      setPageModal("menu")
    }else{
      setPageModal("creditcard")
    }        
  }

  return (
    <div className="App">
        { pageModal === "creditcard" && (
          <CreditCardSection onQuit={quitSection} cardInfo={cardInfo}/>
        )}
        { pageModal === "menu" && (
          <MenuSection onQuit={quitSection}/>
        )}

        
    </div>
  );
}

export default App;
