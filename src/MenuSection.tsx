import React, {FC} from 'react';
import logo from './back.svg'
import {Card, Button, CardHeader, CardBody, CardText, CardImg} from "reactstrap"

interface MenuSectionProps {
  onQuit: any;
}

const MenuSection:FC<MenuSectionProps> = props => {
    return (
      <Card>
        <CardHeader>
          <CardImg width={50} src={logo} onClick={()=>{props.onQuit("menu")}}/>
          <CardText>Menu</CardText>
        </CardHeader>  
        <CardBody>
          <p>This is menu content</p>
        </CardBody>  
      </Card>
    );
  }

  export default MenuSection