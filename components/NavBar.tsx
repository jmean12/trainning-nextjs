import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  const currentUrl:string = router.pathname;

    return (
        <nav>
          <Link href='/'>
            <a className={ currentUrl === '/' ? 'active' : '' }>Home</a>
          </Link>
          <Link href='/about'>
            <a className={ currentUrl === '/about' ? 'active' : '' }>About</a>
          </Link>

          <style jsx>
            {`
              nav {
                  display: flex;
                  background-color: tomato;
              }
              a {
                 padding: 1rem;
                 text-decoration: none;
                 color: #FFFFFF;
              }
              .active {
                color: yellow;
              }
            `}
          </style>
        </nav>
    )
}

