import {useState,useContext,createContext}from 'react'

 const CardContext = createContext();

const CardProvider = props => {
    const [selectedCard,setSelectedCard] = useState([]);

    return(
        <CardContext.Provider value={{selectedCard,setSelectedCard}} >
            {props.children}
        </CardContext.Provider>
    )
}


export {CardProvider,CardContext}