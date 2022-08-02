import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../components/Header';
import { ThreeColumn } from '../components/ThreeColumn';
import { Card } from '../components/Card';

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
		</div>
	);
};

export default Home;
