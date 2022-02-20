import React from 'react'
import Booking from './Booking';
import Payment from './Payment';
import Registration from './Registration';
import SaveRoom from './SaveRoom';
import Homepage from './Homepage';
import Login from './Login'
import {
    BrowserRouter, 
    Routes,
    Route
} from "react-router-dom";


export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Payment" element={<Payment/>}/>
                    <Route path="/Registration" element={<Registration/>}/>
                    <Route path="/SaveRoom" element={<SaveRoom/>}/>
                    <Route path="/Booking" element={<Booking/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
