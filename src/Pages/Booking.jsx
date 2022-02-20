import React, { useState } from 'react'
import Navbar from './Navbar'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';


export default function Booking() {

    //  יצירת סטיטים אשר יתפסו את הקלט של המשתמש  וינווט לעמוד הבא
    const [breakfast, setBreakfast] = useState(false)
    const [amount_of_people, setAmount_of_people] = useState(0)
    const [room_type, setRoom_type] = useState(" ")
    const [number_of_nights, setNumber_of_nights] = useState(0)
    const navigate = useNavigate()



    //  פונקציה אשר יוצרת אובייקט אשר מחזיק את הבחירה של המשתמש ומנווטת אל העמוד הצגת החדרים עם המידע שהזין המשתמש
    const btnOrder = () => {
        let room_type_obj = { breakfast: breakfast, amount_of_people: amount_of_people, room_type: room_type, number_of_nights: number_of_nights }
        navigate('/SaveRoom', { state: room_type_obj })
    }


    return (
        <div>
            {/* קריאה לקומפוננטה המכילה את הנב באר*/}
            <Navbar />
            <h1>Booking</h1><br />
            Amount of people:  <input type="number" onChange={(e) => setAmount_of_people(e.target.value)} /><br /><br />

            Room Type: <br />
            {/*  בכול שינוי של שדה בטופס ההרשמה אנו מבצעים השמה לסטיט המתאים את התוכן שהמשתמש הזין */}
            <input type="radio" name='room' value={"single"} onClick={(e) => setRoom_type(e.target.value)} />
            <label>single</label><br /><br />
            <input type="radio" name='room' value={"double"} onClick={(e) => setRoom_type(e.target.value)} />
            <label>double</label><br /><br />
            <input type="radio" name='room' value={"suite"} onClick={(e) => setRoom_type(e.target.value)} />
            <label>suite</label><br /><br />



            Number of nights:  <input type="number" onChange={(e) => setNumber_of_nights(e.target.value)} /><br /><br />

            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                subheader={<ListSubheader></ListSubheader>}>

                <ListItem>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" primary="Include breakfast?" />

                    {/* בכול לחיצה על המתג הערך של המשתנה הבולאני המייצ את בחירת המשתמש לארוחת בוקר משתנה להפך ממה שהוא היה לפני הלחיצה */}
                    {/*  אם הוא היה שקר לפני הלחיצה עכשיו הוא אמת*/}
                    <Switch edge="end" onClick={() => setBreakfast(!breakfast)} />
                </ListItem>
            </List><br />

            <Stack direction="row" spacing={2} marginLeft={6}>
                {/* בלחיצה על כפתור המחיקה אנו מרעננים את הדף הנוכחי ונוצר התחושה שניחקו הרשומות */}
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => window.location.reload()}>
                    Delete
                </Button>
                {/* פונקציה אשר שומרת את בחירת המשתמש ועוברת לדף המתאים */}
                <Button variant="contained" endIcon={<SendIcon />} onClick={btnOrder}>
                    Submit
                </Button>
            </Stack>

        </div>
    )
}
