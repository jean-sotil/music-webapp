"use client";

import dynamic from "next/dynamic";
import type React from "react";

import Loading from "../../atoms/Loading";

import type { SliderProps } from "./SliderClient";

const Slider = dynamic(() => import("./SliderClient"), {
  loading: () => <Loading />,
  ssr: false,
});

const SliderWrapper: React.FC<SliderProps> = (props) => {
  return <Slider {...props} />;
};

export default SliderWrapper;
