import React from 'react'
import Navbar from './Navbar'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Room from './class/Room';

export default function Payment() {

    //  מוציאים את המידע הנשלח לקומפוננטה דרך הסטיט 
    const paymentDetails = useLocation()
    let { state } = paymentDetails
    let selected_room = state.selected_room
    let breakfast = state.breakfast
    let costPerNight = state.costPerNight
    let number_of_nights = state.number_of_nights
    let amount_of_people = state.amount_of_people
    let price


    //  אם המדתמש רצה ארוחת בוקר חשב את הסכום הכולל פלוס הסכום לארוחת בוקר
    //  אחרת חשב רק את הסכום הכולל
    if (breakfast)
        price = (costPerNight * number_of_nights * amount_of_people) + 70
    else
        price = (costPerNight * number_of_nights * amount_of_people)


    //  יצירת סטיטים אשר יתפסו את הקלט של המשתמש וינווט לעמוד הבא
    const [cardholder_Name, setCardholder_Name] = useState("")
    const [card_Number, setCard_Number] = useState(0)
    const [card_Date, setCard_Date] = useState("")
    const [digits, setDigits] = useState(0)
    const [finalPrice, setFinalPrice] = useState(price)
    const navigate = useNavigate()


    //  פונקציה אשר עוברת על הערכים שהזין המשתמש ומחזירה ערך בולאני בהתאם
    const CheackUserPaymentInput = () => {
        if (cardholder_Name === "" || card_Number === ""   || card_Date === "" || digits === "") {
            return false
        }
        return true
    }


    //  פונקציה אשר יוצרת אובייקט מסוג חדר מהערכים שהזין המשתמש ומוסיפה אותו למערך החדרים השמורים
    //  אם לא כול השדות מלאים הצג הודעת שגיאה
    const saveRoomAndPayment = () => {

        if (CheackUserPaymentInput()) {

            let room = new Room(selected_room[0].key, selected_room[0].type, selected_room[0].Image,
                selected_room[0].description, costPerNight, number_of_nights,
                breakfast, amount_of_people, finalPrice, cardholder_Name, card_Number,
                card_Date, digits);

            let array_rooms = JSON.parse(localStorage.Rooms);
            let Newarray_rooms

            if (localStorage.Reserved_Rooms !== undefined) {

                let reserved_Rooms = JSON.parse(localStorage.Reserved_Rooms);

                Newarray_rooms = array_rooms.filter((per) => per.key !== selected_room[0].key)
                localStorage.Rooms = JSON.stringify(Newarray_rooms)

                let tempRooms = [...reserved_Rooms, room]
                localStorage.Reserved_Rooms = JSON.stringify(tempRooms)
            }

            else {
                Newarray_rooms = array_rooms.filter((per) => per.key !== selected_room[0].key)
                localStorage.Rooms = JSON.stringify(Newarray_rooms)
                localStorage.Reserved_Rooms = JSON.stringify([room])
            }

        }
        else {
            alert("All fields must be filled")
            return
        }
        alert("The room was successfully saved")
        navigate('/')
    }

    return (
        <div>
            {/* קריאה לקומפוננטה המכילה את הנב באר*/}
            <Navbar />
            <h1>Total to pay</h1>
            <h3>{finalPrice} $</h3><br />
            <h2>Enter payment information</h2><br />
            {/*  בכול שינוי של שדה בטופס ההרשמה אנו מבצעים השמה לסטיט המתאים את התוכן שהמשתמש הזין */}
            Cardholder's name: <input type="name" onChange={(e) => setCardholder_Name(e.target.value)} /><br /><br />
            Card Number: <input type="numbers" onChange={(e) => setCard_Number(e.target.value)} /><br /><br />
            Card Date: <input type="date" onChange={(e) => setCard_Date(e.target.value)} /><br /><br />
            3 digits: <input type="numbers" onChange={(e) => setDigits(e.target.value)} /><br /><br /><br />
            <Stack direction="row" spacing={2} marginLeft={6}>

                {/* בלחיצה על כפתור המחיקה אנו מרעננים את הדף הנוכחי ונוצר התחושה שניחקו הרשומות */}
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => window.location.reload()}>
                    Delete
                </Button>

                {/* באת לחיצה על כפתור השמירה אנו מפעילים את הפונקציה אשר מוסיפה את החדר למערך החדרים השמורים */}
                <Button variant="contained" endIcon={<SendIcon />} onClick={() => saveRoomAndPayment()}>
                    Send
                </Button>
            </Stack>
        </div>
    )
}
