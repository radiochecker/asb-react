import { CARD_INFO_ACTION_TYPES } from '../actions/CardInfo'
import {CreditCardInfoState} from "../model"

const init_state:CreditCardInfoState = {
    cardInfo:{
      expiredDate:"121",
      name:"",
      cardNumber:"",
      cvc:""
    },
    cardValidInfo:{
      expiredDate:true,
      name:true,
      cardNumber:true,
      cvc:true
    }
}

const validMap:any = {
  expiredDate:"^(0[1-9]|1[0-2])/?([0-9]{4}|[0-9]{2})$", //https://stackoverflow.com/questions/20430391/regular-expression-to-match-credit-card-expiration-date
  name:"^[a-zA-Z]+ [a-zA-Z]+$",
  cardNumber:'^[0-9]{16}',
  cvc:"^[0-9]{3}"
}

const CreditCardInfo = (state = init_state, action:{type:string, payload:any}) => {
  switch (action.type) {
    case CARD_INFO_ACTION_TYPES.SET_CREDIT_CARD_INFO:
        return {
            ...state,
            cardInfo:{
              ...state.cardInfo,
              [action.payload.key]:action.payload.value
            }
        }
    case CARD_INFO_ACTION_TYPES.VALIDATE_CREDIT_CARD_INFO:
        const validation = validMap[action.payload.key] || "";
        let result = false
        const value:string = (state.cardInfo as any)[action.payload.key];
        if (value.match(validation)){
          result = true
        }
        return {
            ...state,
            cardValidInfo:{
              ...state.cardValidInfo,
              [action.payload.key]:result
            }
        }
    default:
      return state
  }
}

export default CreditCardInfo