import React from "react"
import { Navbar } from "react-bootstrap"
import styles from "./Navigation.module.css"

export const Navigation: React.FC = () => {
    return <Navbar className={styles.navigation} expand="md">
        <Navbar.Brand className={styles.text}>
            {/* <h3  >Key Signature Visualizer</h3> */}
            <div className={styles.title + " " +  styles.text}>
                Key Signature Visualizer
            </div>
        </Navbar.Brand>
    </Navbar>
}