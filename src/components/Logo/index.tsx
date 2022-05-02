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
