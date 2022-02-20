import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Menu from './Menu';

function AppBarLabel() {

    //  סטייט המייצג ערך בולאני
    const [flag, setFlag] = useState(false)


    //  אם בסטטי מייצ אמת החזר את הקומפוננטה הבא 
    //  אחרת הצג את השניה
    if (flag === false) {
        return (
            <Toolbar>
                {/* בכול לחיצה על האיקון המצאים שנה את הערך הבולאני של הסטיט בהתאם */}
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => setFlag(!flag)}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                </Typography>
                <ApartmentIcon fontSize="large" sx={{ color: 'white' }} />
            </Toolbar>
        );
    }
    else {
        return (
            <>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => setFlag(!flag)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <ApartmentIcon fontSize="large" sx={{ color: 'white' }} />
                </Toolbar>
                {/* קראיה לקומפוננטה "תפריט" ך */}
                <Menu />
            </>
        );
    }
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

export default function Navbar() {
    return (
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static" color="primary">
                    {AppBarLabel('default')}
                </AppBar>
            </ThemeProvider>
            <img src="" alt="" srcset="" />
        </Stack>
    );
}
