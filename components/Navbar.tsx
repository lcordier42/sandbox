import { css } from "@emotion/core";
import Link from "next/link";
import React, { useRef, useState } from "react";

import { useOutsideClick } from "../hooks/useOutsideClick";

const navStyle = css`
    a {
        margin: 0 1rem;
        padding: 1.5rem 1rem;
        text-align: center;
        vertical-align: middle;

        :hover {
            background-color: white;
            color: #13181b;
        }
    }

    .nav-items {
        margin-left: auto;
    }

    .burger {
        display: none;
    }

    .burger-icon {
        cursor: pointer;
        display: none;
        height: 30px;
        margin: 0 1rem 0 auto;
        position: relative;
        transform: rotate(0deg);
        transition: 0.5s ease-in-out;
        width: 30px;

        span {
            display: block;
            position: absolute;
            height: 3px;
            width: 100%;
            background: #2f3c43;
            border-radius: 5px;
            opacity: 1;
            left: 0;
            transform: rotate(0deg);
            transition: 0.25s ease-in-out;
        }

        span:nth-child(1) {
            top: 7px;
            transform-origin: left center;
        }

        span:nth-child(2) {
            top: 15px;
            transform-origin: left center;
        }

        span:nth-child(3) {
            top: 23px;
            transform-origin: left center;
        }

        &.open span:nth-child(1) {
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
            top: 4px;
            left: 9px;
        }

        &.open span:nth-child(2) {
            width: 0%;
            opacity: 0;
        }

        &.open span:nth-child(3) {
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
            top: 24px;
            left: 8px;
        }
    }

    .custom-navbar {
        align-items: center;
        background: #2f3c43;
        display: flex;
        height: 4rem;
        overflow: hidden;
        position: sticky;
        top: 0;
        z-index: 9999;
    }

    .home {
        float: left;
    }

    @media only screen and (max-width: 750px) {
        .burger {
            background: #2f3c43;
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            width: 200px;
            transform: translateX(200px);
            transition-duration: 0.3s;

            a {
                display: block;
                text-align: center;
                margin: 2rem;
            }
            &.open {
                transform: translateX(0px);
                transition-duration: 0.3s;
            }
        }

        .burger-icon {
            display: block;
            &.open {
                transform: translateX(-200px);
                transition-duration: 0.3s;
            }
            transition-duration: 0.3s;
        }

        .content {
            &.open {
                transform: translateX(-200px);
                transition-duration: 0.3s;
            }
            transition-duration: 0.3s;
        }

        .nav-items {
            display: none;
        }
    }
`;

export const Navbar: React.FC = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useRef(null);
    const closeButtonRef = useRef(null);
    useOutsideClick(menuRef, closeButtonRef, (event) => {
        event.stopPropagation();
        setIsOpen(false);
    });

    return (
        <div css={[navStyle]}>
            <div className="custom-navbar">
                <div className="home">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </div>
                <div
                    className={["burger-icon", isOpen ? "open" : ""].join(" ")}
                    onClick={(event) => {
                        event.stopPropagation();
                        setIsOpen(!isOpen);
                    }}
                    ref={closeButtonRef}
                >
                    <span />
                    <span />
                    <span />
                </div>
                <div className="nav-items">
                    <Link href="/page3">
                        <a>Page 3</a>
                    </Link>
                    <Link href="/page2">
                        <a>Grid</a>
                    </Link>
                    <Link href="/page1">
                        <a>Page 1</a>
                    </Link>
                </div>
            </div>
            <div className={["content", isOpen ? "open" : ""].join(" ")}>
                {children}
            </div>
            <div
                className={["burger", isOpen ? "open" : ""].join(" ")}
                ref={menuRef}
            >
                <Link href="/page1">
                    <a>Page 1</a>
                </Link>
                <Link href="/page2">
                    <a>Page 2</a>
                </Link>
                <Link href="/page3">
                    <a>Page 3</a>
                </Link>
            </div>
        </div>
    );
};
