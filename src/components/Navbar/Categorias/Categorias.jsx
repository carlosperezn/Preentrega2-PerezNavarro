import { Link } from "react-router-dom";
export const Categorias = () => {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <button className="btn btn-dark">Categorias</button>
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link className="dropdown-item" to={"/category/1"}>
            Consolas Dj
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to={"/category/2"}>
            Diademas profesionales
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to={"/category/3"}>
            USB profesionales
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to={"/category/4"}>
            Equipos especiales
          </Link>
        </li>
      </ul>
    </li>
  );
};
