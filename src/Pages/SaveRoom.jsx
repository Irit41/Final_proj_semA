import React from 'react'
import Navbar from './Navbar'
import singleroom from '../pic/single-room.jpg'
import singleroom1 from '../pic/single-room1.jpg'
import singleroom2 from '../pic/single-room2.jpg'
import doubleroom from '../pic/double-room.jpg'
import doubleroom1 from '../pic/double-room1.jpg'
import doubleroom2 from '../pic/double-room2.jpg'
import suitesroom from '../pic/suites-room.jpg'
import suitesroom1 from '../pic/suites-room1.jpg'
import suitesroom2 from '../pic/suites-room2.jpg'
import { useLocation } from 'react-router-dom'
import RoomCard from './RoomCard'

//  מערך החדרים
/* לשנות את תיאור החדרים שיהיו שונים */
var array_Rooms = [{ key: 'single', type: 'single', Image: singleroom, description: 'This room has a single bed, a relatively small room', costPerNight: 100 },
{ key: 'single1', type: 'single', Image: singleroom1, description: 'This room has a single bed, a relatively small room', costPerNight: 100 },
{ key: 'single2', type: 'single', Image: singleroom2, description: 'This room has a single bed, a relatively small room', costPerNight: 100 },
{ key: 'double', type: 'double', Image: doubleroom, description: 'ONE KING OR TWO TWIN BEDS', costPerNight: 200 },
{ key: 'double1', type: 'double', Image: doubleroom1, description: 'ONE KING OR TWO TWIN BEDS', costPerNight: 200 },
{ key: 'double2', type: 'double', Image: doubleroom2, description: 'ONE KING OR TWO TWIN BEDS', costPerNight: 200 },
{ key: 'suite', type: 'suite', Image: suitesroom, description: 'Featuring a plush bed and living space with extra seating, a sleeper sofa, and a TV that can be seen from every angle of the suite. Each studio suite includes a workstation, a wet bar, a refrigerator, and a microwave.', costPerNight: 300 },
{ key: 'suite1', type: 'suite', Image: suitesroom1, description: 'Featuring a plush bed and living space with extra seating, a sleeper sofa, and a TV that can be seen from every angle of the suite. Each studio suite includes a workstation, a wet bar, a refrigerator, and a microwave.', costPerNight: 300 },
{ key: 'suite2', type: 'suite', Image: suitesroom2, description: 'Featuring a plush bed and living space with extra seating, a sleeper sofa, and a TV that can be seen from every angle of the suite. Each studio suite includes a workstation, a wet bar, a refrigerator, and a microwave.', costPerNight: 300 }]



export default function SaveRoom() {

    //  אם מערך החדרים קיים משוך אותו מהלוקאל סטוראג אחרת צור אחד חדש הממערך החדרים
    let Rooms
    if (localStorage.Rooms === undefined) {
        Rooms = array_Rooms
        localStorage.Rooms = JSON.stringify(Rooms)
    }
    else
        Rooms = JSON.parse(localStorage.getItem('Rooms'))


    //  יצירת סטיטים אשר יתפסו את הקלט של המשתמש , ינווט לעמוד הבא
    //  משתנה מקומי אשר מוצאי את המידע ששלחנו לו מהעמוד הקודם ושומרת אותם במשתנים לוקאלים
    const roomDetails = useLocation()
    let { state } = roomDetails
    let breakfast = state.breakfast
    let amount_of_people = state.amount_of_people
    let room_type = state.room_type
    let number_of_nights = state.number_of_nights


    //  צור מערך של אובייקטים מסוג חדרים אשר סוג החדר תואם לבחירת משתמש מהעמוד הקודם
    let list_of_rooms = Rooms.filter((per) => per.type === room_type)

    //  צור רשימה שם קומפוננטות מסוג "כרטיס חדר" והצג אותם על המסך
    let new_list_of_rooms = list_of_rooms.map((room) => <RoomCard key={room.key} type={room.type} Image={room.Image}
        description={room.description} key_name={room.key} costPerNight={room.costPerNight} breakfast={breakfast} 
        number_of_nights={number_of_nights} amount_of_people = {amount_of_people} />)

    return (
        <div>
            {/* קריאה לקומפוננטה המכילה את הנב באר*/}
            <Navbar />
            <h1>Choose a room</h1>
            {/* הצג את הכרטיסים שנוצרו על המסך */}
            {new_list_of_rooms}
        </div>
    )
}
