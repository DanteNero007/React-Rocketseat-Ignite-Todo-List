
import { FiTrash2 } from "react-icons/fi"
import styles from './BoxStyle.module.css' 
import { ButtonCheck } from "./ButtonCheck";

interface ContentProps{
  key: number;
  content: string;
  funcProp: (list: string) => void;
  activeCheckBox: () => void;
  activeCheckBoxNeg: () => void;
  boole: boolean;
 
}


export function BoxList({content, funcProp, activeCheckBox, activeCheckBoxNeg, boole}:ContentProps ){
    
  function funcDelete(){
    funcProp(content)
  }

  //function chekedBox(event:InputHTMLAttributes<HTMLInputElement>){
    //console.log(event.checked)
//}


    return(
<>
  <div className={styles.listaNova}>

    <ButtonCheck 
    activeCheckBox={activeCheckBox} 
    activeCheckBoxNeg={activeCheckBoxNeg} 
    booleana ={boole} />

    <p style={{ color:'#fff', backgroundColor: 'transparent'}}>
      {content}
     </p>

    <button
      onClick={funcDelete} 
      className={styles.deleteTrash}>
    <FiTrash2 
        size={25}
        color='#ff0000' 
        style={{backgroundColor: 'transparent'}}/>
    </button>  
    
   </div>
  </>
)
}