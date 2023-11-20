import React from 'react';
import { Header } from '../components';
import  { TweetEditor } from '../components';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <TweetEditor />
    </main>
  );
}

export default Home;