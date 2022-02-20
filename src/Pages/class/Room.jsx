export default class Room {
    constructor(key,type,Image,description,pricePerNight,numberOfNights,breakfast ,amount_of_people, totalPrice,
        cardholder_Name,card_Number,card_Date,digits)
    {
        this.key = key;
        this.type = type;
        this.Image = Image;
        this.description = description;
        this.numberOfNights = numberOfNights;
        this.totalPrice = totalPrice
        this.pricePerNight = pricePerNight;
        this.cardholder_Name = cardholder_Name;
        this.card_Number = card_Number;
        this.card_Date = card_Date;
        this.digits = digits;
        this.breakfast = breakfast
        this.amount_of_people=amount_of_people
    }
}