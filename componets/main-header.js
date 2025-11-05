import Link from "next/link";

import logoImg from "@/assets/logo.png";

export default function MainHeder() {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="A Plate with food on it"/>
        In the Flavour
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies community</Link>
          </li>
        </ul>
      </nav>
    </header>

  );
}
