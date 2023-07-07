function Card({ titulo, children }) {
  return (
    <div>
      <h3>{titulo}</h3>
      {children}
    </div>
  )
}

export default Card;
