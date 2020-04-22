import React from "react";
import HeroSection from "./../components/HeroSection";
// import ClientsSection from "./../components/ClientsSection";
// import FeaturesSection from "./../components/FeaturesSection";
// import TestimonialsSection from "./../components/TestimonialsSection";
// import NewsletterSection from "./../components/NewsletterSection";
// import { useRouter } from "./../util/router.js";
import FormTurnos from "../components/FormTurnos";

function IndexPage(props) {
  // const router = useRouter();

  return (
    <>
      <HeroSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Rolling Code te esta esperando"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam neque dolorum, earum itaque suscipit officiis? Asperiores autem,."
        buttonText="Solicitar Turno"
        buttonColor="success"
        image="https://rollingcodeschool.com/assets/images/img-20190415-084231186-hdr-892x502.jpg"
        href="/#formTurnos"
      // buttonOnClick={() => {
      //   // Navigate to pricing page
      //   router.push("/");
      // }}
      ></HeroSection>
      <div id="formTurnos">
        <FormTurnos
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Solicita tu Turno"
        subtitle="Dejanos tus datos, el motivo y elegi cuando te sea mas comodo visitarnos"
        buttonText="Enviar"
        buttonColor="success"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!" />
      </div>
      {/* <ClientsSection
        bg="light"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      ></ClientsSection> */}
      {/* 
      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
      ></FeaturesSection>
      <TestimonialsSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      ></TestimonialsSection>*/}
      {/* <NewsletterSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      ></NewsletterSection>  */}
    </>
  );
}

export default IndexPage;
