import Head from 'next/head';
import NavBar from '../components/NavBar';
import { Seo } from '../components/Seo';

export default function Home() {
    return (
        <div>
         <Seo title='Home' />   
          This is Home Page
        </div>
    );
};