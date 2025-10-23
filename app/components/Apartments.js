// export default function Apartments({ onViewAllApartmentsClick }) {
//   const apartments = [
//     { rooms: 3, area: "75.54", price: "$86,000", housing: "HOUSING S1", floor: "FLOOR 1", parking: 1 },
//     { rooms: 4, area: "188.54", price: "$125,000", housing: "HOUSING S2", floor: "FLOOR 1", parking: 1 },
//     { rooms: 4, area: "148.45", price: "$110,000", housing: "HOUSING S1", floor: "FLOOR 2", parking: 1 },
//     { rooms: 4, area: "185.54", price: "$115,000", housing: "HOUSING S2", floor: "FLOOR 2", parking: 1 },
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="container px-4 mx-auto">
//         <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">
//           WHAT WE OFFER
//         </h2>
//         <h3 className="mb-12 text-xl text-center text-gray-600">
//           Choose Your Perfect Apartment
//         </h3>

//         <div className="mb-8 text-center">
//           <button className="px-6 py-3 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">
//             Skilled Professionals
//           </button>
//           <button onClick={onViewAllApartmentsClick} className="px-6 py-3 ml-4 text-blue-600 transition duration-300 border border-blue-600 rounded-lg hover:bg-blue-50">
//             View All Apartments
//           </button>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {apartments.map((apt, index) => (
//             <div key={index} className="p-6 transition duration-300 border border-gray-200 rounded-lg hover:shadow-lg">
//               <div className="mb-4 text-center">
//                 <div className="mb-2 text-2xl font-bold text-gray-800">ROOMS: {apt.rooms}</div>
//                 <div className="mb-2 text-lg text-gray-600">TOTAL AREA, SQ.M. {apt.area}</div>
//                 <div className="mb-4 text-2xl font-bold text-blue-600">{apt.price}</div>
//               </div>
//               <div className="space-y-2 text-sm text-gray-600">
//                 <div>{apt.housing}</div>
//                 <div>{apt.floor}</div>
//                 <div>PARKING PLACE: {apt.parking}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }