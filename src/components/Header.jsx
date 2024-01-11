import Logo from "../images/logo.png";

export default function Header() {
  return (
    <>
      <header>
        <div className="container-header">
          <img src={Logo} alt="Logo" className="logo" />
          <div className="navbar-header">
            <a className="link-header" href="/">
              Accueil
            </a>
            <a className="link-header" href="/profile">
              Profil
            </a>
            <a className="link-header" href="/settings">
              Réglage
            </a>
            <a className="link-header" href="/community">
              Communauté
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
