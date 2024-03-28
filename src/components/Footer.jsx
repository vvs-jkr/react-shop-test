function Footer() {
  return (
    <footer className="foot">
      <div className="foot-container">
        <div className="logo">
          <a href="#" className="logo-link">
            QPICK
          </a>
        </div>
        <ul className="menu foot-menu">
          <li>
            <a href="#">Избранное</a>
          </li>
          <li>
            <a href="#">Корзина</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
        <div className="foot-langs">
          <a className="footer-link" href="#">
            Условия сервиса
          </a>
          <ul className="menu menu-horizontal">
            <li>
              <a className="rounded-xl" href="#">
                <img src="./image/RU.png" alt="RU" />
              </a>
            </li>
            <li className="text-accent">
              <a className="rounded-xl" href="#">
                Рус
              </a>
            </li>
            <li>
              <a className="rounded-xl" href="#">
                Eng
              </a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <a className="socials-link" href="#vk">
            <img src="./image/VK.svg" alt="VK" />
          </a>
          <a className="socials-link" href="#tg">
            <img src="./image/Telegram.svg" alt="Telegram" />
          </a>
          <a className="socials-link" href="#wa">
            <img src="./image/Whatsapp.svg" alt="Whatsapp" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
