import React from "react";
import { FollowUs } from "./FollowUs";
import { Formulaire } from "./Formulaire";
import { Head } from "./Head";
import { Informations } from "./Informations";

export const Landing = () => {
  return (
    <>
      <Head />
      <Informations />
      <Formulaire />
      <FollowUs />
    </>
  );
};
