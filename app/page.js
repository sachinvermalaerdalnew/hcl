"use client";
import { useState } from "react";
import Link from 'next/link';
import "../styles/home.css";
import BoxContent from "./components/BoxContent";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <header className="hero">
        <div className="headTitle">
          <h1> Bayer Healthcare</h1>
        </div>

        <nav className="menu">
          <div className="menu-header">
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
              ☰
            </button>
          </div>
          <ul className={`menu-list ${isOpen ? "show" : ""}`}>
            <li>Home</li>
            <li>Health Topic</li>
            <li>Resource</li>
            <li>About Us</li>
            <li>Contact</li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
          </ul>
        </nav>
      </header>

      <div className="titleTopic">
        <h3 className="contentTitle">Feature Health Topics</h3>
      </div>
      <main className="content">
        <BoxContent
          title="COVID-19"
          content="Latest information on Covid-19, including symptoms, prevention, and
            vaccination."
        />
        <BoxContent
          title="COVID-19"
          content="Latest information on Covid-19, including symptoms, prevention, and
            vaccination."
        />
        <BoxContent
          title="COVID-19"
          content="Latest information on Covid-19, including symptoms, prevention, and
            vaccination."
        />
      </main>
    </div>
  );
}
