import React from 'react';
import logo from '../../assets/images/logo.svg';
import simpleImage from '../../assets/images/simple-logo.svg';
import './logo.css';

interface LogoProps {
  simple: boolean;
}

function Logo({ simple }: LogoProps) {
  const src = simple ? simpleImage : logo;

  return <img src={src} alt="Logo da CollabChat" />;
}

export default Logo;

// -----------------//-----------------

// usando prop-types seria:

// import { bool } from "prop-types";
// import React from "react";
// import logo from "../../assets/images/logo.svg";
// import simpleImage from "../../assets/images/simple-logo.svg";
// import "./logo.css";

// function Logo({ simple }) {
// function Logo({ simple = false }) {
//   const src = simple ? simpleImage : logo;

//   return <img className="logo" src={src} alt="Logo da CollabChat" />;
// }

// Logo.defaultProps = {
//   simple: false,
// };

// Logo.propTypes = {
//   simple: bool,
// };

// export default Logo;
