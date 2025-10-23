"use client";

import { useState, useEffect } from 'react';
import { MapPin, Navigation, ZoomIn, ZoomOut, Car, ShoppingCart, School, Shield, Utensils, TreePine, Building2, Heart, Coffee } from 'lucide-react';

export default function LocationMap() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [zoom, setZoom] = useState(15);
  const [center, setCenter] = useState([21.0813301, 79.0788418]); // Nagpur coordinates

  const nearbyPlaces = [
    {
      id: 1,
      name: "Dmart",
      type: "shopping",
      coordinates: [21.0755537, 79.0769307],
      distance: "0.7 km",
      icon: <ShoppingCart size={20} />,
      details: "Convenient shopping destination with daily essentials"
    },
    {
      id: 2,
      name: "School Schoolers",
      type: "education",
      coordinates: [21.0802227, 79.0786216],
      distance: "0.1 km",
      icon: <School size={20} />,
      details: "Premium educational institution with modern facilities"
    },
    {
      id: 3,
      name: "Police Station",
      type: "security",
      coordinates: [21.0782807, 79.077961],
      distance: "0.4 km",
      icon: <Shield size={20} />,
      details: "24/7 security and emergency services"
    },
    {
      id: 4,
      name: "Restaurants",
      type: "food",
      coordinates: [21.1448, 79.0892],
      distance: "0.3 km",
      icon: <Utensils size={20} />,
      details: "Multiple dining options nearby"
    },
    {
      id: 5,
      name: "Central Park",
      type: "recreation",
      coordinates: [21.1428, 79.0912],
      distance: "0.9 km",
      icon: <TreePine size={20} />,
      details: "Beautiful park for walking and relaxation"
    },
    {
      id: 6,
      name: "Bank",
      type: "finance",
      coordinates: [21.1488, 79.0872],
      distance: "0.7 km",
      icon: <Building2 size={20} />,
      details: "Banking services and ATM"
    },
    {
      id: 7,
      name: "Hospital",
      type: "healthcare",
      coordinates: [21.1408, 79.0852],
      distance: "1.5 km",
      icon: <Heart size={20} />,
      details: "24/7 medical facilities"
    },
    {
      id: 8,
      name: "Cafes",
      type: "food",
      coordinates: [21.1458, 79.0902],
      distance: "0.4 km",
      icon: <Coffee size={20} />,
      details: "Coffee shops and cafes"
    }
  ];

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setCenter(place.coordinates);
    setZoom(16);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 1, 18));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 1, 12));
  };

  const resetView = () => {
    setSelectedPlace(null);
    setCenter([21.1458, 79.0882]);
    setZoom(15);
  };

  // Generate dynamic map URL with markers
  const getMapUrl = () => {
    const baseUrl = "https://www.openstreetmap.org/export/embed.html";
    const params = new URLSearchParams({
      bbox: `${center[1] - 0.01},${center[0] - 0.01},${center[1] + 0.01},${center[0] + 0.01}`,
      layer: "mapnik",
      marker: `${center[0]},${center[1]}`,
    });

    // Add markers for nearby places
    nearbyPlaces.forEach(place => {
      params.append('marker', `${place.coordinates[0]},${place.coordinates[1]}`);
    });

    return `${baseUrl}?${params.toString()}`;
  };

  return (
    <section className="location-map-section">
      <div className="map-container">
        {/* Header */}
        <div className="map-header">
          <div className="subtitle">Prime Location</div>
          <h2 className="main-title">Strategic Location Map</h2>
          <p className="section-description">
            Discover the perfect neighborhood with everything you need within reach
          </p>
        </div>

        <div className="map-content">
          {/* Map Container */}
          <div className="map-wrapper">
            <div className="map-frame">
              <iframe
                src={getMapUrl()}
                width="100%"
                height="100%"
                style={{ border: 'none', borderRadius: '15px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
              {/* Custom Markers Overlay */}
              <div className="custom-markers">
                {nearbyPlaces.map((place, index) => (
                  <div
                    key={place.id}
                    className={`marker ${place.type} ${selectedPlace?.id === place.id ? 'active' : ''}`}
                    style={{
                      left: `${50 + (place.coordinates[1] - center[1]) * 5000}%`,
                      top: `${50 + (place.coordinates[0] - center[0]) * 5000}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                    onClick={() => handlePlaceClick(place)}
                  >
                    <div className="marker-pulse"></div>
                    <div className="marker-icon">
                      {place.icon}
                    </div>
                    <div className="marker-tooltip">
                      {place.name}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Controls */}
              <div className="map-controls">
                <button className="control-btn" onClick={handleZoomIn}>
                  <ZoomIn size={18} />
                </button>
                <button className="control-btn" onClick={handleZoomOut}>
                  <ZoomOut size={18} />
                </button>
                <button className="control-btn" onClick={resetView}>
                  <Navigation size={18} />
                </button>
              </div>

              {/* Current Location Marker */}
              <div className="current-location-marker">
                <MapPin size={24} className="current-pin" />
                <div className="location-glow"></div>
              </div>
            </div>

            {/* Location Info */}
            <div className="location-info">
              <div className="info-card">
                <h3 className="info-title">
                  <MapPin size={20} />
                  Royal Empire Location
                </h3>
                <p className="address">
                  Khasra No. 34/1, Beltarodi Road, Manish Nagar, Nagpur
                </p>
                <div className="location-stats">
                  <div className="stat">
                    <span className="stat-value">15+</span>
                    <span className="stat-label">Nearby Amenities</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">5 min</span>
                    <span className="stat-label">To City Center</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">24/7</span>
                    <span className="stat-label">Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Places List */}
          <div className="nearby-places-sidebar">
            <h3 className="sidebar-title">Nearby Places</h3>
            <div className="places-list">
              {nearbyPlaces.map((place, index) => (
                <div
                  key={place.id}
                  className={`place-item ${selectedPlace?.id === place.id ? 'active' : ''}`}
                  onClick={() => handlePlaceClick(place)}
                  data-aos="fade-left"
                  data-aos-delay={index * 50}
                >
                  <div className="place-icon">
                    {place.icon}
                  </div>
                  <div className="place-info">
                    <h4 className="place-name">{place.name}</h4>
                    <p className="place-distance">{place.distance}</p>
                    <p className="place-details">{place.details}</p>
                  </div>
                  <div className="place-indicator">
                    <div className="distance-dot"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Place Details */}
        {selectedPlace && (
          <div className="selected-place-details" data-aos="fade-up">
            <div className="details-header">
              <h3>{selectedPlace.name}</h3>
              <button 
                className="close-btn"
                onClick={() => setSelectedPlace(null)}
              >
                ×
              </button>
            </div>
            <div className="details-content">
              <div className="detail-item">
                <strong>Distance:</strong> {selectedPlace.distance}
              </div>
              <div className="detail-item">
                <strong>Type:</strong> {selectedPlace.type.charAt(0).toUpperCase() + selectedPlace.type.slice(1)}
              </div>
              <div className="detail-item">
                <strong>Details:</strong> {selectedPlace.details}
              </div>
            </div>
            <div className="details-actions">
              <button className="action-btn primary">
                <Car size={16} />
                Get Directions
              </button>
              <button className="action-btn secondary">
                Save Location
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
// "use client";

// import { useState, useEffect } from 'react';
// import { MapPin, Navigation, ZoomIn, ZoomOut, Car, ShoppingCart, School, Shield, Utensils, TreePine, Building2, Heart, Coffee } from 'lucide-react';

// export default function LocationMap() {
//   const [selectedPlace, setSelectedPlace] = useState(null);
//   const [zoom, setZoom] = useState(15);
//   const [center, setCenter] = useState({ lat: 21.0813301, lng: 79.0788418 }); // Nagpur coordinates

//   const nearbyPlaces = [
//     {
//       id: 1,
//       name: "Dmart",
//       type: "shopping",
//       coordinates: { lat: 21.0755537, lng: 79.0769307 },
//       distance: "0.7 km",
//       icon: <ShoppingCart size={20} />,
//       details: "Convenient shopping destination with daily essentials"
//     },
//     {
//       id: 2,
//       name: "School Schoolers",
//       type: "education",
//       coordinates: { lat: 21.0802227, lng: 79.0786216 },
//       distance: "0.1 km",
//       icon: <School size={20} />,
//       details: "Premium educational institution with modern facilities"
//     },
//     {
//       id: 3,
//       name: "Police Station",
//       type: "security",
//       coordinates: { lat: 21.0782807, lng: 79.077961 },
//       distance: "0.4 km",
//       icon: <Shield size={20} />,
//       details: "24/7 security and emergency services"
//     },
//     {
//       id: 4,
//       name: "Restaurants",
//       type: "food",
//       coordinates: { lat: 21.1448, lng: 79.0892 },
//       distance: "0.3 km",
//       icon: <Utensils size={20} />,
//       details: "Multiple dining options nearby"
//     },
//     {
//       id: 5,
//       name: "Central Park",
//       type: "recreation",
//       coordinates: { lat: 21.1428, lng: 79.0912 },
//       distance: "0.9 km",
//       icon: <TreePine size={20} />,
//       details: "Beautiful park for walking and relaxation"
//     },
//     {
//       id: 6,
//       name: "Bank",
//       type: "finance",
//       coordinates: { lat: 21.1488, lng: 79.0872 },
//       distance: "0.7 km",
//       icon: <Building2 size={20} />,
//       details: "Banking services and ATM"
//     },
//     {
//       id: 7,
//       name: "Hospital",
//       type: "healthcare",
//       coordinates: { lat: 21.1408, lng: 79.0852 },
//       distance: "1.5 km",
//       icon: <Heart size={20} />,
//       details: "24/7 medical facilities"
//     },
//     {
//       id: 8,
//       name: "Cafes",
//       type: "food",
//       coordinates: { lat: 21.1458, lng: 79.0902 },
//       distance: "0.4 km",
//       icon: <Coffee size={20} />,
//       details: "Coffee shops and cafes"
//     }
//   ];

//   const handlePlaceClick = (place) => {
//     setSelectedPlace(place);
//     setCenter(place.coordinates);
//     setZoom(16);
//   };

//   const handleZoomIn = () => {
//     setZoom(prev => Math.min(prev + 1, 18));
//   };

//   const handleZoomOut = () => {
//     setZoom(prev => Math.max(prev - 1, 12));
//   };

//   const resetView = () => {
//     setSelectedPlace(null);
//     setCenter({ lat: 21.0813301, lng: 79.0788418 });
//     setZoom(15);
//   };

//   const getDirectionsUrl = () => {
//     const destination = selectedPlace ? selectedPlace.coordinates : center;
//     return `https://www.google.com/maps/dir/?api=1&destination=${destination.lat},${destination.lng}`;
//   };

//   // Generate Google Maps embed URL
//   const getGoogleMapUrl = () => {
//     const baseUrl = "https://www.google.com/maps/embed/v1/view";
//     const params = new URLSearchParams({
//       key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY',
//       center: `${center.lat},${center.lng}`,
//       zoom: zoom.toString(),
//       maptype: 'roadmap'
//     });

//     return `${baseUrl}?${params.toString()}`;
//   };

//   // Alternative: Google Maps with markers (more comprehensive)
//   const getGoogleMapWithMarkersUrl = () => {
//     const baseUrl = "https://www.google.com/maps/embed/v1/place";
//     const params = new URLSearchParams({
//       key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY',
//       q: `${center.lat},${center.lng}`,
//       zoom: zoom.toString(),
//       maptype: 'roadmap'
//     });

//     // Add markers parameter
//     let markersParam = `color:red|label:P|${center.lat},${center.lng}`;
    
//     // Add nearby places markers
//     nearbyPlaces.forEach(place => {
//       markersParam += `&markers=color:blue|label:${place.id}|${place.coordinates.lat},${place.coordinates.lng}`;
//     });

//     return `${baseUrl}?${params.toString()}&${markersParam}`;
//   };

//   return (
//     <section className="location-map-section">
//       <div className="map-container">
//         {/* Header */}
//         <div className="map-header">
//           <div className="subtitle">Prime Location</div>
//           <h2 className="main-title">Strategic Location Map</h2>
//           <p className="section-description">
//             Discover the perfect neighborhood with everything you need within reach
//           </p>
//         </div>

//         <div className="map-content">
//           {/* Map Container */}
//           <div className="map-wrapper">
//             <div className="map-frame">
//               <iframe
//                 src={getGoogleMapWithMarkersUrl()}
//                 width="100%"
//                 height="100%"
//                 style={{ border: 'none', borderRadius: '15px' }}
//                 loading="lazy"
//                 allowFullScreen
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
              
//               {/* Map Controls */}
//               <div className="map-controls">
//                 <button className="control-btn" onClick={handleZoomIn}>
//                   <ZoomIn size={18} />
//                 </button>
//                 <button className="control-btn" onClick={handleZoomOut}>
//                   <ZoomOut size={18} />
//                 </button>
//                 <button className="control-btn" onClick={resetView}>
//                   <Navigation size={18} />
//                 </button>
//               </div>
//             </div>

//             {/* Location Info */}
//             <div className="location-info">
//               <div className="info-card">
//                 <h3 className="info-title">
//                   <MapPin size={20} />
//                   Royal Empire Location
//                 </h3>
//                 <p className="address">
//                   Khasra No. 34/1, Beltarodi Road, Manish Nagar, Nagpur
//                 </p>
//                 <div className="location-stats">
//                   <div className="stat">
//                     <span className="stat-value">15+</span>
//                     <span className="stat-label">Nearby Amenities</span>
//                   </div>
//                   <div className="stat">
//                     <span className="stat-value">5 min</span>
//                     <span className="stat-label">To City Center</span>
//                   </div>
//                   <div className="stat">
//                     <span className="stat-value">24/7</span>
//                     <span className="stat-label">Security</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Nearby Places List */}
//           <div className="nearby-places-sidebar">
//             <h3 className="sidebar-title">Nearby Places</h3>
//             <div className="places-list">
//               {nearbyPlaces.map((place, index) => (
//                 <div
//                   key={place.id}
//                   className={`place-item ${selectedPlace?.id === place.id ? 'active' : ''}`}
//                   onClick={() => handlePlaceClick(place)}
//                   data-aos="fade-left"
//                   data-aos-delay={index * 50}
//                 >
//                   <div className="place-icon">
//                     {place.icon}
//                   </div>
//                   <div className="place-info">
//                     <h4 className="place-name">{place.name}</h4>
//                     <p className="place-distance">{place.distance}</p>
//                     <p className="place-details">{place.details}</p>
//                   </div>
//                   <div className="place-indicator">
//                     <div className="distance-dot"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Selected Place Details */}
//         {selectedPlace && (
//           <div className="selected-place-details" data-aos="fade-up">
//             <div className="details-header">
//               <h3>{selectedPlace.name}</h3>
//               <button 
//                 className="close-btn"
//                 onClick={() => setSelectedPlace(null)}
//               >
//                 ×
//               </button>
//             </div>
//             <div className="details-content">
//               <div className="detail-item">
//                 <strong>Distance:</strong> {selectedPlace.distance}
//               </div>
//               <div className="detail-item">
//                 <strong>Type:</strong> {selectedPlace.type.charAt(0).toUpperCase() + selectedPlace.type.slice(1)}
//               </div>
//               <div className="detail-item">
//                 <strong>Details:</strong> {selectedPlace.details}
//               </div>
//             </div>
//             <div className="details-actions">
//               <a 
//                 href={getDirectionsUrl()} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="action-btn primary"
//               >
//                 <Car size={16} />
//                 Get Directions
//               </a>
//               <button className="action-btn secondary">
//                 Save Location
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }