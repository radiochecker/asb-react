import {CARD_INFO_ACTION_TYPES } from '../actions/CardInfo'
import {CardInfo, CreditCardInfoState, Payload} from "../model"

const init_state:CreditCardInfoState = {
    cardInfo:{
      expiredDate:"",
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
  expiredDate:"^(0[1-9]|1[0-2])/([0-9]{4}|[0-9]{2})$", 
  name:"^[a-zA-Z]+ [a-zA-Z]+$",
  cardNumber:'^[0-9]{16}',
  cvc:"^[0-9]{3}"
}

const CreditCardInfo = (state:CreditCardInfoState = init_state, action:{type:string, payload:Payload}):CreditCardInfoState=> {
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
        const validation = validMap[action.payload.key]
        const value = (state.cardInfo as any)[action.payload.key]
        return {
            ...state,
            cardValidInfo:{
              ...state.cardValidInfo,
              [action.payload.key]:value.match(validation)
            }
        }
    default:
      return state
  }
}

export default CreditCardInfo