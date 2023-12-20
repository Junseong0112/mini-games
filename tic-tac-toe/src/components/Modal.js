function Modal () {
  return(
    <aside>
      <header>Choose Your Name</header>
      <form>
        <div className="form-control">
          <label htmlFor="playername">Player Name</label>
          <input type="text" name="playername" id="playername" required />
        </div>
        <p id="config-errors"></p>
        <div>
          <button type="reset" className="btn btn-alt" id="cancle-config-btn">Cancel</button>
          <button type="submit" className="btn">Confirm</button>
        </div>
      </form>
    </aside>
  )
}

export default Modal;