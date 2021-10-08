import Head from 'next/head';
import { useState, useEffect } from 'react';
import { olimpicsApi, TypeList } from '@/services';
// import Image from 'next/image';
// import List from '@/components/list';
import ImageList from '@/components/imageList';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  const [listData, setListData] = useState<TypeList>();
  const [listName] = useState<string>('teste');
  const getList = async () => {
    olimpicsApi
      .getList(listName)
      .then((response) => {
        setListData(response.data.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Olimpíadas App</title>
        <meta
          name="Olimpíadas"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Olimpíadas <a href="https://olimpiadas.app/">App</a>
        </h1>
        {/* {listData ? <List listData={listData} /> : <></>} */}
        {listData ? <ImageList listData={listData} /> : <></>}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/joaosledz/Mobtex-Challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Criado por João Victor Sledz de Bulhões
        </a>
      </footer>
    </div>
  );
}
