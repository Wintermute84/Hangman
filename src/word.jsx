export default function Word({guesses,letter,status}){
  if(status){
    return <span className="letter unguessed" aria-label={letter}>{letter.toUpperCase()}</span>
  } 
 else return (
    <span className="letter">
      {guesses.includes(letter) ? letter.toUpperCase() : ""}
    </span>
  )
}