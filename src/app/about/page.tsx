import React from "react";
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About us</title>
        <meta name="description" content="Learn more about our recipe app." />
      </Head>
      <section className="mt-4 sm:mt-8">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-lg mb-6">
          Hey! My name is Meng Yew, I built this site to test my full-stack
          development skills and to showcase my love for food. As an avid cook,
          I often find myself curious about the nutritional values of the
          recipes I prepare. This app allows me to easily view nutritional
          content for any recipe I whip up.
        </p>
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">1. Search Functionality</h2>
          <p>
            Easily find recipes using the intuitive search bar. Search by
            keywords to discover the perfect recipe for any occasion.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">
            2. Comprehensive Recipe Database
          </h2>
          <p>
            Gain access to a diverse range of recipes from an extensive database
            powered by an external API. From traditional classics to trending
            favorites, there&lsquo;s something for everyone to enjoy.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">
            3. Nutritional Information
          </h2>
          <p>
            Make informed choices about your meals with detailed nutritional
            information provided for each recipe. Whether you&lsquo;re
            monitoring your calorie intake or following a specific dietary plan,
            we&lsquo;ve got you covered.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">4. Seamless Navigation</h2>
          <p>
            This app utilizes Next.js for smooth navigation, ensuring a seamless
            user experience. With integrated routing functionality, you can
            effortlessly explore search results and discover new recipes with
            ease.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
