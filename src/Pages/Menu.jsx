
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Menu() {

    //  יצירת סטיט אשר ינווט אותנו בין העמודים שהמשתמש בחר
    const navigate = useNavigate()


    //  בודקת האם יש משתמש מחובר לסיזן סטוראג 
    //  אם לא היא לא נותנת לו להזמין חדר ומפנה אותו לדף ההתחברות
    const checkCurentUser = () => {
        let sessionStorage_user = JSON.parse(sessionStorage.getItem('curent_user')) || " "
        if (sessionStorage_user === " ") {
            alert("Must be logged in with a user to book a hotel room")
            navigate('/Login')
            return
        }
        navigate('/Booking')
    }


    return (
        /* לשנות את הניוט ללניקים */
        <div>
            <h1><ins>Menu</ins></h1>
            <ul className='ul'>
                <li><a href="#info">Info</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#attractions">Attractions</a> </li>
                <li onClick={() => navigate('/')}>Home Page</li>
                <li onClick={() => navigate('/Login')}>Login</li>
                <li onClick={() => navigate('/Registration')}>Registration</li>
                <li onClick={checkCurentUser}>Booking</li>
            </ul>
        </div>
    )
}
