import React, {FC} from 'react';
import './App.css';
import { useState } from 'react';
import CreditCardSection from './components/CreditCardSection';
import MenuSection from './components/MenuSection';
import {CreditCardInfoState} from './model'
import { connect } from 'react-redux'
import {CARD_INFO_ACTION_TYPES} from "./actions/CardInfo"
import {SECTION_TYPE} from "./types"

interface AppProps {
  creditCardInfo:CreditCardInfoState;
  updateField:(key:string, value:string)=>{};
  validateField:(key:string)=>{};
}

const App: FC<AppProps> = props => {

  const [pageModal, setPageModal] = useState(SECTION_TYPE.CREDIT_CARD);

  const quitSection = (section:string) =>{
    if(section === SECTION_TYPE.CREDIT_CARD){
      setPageModal(SECTION_TYPE.MENU)
    }else{
      setPageModal(SECTION_TYPE.CREDIT_CARD)
    }        
  }

  return (
    <div className="App">
        { pageModal === SECTION_TYPE.CREDIT_CARD && (
          <CreditCardSection 
            onQuit={quitSection} 
            onUpdate={props.updateField} 
            onValid={props.validateField}
            creditCardInfo={props.creditCardInfo}
          />
        )}
        { pageModal === SECTION_TYPE.MENU && (
          <MenuSection onQuit={quitSection}/>
        )}
    </div>
  );
}

const mapStateToProps = (state:{CreditCardInfo:CreditCardInfoState}) => {
  const creditCardInfo = state.CreditCardInfo;
  return { creditCardInfo }
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
