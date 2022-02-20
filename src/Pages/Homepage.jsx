import React from 'react'
import Navbar from './Navbar'
import hotel1 from '../pic/hotel1.jpg'
import Spa from '../pic/spa.jpg'
import Bar from '../pic/bar.jpg'
import Events from '../pic/events.jpg'
import backroundimage from '../pic/backround-image.jpg'


export default function Homepage() {

    //  הוצאת המידע מהלוקאל סטורג
    //  אם אין מערך בלוקל סטורג בשם "משתמשים" צור מערך ריק
    const users = JSON.parse(localStorage.getItem('users')) || []

    // אם אין משתמש בסיסן סטורג צור מחרוזת ריקה
    let sessionStorage_user = JSON.parse(sessionStorage.getItem('curent_user')) || " "

    return (
        <div>
            {/* קריאה לקומפוננטה המכילה את הנב באר*/}
            <Navbar />
            <h1>Welcome!!!!</h1>
            {/* הצגת השם המשתמש המחובר בסיסן סטורג במערך של המשתמש המחובר במיקום ה-0*/}
            <h3><ins>{sessionStorage_user[0].name}</ins></h3>
            <h3>Details about the hotel</h3>


            {/*  הצגת תוכן בית המלון*/ }
            <div style={{ border: 'solid', margin: 20 }}>
                <img width={150} src={hotel1} />
                <img width={150} src={hotel1} />
            </div>
            <div id='info'>
                <h3>Info</h3>
                King David Hotel Jerusalem is one of the most famous hotels in Jerusalem, offering luxurious décor,
                panoramic views and a seasonal outdoor heated pool.
                The spacious gardens overlook the Old Town, which is a 15-minute walk away. Free Wi-Fi is available.</div> <br />



            <h3 id={'contact'}>contact</h3>
            <u>Phone Number</u>   <u>Email</u>   <u>Address</u><br /><br />

            <h3 id='attractions'>attractions</h3>
            SPA <br />
            <img width={150} src={Spa} /><br />
            A spa is a location where mineral-rich spring water (and sometimes seawater) is used to give medicinal baths.
            Spa towns or spa resorts (including hot springs resorts) typically offer various health treatments, which are also known as balneotherapy. <br />
            <br />
            BAR <br />
            <img width={150} src={Bar} /><br />
            A bar, also known as a saloon, a tavern or tippling house, or sometimes as a pub or club, is a retail business establishment that serves alcoholic beverages,
            such as beer, wine, liquor, cocktails, and other beverages such as mineral water and soft drinks. <br />
            <br />
            EVENTS <br />
            <img width={150} src={Events} /><br />
            A ceremony is a unified ritualistic event with a purpose,
            usually consisting of a number of artistic components, performed on a special occasion. <br />
            <br />

        </div>
    )
}
