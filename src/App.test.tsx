import { render, screen } from '@testing-library/react';
import MenuSection from "./components/MenuSection";
import CreditCardSection from './components/CreditCardSection';
import {CreditCardInfoState} from './model'

test('renders menu section', () => {
  const quitSection = (section:string)=>{console.log(section);}
  render(<MenuSection onQuit={quitSection}/>);
  const linkElement = screen.getByText(/This is menu content/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders credit card section', () => {
  const quitSection = (section:string)=>{console.log(section);}
  const onUpdate=(key:string, value:string)=>{console.log(key);} 
  const onValid=(key:string)=>{console.log(key);} 
  const creditCardInfo:CreditCardInfoState={
    cardValidInfo:{
      expiredDate:true,
      name:true,
      cvc:true,
      cardNumber:true
    },
    cardInfo:{
      expiredDate: "02/2024",
      name: "test test",
      cvc: "123",
      cardNumber:"4111111111111111"
    }
  }
  render(<CreditCardSection 
    onQuit={quitSection}
    onUpdate={onUpdate}
    onValid={onValid}
    creditCardInfo={creditCardInfo}
  />);
  const linkElement = screen.getByText("submit");
  expect(linkElement).toBeEnabled();
});
