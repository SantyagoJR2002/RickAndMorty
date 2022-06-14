import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './Location.css'

const Residents = ({resident})=> {
    const [Residents, setResidents] = useState()
    useEffect(() => {
       axios.get(resident)
       .then(res => setResidents(res.data))
       .catch(err => console.log(err))

    }, [])
    return(
        <article>
            <div className='separator'>
            <img src={Residents?.image}/>
            </div>
           
            <h2>{Residents?.name}</h2>
            <p><span>Status: </span>{Residents?.status}</p>
            <p><span>Specie: </span>{Residents?.species}</p>
            <p><span>type: </span>{Residents?.type}</p>
            <p><span>Origin: </span>{Residents?.origin.name}</p>
        <p><span>Episodes:</span> {Residents?.episode.length}</p>
      
        </article>
    )
}
export default Residents