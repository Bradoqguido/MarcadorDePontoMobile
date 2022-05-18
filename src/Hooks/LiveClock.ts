import { useCallback, useState } from 'react';

export const useLiveClock = (clockId: any) => {
    const [dtaClock, setDtaClock] = useState(new Date(Date.now()));
    
    clearInterval(clockId);
    clockId = setInterval(() => setDtaClock(new Date(Date.now())), 1000)

    return [dtaClock, clockId];
}