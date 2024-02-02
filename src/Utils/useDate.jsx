import { useEffect, useState } from "react";

// Custom React hook for fetching and updating current date and time
export const useDate = () => {
    // Default locale is set to 'en'
    const locale = 'en';

    // State to hold the current date and time
    const [currentDate, setCurrentDate] = useState(new Date());

    // Effect to update the date and time every minute
    useEffect(() => {
        // Set up an interval to update the date and time every 60 seconds (1 minute)
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 60 * 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(timer);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount

    // Extract day, date, month, and time information from the current date
    const day = currentDate.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${currentDate.getDate()}, ${currentDate.toLocaleDateString(locale, { month: 'long' })}`;
    const time = currentDate.toLocaleDateString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

    // Return an object containing the formatted date and time
    return {
        date,
        time
    };
};
