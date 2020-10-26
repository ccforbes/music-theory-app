import React from "react"
import Head from "next/head"
import { Navigation } from "./Navbar/Navigation"

type LayoutProps = {
    children: React.ReactNode
}

const keywords: string[] = [
    "Key Signature Visualizer",
    "Key Signature",
    "Music Theory",
    "Solfege",
    "Animation",
    "Christofer Forbes",
    "Chris Forbes",
    "University of Washington",
    "UW",
    "Informatics",
    "Christofer Forbes Informatics",
    "Christofer Forbes University of Washington",
    "Christofer Forbes Software",
    "Christofer Forbes Software Engineer",
    "Christofer Forbes Software Developer",
    "Christofer Forbes Full Stack Developer",
    "Christofer Forbes Seattle, WA",
    "Christofer Forbes Web Development"
]

const description: string = 
    "Visualize your music scales! Easily figure out how each scale turns into its  " +
    "particular key signature with these animations!"

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
            <meta name="author" content="Christofer Forbes" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(",")} />

            <meta property="og:title" content="Key Signature Visualizer" />
            <meta property="og:site_name" content="Key Signature Visualizer" />
            <meta property="og:description" content={description} />
            <meta property="ogs:type" content="website" />
            <meta property="og:image" content="/thumbnail.jpg" />

            <title>Key Signature Visualizer</title>
            <link rel="shortcut icon" href='/favicon-logo.svg' />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" /> */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </Head>
        <Navigation />
        <main>
            {children}
        </main>
    </>
}
