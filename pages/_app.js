import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css'
// own css files here
//import "../css/customcss.css";

const MyApp = ({ Component, pageProps }) => {
    const [isMounted, setIsMounted] = useState(false)
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        var themeLocal = localStorage.getItem("theme")
        if(themeLocal !== null ){
            setTheme(themeLocal)
        }else{
            localStorage.setItem("theme", "light")
        }
        setIsMounted(true)
    }, [])
    
    const toggleThemeState = ()=>{
        if(theme === "dark"){
            setTheme("light");
            localStorage.setItem("theme", "light")
        }else{
            setTheme("dark")
            localStorage.setItem("theme", "dark")
        }
    }

    return (
        <>
        {isMounted && <Component {...pageProps} theme={theme} toggleTheme={toggleThemeState} />}
        </>
    )
}

export default MyApp