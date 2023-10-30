import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

export default function Card() {
    return (
        <div className="card">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}