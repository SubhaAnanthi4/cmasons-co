import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import founder from '../photos/sourcing.jpg';
import pretreatment from '../photos/pre-treatment.jpg';
import dying from '../photos/dying.jpeg';
import quality from '../photos/wrk2.jpg';
import cutting from '../photos/cutting.jpeg';
import stitching from '../photos/stitching.jpg';
import finishing from "../photos/finishing.jpg"
import packaging from "../photos/packaging.jpg"

const processSteps = [
  {
    title: "Fabric Sourcing",
    description: "Raw fabric like cotton, silk, or synthetics are sourced from textile mills.",
    image: founder,
  },
  {
    title: "Pre-treatment",
    description: "Fabric is cleaned, desized, bleached to prepare for dyeing or printing.",
    image: pretreatment,
  },
  {
    title: "Dyeing or Printing",
    description: "Color and patterns are added to fabric using various techniques.",
    image: dying,
  },
  {
    title: "Fabric Cutting",
    description: "Fabric is cut into shapes based on design patterns, ready to be stitched.",
    image: cutting,
  },
  {
    title: "Stitching / Sewing",
    description: "Cut pieces are stitched together with machines to form clothes.",
    image: stitching,
  },
  {
    title: "Finishing",
    description: "Garments are ironed, trimmed, and treated for softness or shine.",
    image: finishing,
  },
  {
    title: "Quality Control",
    description: "Each piece is inspected for stitching accuracy and finishing.",
    image: quality,
  },
  
  {
    title: "Packaging",
    description: "Clothes are folded and packed, ready to be shipped to retailers.",
    image: packaging,
  }
];

const ManufacturingProcess = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">🧵 Fabric to Fashion: The Journey</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={3000}
        transitionTime={800}
        emulateTouch
      >
        {processSteps.map((step, index) => (
          <div key={index} className="text-center">
            <img src={step.image} alt={step.title} className="rounded-xl max-h-[400px] object-cover mx-auto" />
            <h3 className="text-2xl font-semibold mt-6 text-blue-700">{step.title}</h3>
            <p className="text-gray-700 mt-2 max-w-xl mx-auto">{step.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ManufacturingProcess;
