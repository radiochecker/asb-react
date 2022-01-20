import React, {FC} from 'react';
import {Button, CardHeader, CardBody, Card, CardImg, CardText, Label, Row, Input} from "reactstrap";
import {CreditCardInfoState, CardInfo, CardValidInfo} from "./model";
import logo from "./burger.svg";

interface CreditCardSectionProps {
  onQuit: any;
  onUpdate: any;
  onValid: any;
  creditCardInfo: CreditCardInfoState;
}

const CreditCardSection: FC<CreditCardSectionProps> = props => {

  const cardInfo:CardInfo = props.creditCardInfo.cardInfo;
  const validInfo:CardValidInfo = props.creditCardInfo.cardValidInfo;

  const validInput:boolean = validInfo.cardNumber && validInfo.name && validInfo.cvc && validInfo.expiredDate 
    && cardInfo.cardNumber.length > 0 && cardInfo.name.length > 0 && cardInfo.cvc.length > 0 && cardInfo.expiredDate.length > 0

  const onSubmit = () =>{
    console.log(JSON.stringify(cardInfo))
  }

  return (
    <Card>
      <CardHeader>
          <CardImg width={50} src={logo} onClick={()=>{props.onQuit("creditcard")}}/>
          <CardText>Register Card Form</CardText>
      </CardHeader>
      <CardBody>
        <Row>
          <Label>Card Number</Label>
          <Input value={cardInfo.cardNumber} 
            onBlur={e=>{props.onValid("cardNumber")}}
            onChange={e=>{props.onUpdate("cardNumber",e.target.value)}}
          />
          {!validInfo.cardNumber && (
            <div>invalid cardNumber please input 16 digits</div>
          )}
        </Row>
        <Row>
          <Label>Name</Label>
          <Input value={cardInfo.name} 
            onBlur={e=>{props.onValid("name")}}
            onChange={e=>{props.onUpdate("name",e.target.value)}}
          />
           {!validInfo.name && (
            <div>invalid name</div>
          )}
        </Row>
        <Row>
          <Label>Expired Date</Label>
          <Input value={cardInfo.expiredDate} 
            onBlur={e=>{props.onValid("expiredDate")}}
            onChange={e=>{props.onUpdate("expiredDate",e.target.value)}}
          />
           {!validInfo.expiredDate && (
            <div>invalid expired date</div>
          )}
        </Row>
        <Row>
          <Label>CVC</Label>
          <Input value={cardInfo.cvc} 
            onBlur={e=>{props.onValid("cvc")}}
            onChange={e=>{props.onUpdate("cvc",e.target.value)}}
          />
           {!validInfo.cvc && (
            <div>invalid cvc</div>
          )}
        </Row>
        <Row>
          <Button disabled={!validInput} onClick={()=>console.log(JSON.stringify(cardInfo))}>submit</Button>
        </Row>
      </CardBody>
    </Card>
  );
  }

  export default CreditCardSection