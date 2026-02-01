
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          PS COPIERS
        </div>

        <nav className="header__nav">
          <a href="#">Sobre nosotros</a>
          <a href="#">Servicios</a>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

