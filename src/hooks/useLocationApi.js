import axios from "axios"
import { useEffect, useState } from "react"

const useLocationApi = searching => {

    const [Location, setLocation] = useState()

    useEffect(() => {

        let locationN
        if (searching) {
        locationN = searching    
        }else{
locationN = Math.ceil(Math.random()*126)
        }
           const URL =  `https://rickandmortyapi.com/api/location/${locationN}`
   
           axios.get(URL)
        .then(res => setLocation(res.data))
        .catch(err => console.log(err))
    }, [searching])
    return Location
}
export default useLocationApi