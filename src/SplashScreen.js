import React from "react";
import Lottie from "lottie-react";
import animationData from "resources/lottie/splashscreen.json";
import Layout from "components/layout/Main";
const SplashScreen = (
   <Layout className="splashscreen" style={{ width: 600 }} centerMiddle>
      <Lottie animationData={animationData} autoplay={true} loop={true} />
   </Layout>
);

export default SplashScreen;
