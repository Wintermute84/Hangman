import heartfill from "./assets/heart-filled.png"
import heartunfill from "./assets/heart-unfilled.png"
import { nanoid } from "nanoid"

export default function HeartStatus(props){
  let wrongGuesslength = props.wrongGuess.length
  let heartArray = props.wrongGuess.map((item,index) => {
    if(index >= 7){
      return undefined
    }
    else{
      return <img key={nanoid()} src={heartunfill} />
    }
  })

  for(let i=0;i<8-wrongGuesslength;i+=1){
    heartArray.unshift(<img src={heartfill} key={nanoid()} />)
  }

  return (
    <section className="heart-status-container">
      {heartArray}
    </section>
  )
}