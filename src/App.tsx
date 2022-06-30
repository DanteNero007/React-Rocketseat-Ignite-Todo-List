import { ChangeEvent, useState} from 'react';
import styles from './app.module.css'
import Logo  from './assets/logo.svg'
import {AiOutlineFileDone, AiOutlinePlusCircle} from 'react-icons/ai';
import {BoxList} from './components/BoxList'

interface ListaProps{
  id: number;
  comment: string;
  ative: boolean;
}


function App() {

  const [booleana, setBooleana]= useState(false);


 const [lista, setLista] = useState<ListaProps[]>([ 

]); 
const [newLista, setNewLista] = useState('')
const [tarefaCriada, setTarefaCriada] = useState(lista.length)
const [concluida, setConcluida] = useState(0); 

  function savedNewInformation(event:ChangeEvent<HTMLInputElement>){
    setNewLista(event.target.value)
  }
  function savedInfomation(){
    setLista([...lista, {id: lista.length, comment: newLista, ative:booleana}] )
    setTarefaCriada(lista.length +1 )
  }
  function deleteInformation(idDelete: string){
     const deleteNew = lista.filter((list) =>{
      return list.comment !== idDelete 
    })
      setLista(deleteNew)
      setTarefaCriada(lista.length -1);
      if(testando === 1){
      activeBoxNeg();
      }else{
        return
      }
  }
  
  const [testando, setTestando] = useState(0)
  
  function activeBoxNeg(){
    console.log('estou subtraindo')
    setTestando(testando - 1)    
  }


  function activeBox(){
    console.log('estou somando')
    setTestando(testando + 1);
}

    


  return (
   <>
   <header className={styles.header}>
    <img src={Logo} alt="" />
   </header>
   
   <main className={styles.divmain} >
   
   <input
   style={{color: '#fff'}}
   onChange={savedNewInformation}
   className={styles.input} 
   placeholder="Digite sua proxima tarefa"
   type="text" 
   />

   <button 
    onClick={savedInfomation}
    className={styles.botao} >
    <p>Criar</p> 
    <AiOutlinePlusCircle color= '#fff' style={{borderRadius: '100%', backgroundColor: '#fff00000'}} /> 
    </button>

  </main>
  
  <section className={styles.lista}>
  <p>Tarefas criadas {tarefaCriada}</p>
    <span>Concluidas {testando} de {tarefaCriada}</span>
  </section>
  
  <hr />
  
  { tarefaCriada === 0 ?
  <>
  <footer>
  <AiOutlineFileDone color={'var(--gray-300)'} size={56}/>
  <span>Voce ainda não tem tarefas cadastradas</span>
  <p>Crie tarefas e organize seus itens a fazer</p>
  </footer>
  </>
   :
  lista.map(list =>{
    return(
      <BoxList                    
        funcProp={deleteInformation} 
        content={list.comment}  
        key={list.id} 
        activeCheckBox = {activeBox}
        activeCheckBoxNeg = {activeBoxNeg}
        
        boole ={booleana}
        />
    )
  })
  }
   </>
  )
}

export default App
