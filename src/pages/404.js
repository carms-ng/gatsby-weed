import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import NavSubpage from '../components/NavSubpage';
import Footer from '../components/Footer';
import Video from '../components/Video';
import sample from '../assets/videos/3.mp4';

export default function FourOhFourPage() {
  return (
    <Layout greenBg>
      <Helmet>
        <title>404 Not Found | What is a Weed?</title>
      </Helmet>
      <NavSubpage />
      <section className="space-y-12 mb-12">
        <p className="text-3xl">Whoops, this page doesn't exist.</p>
        <p className="text-xl">Take me back 
        <Link to="/" className="mx-1 text-green hover:underline">home</Link>
        please.
        </p>
        {/* passing in the cssStyle and src as props */}
        <Video className="max-w-3/4 md:max-w-2/5" src={sample}/>
      </section>
      <Footer />
    </Layout>
  );
}