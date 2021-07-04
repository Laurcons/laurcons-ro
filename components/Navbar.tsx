import classnames from "classnames";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const pages = [
    {
        name: "home",
        displayName: "Home",
        href: "/",
        pathnameMatch: /^\/$/
    },
    {
        name: "projects",
        displayName: "Projects",
        href: "/projects",
        pathnameMatch: /^\/projects/ 
    },
    {
        name: "yt-channel",
        displayName: "YouTube",
        href: "https://laurcons.ro/yt"
    }
];

export default function Navbar() {
    const route = useRouter();
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top" id="navbar">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">Laurcons Personal</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-coll">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-coll">
                    <ul className="navbar-nav">
                        {pages.map(page => (
                            <li className="nav-item" key={page.name}>
                                <Link href={page.href}>
                                    <a className={classnames({
                                        "nav-link": true,
                                        "active": page.pathnameMatch ? page.pathnameMatch.test(route.pathname) : false
                                    })}>
                                        {page.displayName}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}