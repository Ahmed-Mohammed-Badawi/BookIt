// React Imports
import React from "react";
import Head from "next/head";
// Components
import Header from "./Header";
import Footer from "./Footer";
// Notification Package
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout({
    children,
    title = "Book best Hotel for Your Holiday... :)",
}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    httpEquiv="Content-Type"
                    content="text/html;charset=UTF-8"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="description"
                    content="find your favorite Hotel for your Holiday :)"
                />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            </Head>
            <Header />
            <ToastContainer position="bottom-right" />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
