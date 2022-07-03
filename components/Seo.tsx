import Head from 'next/head'

export function Seo({ title }:title) {
    return (
        <Head>
          <title> {title} | Next Movies </title>
        </Head>
    )
};

interface title {
  title: string
};