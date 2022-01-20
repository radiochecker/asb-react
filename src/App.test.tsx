import React, {FC} from 'react';
import './App.css';
import { useState } from 'react';
import CreditCardSection from './components/CreditCardSection';
import MenuSection from './components/MenuSection';
import {CreditCardInfoState} from './model'
import { connect } from 'react-redux'
import {CARD_INFO_ACTION_TYPES} from "./actions/CardInfo"

interface AppProps {
  creditCardInfo:CreditCardInfoState;
  updateField:any;
  validateField:any;
}

const App: FC<AppProps> = props => {

  const [pageModal, setPageModal] = useState("creditcard");

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
          <CreditCardSection 
            onQuit={quitSection} 
            onUpdate={props.updateField} 
            onValid={props.validateField}
            creditCardInfo={props.creditCardInfo}
          />
        )}
        { pageModal === "menu" && (
          <MenuSection onQuit={quitSection}/>
        )}
    </div>
  );
}

const mapStateToProps = (state:any) => {
  const creditCardInfo = state.CreditCardInfo;
  return { creditCardInfo}
}

const mapDispatchToProps = (dispatch:any) => ({
  updateField: (key:string, value:string)=>dispatch({
      type:CARD_INFO_ACTION_TYPES.SET_CREDIT_CARD_INFO,
      payload:{key, value}
  }),
  validateField: (key:string)=>dispatch({
    type:CARD_INFO_ACTION_TYPES.VALIDATE_CREDIT_CARD_INFO,
    payload:{key}
})
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
