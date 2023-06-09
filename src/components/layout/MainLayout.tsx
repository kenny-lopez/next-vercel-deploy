import Head from 'next/head';
import styles from './MainLayout.module.css';
import { Navbar } from '@/components/Navbar';
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
};

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Home | NextJS Course</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>

        {children}

      </main>
    </>
  );
};