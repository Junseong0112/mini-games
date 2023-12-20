function Configuration () {
  return (
    <section>
      <ol>
        <li>
          <article id="player-1-data">
            <h2>Player 1</h2>
            <h3>PLAYER NAME</h3>
            <p className="player-symbol">X</p>
            <button className="btn btn-alt" id="edit-player-1-btn" data-playerid="1">Edit</button>
          </article>
        </li>
        <li>
          <article id="player-2-data">
            <h2>Player 2</h2>
            <h3>PLAYER NAME</h3>
            <p className="player-symbol">O</p>
            <button className="btn btn-alt" id="edit-player-2-btn" data-playerid="2">Edit</button>
          </article>
        </li>
      </ol>
      <button class="btn" id="start-game-btn">Start New Game</button>
    </section>
  )
};

export default Configuration;