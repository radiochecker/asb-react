export interface CardInfo {
    cardNumber: string,
    name: string,
    expiredDate:string,
    cvc:string
}

export interface CardValidInfo {
    cardNumber: boolean,
    name: boolean,
    expiredDate:boolean,
    cvc:boolean
}

export interface CreditCardInfoState {
    cardInfo:CardInfo,
    cardValidInfo:CardValidInfo
}

export interface Payload {
    key:string,
    value:string
}