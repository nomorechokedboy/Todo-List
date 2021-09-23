import React, { useState } from "react";

import Header from "../shards/Header";
import GetStarted from "../shards/GetStarted";
import Features from "../shards/Features";
import Demo from "../shards/Demo";
import Emphasize from '../shards/Emphasize'
import Footer from '../shards/Footer'

export default function index() {
	return (
		<>
			<Header />
			<GetStarted />
			<Features />
			<Demo />
			<Emphasize />
			<Footer />
		</>
	);
}
