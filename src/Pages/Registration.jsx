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
import User from './class/User';
import { useNavigate } from 'react-router-dom';


export default function Registration() {

    //  יצירת סטיטים אשר יתפסו את הקלט של המשתמש , יתנו אישור שהתקיים תנאי מסויים וינווט לעמוד הבא
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [re_password, setRePassword] = useState("")
    const [phoneNumber, setPhone_Number] = useState(0)
    const [flag_switch, setSwitch] = useState(false)
    const navigate = useNavigate()



    //  פונקציה אשר יוצר אובייקט מסוג משתמש עם הערכים שהזין המשתמש ומוסיפה אותו ללוקאל סטורג ומנווטת לדף ההתחברות 
    //  לעבוד על הסינון קלט מהמשתמש
    const register_LocalStorage = () => {

        
        let new_user = new User(name, email, password, phoneNumber)
        if (localStorage.users !== undefined) {
            let users = JSON.parse(localStorage.users);

            let find_user = users.filter((per) => per.email === email)

            if (find_user.length !== 0) {
                alert("This user already exists in the system")
                return
            }

            let newUsers = [...users, new_user];
            localStorage.users = JSON.stringify(newUsers);
        }
        else {
            localStorage.users = JSON.stringify([new_user]);
        }
        navigate('/Login')
    }


    //  פונקציה אשר בודקת האם המשתמש הסכים לתנאי השירות בעמצעות ייצוג בולאני של משתנה 
    //  אם המשתנה מייצג אמת ושתי הסיסמאות זהות הוא קוראה לפונקציה אשר מוסיפה אותו למערך המשתמשים 
    //  אחרת הוא מציג הודעת דגיאה
    const btnRegister = () => {
        if (flag_switch) {
            if (password === re_password) {
                register_LocalStorage()
            }
            else {
                alert("The passwords do not match")
                return
            }
        }
        else {
            alert("You must agree to the terms of use")
            return
        }
    }


    return (
        <div>
            {/* קריאה לקומפוננטה המכילה את הנב באר*/}
            <Navbar />
            <h1>Registration</h1><br />

            {/*  בכול שינוי של שדה בטופס ההרשמה אנו מבצעים השמה לסטיט המתאים את התוכן שהמשתמש הזין */}
            Name:  <input type="text" onChange={(e) => setName(e.target.value)} /><br /><br />
            Email:  <input type="email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
            Password:  <input type="password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
            RE-Password:<input type="password" onChange={(e) => setRePassword(e.target.value)} /><br /><br />
            Phone Number:  <input type="numbres" onChange={(e) => setPhone_Number(e.target.value)} /><br /><br />


            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                subheader={<ListSubheader></ListSubheader>}>
                <ListItem>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" primary="I agree to the terms of service" />
                    {/* בכול לחיצה על המתג הערך של המשתנה הבולאני המייצ את הסכמת המשתמש לתנאי השירות משתנה להפך ממה שהוא היה לפני הלחיצה */}
                    {/*  אם הוא היה שקר לפני הלחיצה עכשיו הוא אמת*/}
                    <Switch onClick={() => setSwitch(!flag_switch)}
                        edge="end"
                    />
                </ListItem>
            </List><br />
            <Stack direction="row" spacing={2} marginLeft={6}>
                {/* בלחיצה על כפתור המחיקה אנו מרעננים את הדף הנוכחי ונוצר התחושה שניחקו הרשומות */}
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => window.location.reload()}>
                    Delete
                </Button>
                {/* באת לחיצה על כפתור השמירה אנו מפעילים את הפונקציה אשר מוסיפה את המשתמש למערך המשתמשים */}
                <Button variant="contained" endIcon={<SendIcon />} onClick={btnRegister}>
                    Register
                </Button>
            </Stack>
        </div>
    )
}
