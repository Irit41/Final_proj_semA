import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function RoomCard(props) {

    //  הוצאת מתכונות שנלחו על הקומפוננטה מהדף הקודם 
    //  יצירת סטיט אשר ינווט אותנו לעמוד המתאים
    let { Image, type, description, key_name, costPerNight, breakfast, number_of_nights , amount_of_people} = props
    const navigate = useNavigate()


    //  הפונקציה מקבלת את שם החדר , עוברת על המערך של החדרים בלוקאל סטראג ומוציאה אותו משם
    //  לאחר מכן היא מעדכנת את מערך החדרים ושומרת אותו שוב בלוקאל סטוראג
    //  יוצרת אובייקט אשר מייצג את פריט החדר הנחוצים , שולחת אותו לעמוד המתאים ועוברת לעמוד המתאים
    const saveRoomDetails = (key_name) => {

        let array_rooms = JSON.parse(localStorage.getItem(`Rooms`))
        let selected_room = array_rooms.filter((per) => per.key === key_name)

        let paymentDitels = { selected_room:selected_room ,costPerNight: costPerNight, breakfast: breakfast, 
            number_of_nights: number_of_nights , amount_of_people: amount_of_people}
        navigate('/Payment', { state: paymentDitels })
    }


    return (
        <div>
            {/* הצגת תוכן המידע שנשלח לקומפוננטה */}
            <div style={{ border: 'solid', padding: 10, margin: 20 }}>
                <img width={200} src={Image} /><br />
                <h3>{type}</h3>
                {description}<br />
                {/* כאשר הכפתור נלחץ בצע את הפעולה אשר שומרת את החדר ועוברת לעמוד המתאים */}
                <button type="submit" onClick={() => saveRoomDetails(key_name)}>save</button>
            </div><br />
        </div>
    )
}
