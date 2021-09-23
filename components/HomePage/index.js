import React, { useState } from "react";

import Header from "../shards/Header";
import GetStarted from "../shards/GetStarted";
import Features from '../shards/Features'
import Demo from '../shards/Demo'

export default function index() {
  return (
    <>
      <Header />
      <GetStarted />
	    <Features />
	    <Demo />
    </>
  );
}
