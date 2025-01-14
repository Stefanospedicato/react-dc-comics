const menu = ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FAN', 'NEWS', 'SHOP']

const Header = () => {
  return (
    <header>
      <figure className="my-3">
        <img src="../public/img/dc-logo.png" alt="Logo" />
      </figure>
      <ul className="my-3">
        {menu.map(item => (
          <li><a href="" className={item === 'COMICS' ? 'active' : ''}>{item}</a></li>
        ))}
      </ul>
    </header>
  )
}

export default Header