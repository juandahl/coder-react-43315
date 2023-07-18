function withTitle(ComponenteHijo) {
  function withTitle() {
    return <div>
      <h1>Este es el titulo</h1>
      <ComponenteHijo />
    </div>
  }

  return withTitle;
}

export default withTitle;