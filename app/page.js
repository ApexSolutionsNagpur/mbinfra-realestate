"use client";
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
// import Apartments from './components/Apartments'
import Footer from './components/Footer'
import PropertyShowcase from './components/PropertyShowcase';
import TextMarquee from './components/TextMarquee';
import NearbyAttractions from './components/NearbyAttractions';
import Specifications from './components/Specifications';
import WorldOfAmenities from './components/WorldOfAmenities';
import LocationMap from './components/LocationMap';
import BrochureModal from './components/BrochureModal';
import InternalAmenities from './components/InternalAmenities';
import FloatingIcons from './components/FloatingIcons';
import { useRef } from 'react';

export default function Home() {
  const propertyShowcaseRef = useRef(null);

  const handleViewAllApartmentsClick = () => {
    if (propertyShowcaseRef.current) {
      propertyShowcaseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      {/* <Header /> */}
      <Hero />
      <div ref={propertyShowcaseRef}>
        <PropertyShowcase />
      </div>
      <About />
      <TextMarquee />
      <WorldOfAmenities />
      {/* <Amenities /> */}
      <NearbyAttractions />
      <LocationMap />
      <Specifications />
      <InternalAmenities />
      {/* <Footer /> */}
      <BrochureModal /> 
      <FloatingIcons />     
    </main>
  )
}