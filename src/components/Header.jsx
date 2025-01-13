const Header = () => {
  return (
    <header>
      <figure className="my-3">
        <img src="../public/img/dc-logo.png" alt="Logo" />
      </figure>
      <ul className="my-3">
        <li><a href="#">CHARACTERS</a></li>
        <li className="active"><a className="active" href="#">COMICS</a></li>
        <li><a href="#">MOVIES</a></li>
        <li><a href="#">TV</a></li>
        <li><a href="#">GAMES</a></li>
        <li><a href="#">COLLECTIBLES</a></li>
        <li><a href="#">VIDEOS</a></li>
        <li><a href="#">FAN</a></li>
        <li><a href="#">NEWS</a></li>
        <li><a href="#">SHOP</a></li>
      </ul>
    </header>
  )
}

export default Header