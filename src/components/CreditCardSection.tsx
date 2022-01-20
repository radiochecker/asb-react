import React, {FC} from 'react';
import {Button, Container, CardImg, CardText, Row, Input, Col} from "reactstrap";
import {CreditCardInfoState, CardInfo, CardValidInfo} from "../model";
import logo from "../burger.svg";

interface CreditCardSectionProps {
  onQuit: (s:string) => void;
  onUpdate: (key:string, v:string) => void;
  onValid: (key:string) => void;
  creditCardInfo: CreditCardInfoState;
}

/**
 * credit card input form component.
 * submit function not implemented
 * no card name input
 */
const CreditCardSection: FC<CreditCardSectionProps> = props => {

  const cardInfo:CardInfo = props.creditCardInfo.cardInfo;
  const validInfo:CardValidInfo = props.creditCardInfo.cardValidInfo;

  const validInput:boolean = validInfo.cardNumber && validInfo.cvc && validInfo.expiredDate 
    && cardInfo.cardNumber.length > 0 && cardInfo.cvc.length > 0 && cardInfo.expiredDate.length > 0

  return (
    <Container className="container">
      <Row className="section-header">
        <CardImg className='section-icon position-absolute top-0 start-0'src={logo} onClick={()=>{props.onQuit("creditcard")}}/>
        <Col md={12} sm={12}>
          <CardText>Register Card Form</CardText>
        </Col>
      </Row>
      <Row className='section-body'>
        <Col md={12} sm={12}>
          <Row className='p-2, align-items-center, justify-content-center section-content'>
            <div>Welcome &#123; User.FirstName &#125;</div>
          </Row>
          <Row className='p-2, justify-content-center'>
            <Col md={8} sm={12}>
            <Row>
              <Input value={cardInfo.cardNumber} 
                onBlur={e=>{props.onValid("cardNumber")}}
                placeholder='Credit Card Number'
                onChange={e=>{props.onUpdate("cardNumber",e.target.value)}}
              />
              {!validInfo.cardNumber && (
                <div>invalid Card Number please input 16 digits</div>
              )}
            </Row>
              <Row className='p-2 justify-content-end'>
                <Col md={3} sm={12}>
                  <Input value={cardInfo.cvc} 
                    onBlur={e=>{props.onValid("cvc")}}
                    placeholder='CVC'
                    onChange={e=>{props.onUpdate("cvc",e.target.value)}}
                  />
                  {!validInfo.cvc && (
                    <div>invalid cvc</div>
                  )}
                </Col>
                <Col md={3} sm={12}>
                  <Input value={cardInfo.expiredDate} 
                    onBlur={e=>{props.onValid("expiredDate")}}
                    placeholder='Expiry'
                    onChange={e=>{props.onUpdate("expiredDate",e.target.value)}}
                  />
                  {!validInfo.expiredDate && (
                    <div>invalid expired date</div>
                  )}
                </Col>
              </Row>
              <Row>
                <Button disabled={!validInput} onClick={()=>console.log(JSON.stringify(cardInfo))}>submit</Button>
              </Row>
            </Col>
          </Row> 
        </Col>
      </Row>
    </Container>
  );
  }

  export default CreditCardSection