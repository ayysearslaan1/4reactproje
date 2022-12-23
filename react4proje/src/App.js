import{forwardRef, useRef} from "react"

const Input =forwardRef((props,ref)=> {
  return<input ref={ref} type="text" {...props}/>

})

function App() {
  
  const inputRef= useRef()
  const focusInput =() => {
    inputRef.current.focus()
  }
  return(
    <>
    <h1>useRef()-useForward()</h1>
    <input type="text" ref={inputRef} />
    <button onClick={focusInput}>focusla</button>
    </> 

  )
}
  

export default App;
