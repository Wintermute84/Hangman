import clsx from "clsx"

export default function Alphabet(props){
  const alph = "abcdefghijklmnopqrstuvwxyz"
  let letters = alph.split("")
  const alphabets = letters.map(letter =>{
    let style=undefined
    if(props.guess.includes(letter)){
      style = clsx('guessed',{'correct':props.letters.includes(letter)})
    }  
    return <button key={letter} aria-label={letter} className={props.disabled ? undefined : style} onClick={()=>{
        props.toggle(letter)}
      }>
        {letter.toUpperCase()}
      </button>  
     }) 
  return( 
    <section className="alphabets-container">
      {alphabets}
    </section>
  )}