import React, {useState} from 'react'
import './App.css'
const App = () => {
	  const [result, setResult]= useState("");
	  const handleClick=(e)=>{
	        setResult(result.concat(e.target.name))
	    }
	  const clear= ()=>{
	        setResult("")
	  }
	  const backspace=()=>{
	        setResult(result.slice(0,-1))
	  }
	  const calculate=()=>{
	    try{
	          setResult(eval(result).toString())
	        }
	        catch(err){
	            setResult("Error")
	        }
	        
	    }
	  return(
	    <>
	        <h1>Calculator <span className='spa'>using</span><span> React</span></h1>
	        <div className="container">
	            <form action="">
	                <input type="text" value={result} />
	            </form>
	            <div className="keypad">
	                <button className="highlight" onClick={clear} id="clear">Clear</button>
	                <button className="highlight" onClick={backspace} id="backspace">C</button>
	                <button className="highlight" name="/" onClick={handleClick}>/</button>
	
	                <button name="7" onClick={handleClick} className="btn">7</button>
	                <button name="8" onClick={handleClick} className="btn">8</button>
	                <button name="9" onClick={handleClick} className="btn">9</button>
	                <button className="highlight" name="*" onClick={handleClick}>x</button>
	
	                <button name="4" onClick={handleClick} className="btn">4</button>
	                <button name="5" onClick={handleClick} className="btn">5</button>
	                <button name="6" onClick={handleClick} className="btn">6</button>
	                <button className="highlight" name="-" onClick={handleClick}>-</button>
	
	                <button name="1" onClick={handleClick} className="btn">1</button>
	                <button name="2" onClick={handleClick} className="btn">2</button>
	                <button name="3" onClick={handleClick} className="btn">3</button>
	                <button className="highlight" name="+" onClick={handleClick}>+</button>
	
	                <button name="%" onClick={handleClick} className="btn">%</button>
	                <button name="." onClick={handleClick} className="btn">.</button>
	                <button name="0" onClick={handleClick} className="btn">0</button>
	                <button className="highlight" id="result" onClick={calculate}>=</button>
	                
	            </div>
	        </div>
	    </>
	  )
	}
	
	export default App
