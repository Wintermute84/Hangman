import clsx from "clsx"

export default function Status(props){
  const verdict = clsx(clsx({
    lost: props.lost,
    won: props.won,
  }))

  return(
    <section className={clsx("status-container",verdict)}>
      <p aria-label={props.won ? "You Win!" : "You Lose!"}>
        {props.won ? "You Win!" : "You Lose!"}
      </p>
    </section>
  )
}