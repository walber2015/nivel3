import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand text-light">
          Home
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/LivroLista" className="nav-link text-light">
                LivroLista
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroDados" className="nav-link text-light">
               LivroDados
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
