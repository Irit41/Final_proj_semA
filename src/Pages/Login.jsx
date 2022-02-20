import React, { useState } from 'react'
import Navbar from './Navbar'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    //  יצירת סטיטים אשר יתפסו את הקלט של המשתמש וינווט לעמוד הבא
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    //  הפונקציה הפונקציה ניגשת למערך המתשמשים בלוקאל סטוראג ובודקת האם קיים אצלה משתמש עם המייל והסיסמה שהזין המשתמש
    //  אם לא הפונקציה מציגה הודעת שגיאה
    //  אם כן אנו שומרים אותו בסיסן סטוארג וחוזרים לעמוד הבית
    //  לעבוד על הסינון קלט מהמשתמש
    const btnLogin = () => {
        let find_user
        if (localStorage.users !== undefined) {
            let users = JSON.parse(localStorage.users);

            find_user = users.filter((per) => per.email === email && per.password === password)

            if (find_user.length === 0) {
                alert("The email or password is incorrect")
                return
            }
        }
        else {
            alert("The email or password is incorrect")
            return
        }
        sessionStorage.setItem("curent_user", JSON.stringify(find_user))
        navigate('/')
    }


    return (
        <div>
            {/* קריאה לקומפוננטה המכילה את הנב באר*/}
            <Navbar />
            <h1>Login</h1><br /><br />
            {/*  בכול שינוי של שדה בטופס ההרשמה אנו מבצעים השמה לסטיט המתאים את התוכן שהמשתמש הזין */}
            Email:  <input type="email" onChange={(e) => setEmail(e.target.value)} /><br /><br /><br />
            Pssword:  <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <br /><br /><br /><br />
            <Stack direction="row" spacing={2} marginLeft={6}>

                {/* באת לחיצה על כפתור השמירה אנו מפעילים את הפונקציה אשר מוסיפה את המשתמש לסיסן סטוראג */}
                <Button variant="contained" endIcon={<SendIcon />} onClick={btnLogin}>
                    Login
                </Button>
            </Stack>
        </div>
    )
}
