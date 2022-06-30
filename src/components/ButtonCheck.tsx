import { useState} from 'react'
import style from './ButtonCheck.module.css'

interface activeProps{
    activeCheckBox: () => void;
    activeCheckBoxNeg: () => void;
    booleana: boolean

}

export function ButtonCheck({ activeCheckBox, activeCheckBoxNeg , booleana }: activeProps){
    

    //const [booleana, setBooleana]= useState(false);
   
    
    const [newBooleana, setNewBooleana] = useState(false);
  
    //console.log(concluida);
    function activeCheckBox2(){
        if(newBooleana ===false){
            setNewBooleana(true)
            activeCheckBox()
            }else {
              setNewBooleana(false)
              activeCheckBoxNeg();
            }
      }
    
    
     return(
    <>
    <button onClick={activeCheckBox2} 
        className={ newBooleana? style.ButtonStyleTrue: style.ButtonStyleFalse  } >   
    </button>
    
    </>
    )
}









