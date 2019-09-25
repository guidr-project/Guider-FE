// import React, {useState, useEffect, createContext } from 'react'
// import axios from axios

// export const GuidrContext = createContext()

// export const GuidrProvider = props => {
//     const [state, setState] = useState([])

//     useEffect(() => {
//         axios.get() // <---------- API 
//             .then(res => console.log(res))
//             .catch(err => console.log(err.response))
//     }, [])

//     return (
//         <GuidrContext.Provider value={[state, setState]}>
//             {props.children}
//         </GuidrContext.Provider>
//     )
// }


import { createContext } from 'react';

export const JourneyContext = createContext();