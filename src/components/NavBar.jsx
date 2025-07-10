"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  //const sessionDetails = useSession();
  //console.log(sessionDetails);
  const { data: session, status } = useSession();
  if (status === "loading") return null; // or a loading spinner

  console.log(status);
  const navMenu = () => {
    return (
      <>
        <li>
          <Link href={"/"}>Home</Link>
        </li>

        <li>
          <Link href={"/"}>About</Link>
        </li>

        <li>
          <Link href={"/"}>Services</Link>
        </li>

        <li>
          <Link href={"/"}>Blog</Link>
        </li>

        <li>
          <Link href={"/"}>Contact</Link>
        </li>
        <li>
          <Link href={"/myBooking"}>Booking</Link>
        </li>
      </>
    );
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navMenu()}
          </ul>
        </div>
        <Link href={"/"} className="text-xl">
          <Image alt="nav" src={"/assets/logo.svg"} width={107} height={87} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu()}</ul>
      </div>
      <div className="navbar-end">
        <ul className=" menu menu-horizontal text-primary uppercase font-semibold">
          {status === "authenticated" ? (
            <>
              <li>
                <span>{session?.user?.name || session?.user?.email}</span>
              </li>
              <li>
                <span>
                  <Image src={session?.user?.image || "https://i.ibb.co/XZvmBtpv/Default-Profile-Picture-PNG-Free-Download.png"} width={30} height={30}  alt="google-image"/>
                </span>
              </li>
              <li>
                <button onClick={() => signOut()}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/signup">SignUp</Link>
              </li>
            </>
          )}
        </ul>
        <a className="btn text-primary border-1 border-primary hover:border-none">
          Appointment
        </a>
      </div>
    </div>
  );
};

export default NavBar;
