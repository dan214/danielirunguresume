"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Nav, NavItem, Navbar, NavbarBrand } from "reactstrap";

const NavBar = () => {
    const pathname = usePathname();
    console.log("pathname");
    console.log(pathname);

    return (
        <div className="navbar-top">
            <Navbar>
                <NavbarBrand href="/">Daniel Irungu</NavbarBrand>
                <Nav className="justify-content-right topbar static-top">
                    <NavItem>
                        <Link className={pathname === '/' ? 'active' : ''}
                            href="/"
                        >
                            Home
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className={pathname === '/about' ? 'active' : ''} href="/about">
                            About
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className={pathname === '/projects' ? 'active' : ''} href="/projects"
                        >
                            Projects
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className={pathname === '/experience' ? 'active' : ''} href="/experience"
                        >
                            Experience
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className={pathname === '/education' ? 'active' : ''} href="/education"
                        >
                            Education
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className={pathname === '/contactme' ? 'active' : ''} href="/contactme"
                        >
                            Contact me
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar>

        </div>
    );
};

export default NavBar;