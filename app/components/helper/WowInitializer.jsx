"use client";
import React, { useEffect } from "react";
import "animate.css";
import WOW from "wowjs";

function WowInitializer() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return null; // Không có gì cần render trong component này
}

export default WowInitializer;
