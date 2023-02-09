import { useState, useEffect } from "react"


export default function Message() {
    
    const [chiste, setChiste] = useState(null) 

    const getChiste = async() => { 
        const res = await fetch('https://icanhazdadjoke.com',{ headers: { 
            'Accept': 'application/json'
        } 
    }); 
        return res.json() 
    } 

    useEffect(() => { 
        getChiste().then(data => setChiste(data)); 
    }, []); 


    // Llamar de nuevo la Api 
    
        const Probar = () => { 
            fetch('https://icanhazdadjoke.com',{ headers: { 
                'Accept': 'application/json'
            } 
        }) 
            .then(res => res.json()) 
            .then(data => setChiste(data))
        }


    return ( 
        <> 
            <p>{chiste? chiste.joke : "Mensaje de Error"}</p> 
            <button onClick={Probar}>Next</button>
        </>
    )
} 


