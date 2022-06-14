import React, {useEffect, useState} from 'react';
import InfoLocation from './components/InfoLocation';
import axios from 'axios';
import Resident from './components/TheResidents';
import useLocationApi from './hooks/useLocationApi';
import Search from './components/Search'
const RickAndMorty = () => {
const [search, setSearch] = useState()
    const Location = useLocationApi(search)
  
return(
    <div className="principal">
        <Search  setSearch={ setSearch}/>
        <div>
            {
                Location?.residents.map(resident =>
                    <Resident 
                    resident={resident}
                    key={resident}/> )
            }
        </div>
      
        <InfoLocation Location={Location}/>
    </div>
)
}
export default RickAndMorty


