import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <nav className="navbar row justify-content-center sticky-top">
            <div className="container">
                <div className="col-3 p-0">
                    <div className="navbar-brand">
                        <Link href={"/"}>
                            <a>
                                <Image
                                    width={145}
                                    height={33}
                                    src="/images/bookit_logo.png"
                                    alt="BookIT"
                                />
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="col-3 mt-3 mt-md-0 text-center">
                    <a className="btn btn-danger px-4 text-white login-header-btn float-right">
                        Login
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Header;
