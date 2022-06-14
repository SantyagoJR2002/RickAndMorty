import React, { useState} from "react"
import './search.css'
const Search =  ({setSearch}) => {

   
   const  searching = e => {
e.preventDefault()
setSearch(e.target.children[0].value)
   }
   
    return(
       <div className="u">
        <form onSubmit={searching}>
        <input type="text"/>
<button>Search</button>
        </form>
</div>
    )
}
export default Search
