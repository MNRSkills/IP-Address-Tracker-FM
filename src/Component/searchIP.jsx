import React from 'react'

function SearchIP(props) {
  console.log(props.inputIP)
  return (
    <div>
      <input type="text" onChange={(d) => { props.inputIP(d) }} />
    </div>
    // <form action="submit">
    //   <input type="text" placeholder="Enter IP Address"  />
      
    // </form>
  )
}

export default SearchIP