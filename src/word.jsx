export default function Word({guesses,letter,status,lost}){
  if(status && lost){
    return <span className="letter unguessed" aria-label={letter}>{letter.toUpperCase()}</span>
  } 
 else return (
    <span className="letter">
      {guesses.includes(letter) ? letter.toUpperCase() : ""}
    </span>
  )
}