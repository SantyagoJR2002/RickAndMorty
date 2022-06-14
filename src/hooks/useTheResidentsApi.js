import axios from "axios"
import { useEffect, useState } from "react"

const useTheResidentsApi = resident => {
    const [Resident, setResidents] = useState()
    useEffect(() => {
       axios.get(resident)
       .then(res => setResidents(res.data))
       .catch(err => console.log(err))

    }, [])
} 
export default useTheResidentsApi
