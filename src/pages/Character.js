function Character() {
  const view = `
    <div className="character__inner">
      <article className="character__card">
        <img src="image" alt="name"/>
        <h2>Character Name</h2>
      </article>
      <article className="character__card">
        <h3>Episodes:</h3>
        <h3>Status:</h3>
        <h3>Species:</h3>
        <h3>Gender</h3>
        <h3>Origin:</h3>
        <h3>Last location:</h3>
      </article>
    </div>
  `

  return view
}

export default Character
