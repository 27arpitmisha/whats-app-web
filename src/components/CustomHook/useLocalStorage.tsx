
import { useEffect, useState } from 'react'

export default function useLocalStorage(key : string) {
    const PREFIX_KEY = 'whats-app-' + key;

    const [id, setId] = useState(()=>{
        const savedID = localStorage.getItem(PREFIX_KEY);

        return savedID ? JSON.parse(savedID) : '' ;
    });

    const setValue = (id : string) => {
        localStorage.setItem(PREFIX_KEY , JSON.stringify(id));
        setId(id);
    }

    return [id, setValue]
}
