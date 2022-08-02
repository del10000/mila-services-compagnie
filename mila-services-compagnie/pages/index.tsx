import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../components/Header';
import { ThreeColumn } from '../components/ThreeColumn';
import { Card } from '../components/Card';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<ThreeColumn />

			<Card />

			<Testimonials />

			<Contact />

			<Footer />
		</div>
	);
};

export default Home;
