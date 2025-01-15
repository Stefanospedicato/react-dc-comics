const Header = (props) => {
  const { menu } = props
  return (
    <header>
      <figure className="my-3">
        <img src="../public/img/dc-logo.png" alt="Logo" />
      </figure>
      <ul className="my-3">
        {menu.map((item, index) => (
          <li key={`menu-${index}`}><a href="" className={item === 'COMICS' ? 'active' : ''}>{item}</a></li>
        ))}
      </ul>
    </header>
  )
}

export default Header