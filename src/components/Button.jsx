function Button({ children, type = 'button' }) {
  return (
    <button className="button" type={type}>
      {children}
    </button>
  )
}

export default Button