import Link from 'next/link'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/test">
              Test
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    )
}