import { useState, useEffect } from 'react';

const useTheme = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [checked, setChecked] = useState(false);

    const changeMediaQuery = (mq) => {
        setDarkMode(mq.matches);
        setChecked(mq.matches);
    }

    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme:dark)')
        mq.addListener(changeMediaQuery);
        setDarkMode(mq.matches)
        setChecked(mq.matches)
    },[])

    return{
        darkMode,
        checked,
        setDarkMode,
        setChecked
    }
}

export default useTheme
