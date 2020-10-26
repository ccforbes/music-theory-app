import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Layout } from "../components/Layout"
import { Visualizer } from "../components/Visualizer/Visualizer"

export default function Home(): JSX.Element {
    return <Layout>
        <Visualizer />
    </Layout>
}
