import React, { useState } from "react";

import Header from "../shards/Header";
import GetStarted from "../shards/GetStarted";
import Features from '../shards/Features'

export default function index() {
  return (
    <>
      <Header />
      <GetStarted />
	    <Features />
    </>
  );
}
