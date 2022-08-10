import { InputSearch } from "./InputSearch";
import "../styles/header.scss";

export function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <p>LOGO</p>
      </div>
      <div className="header__content">
        <div>
          <ul>
            <li>Topic 1</li>
            <li>Topic 2</li>
            <li>Topic 3</li>
            <li>Topic 4</li>
          </ul>
        </div>
        <InputSearch />
      </div>
    </header>
  );
}
