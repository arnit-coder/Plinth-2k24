// import React, { useContext } from 'react';
// import EventContext from '../ContextApi/EventContext';

// function ViewEvents() {
//   const { all_products } = useContext(EventContext);

//   return (
//     <div>
//       <table className="table border border-dark p-3">
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">clubOrganisingName</th>
//             <th scope="col">time</th>
//             <th scope="col">nameOfCompetition</th>
//             <th scope="col">image</th>
//             <th scope="col">soloOrTeam</th>
//             <th scope="col">about</th>
//             <th scope="col">prize</th>
//             <th scope="col">rulebook</th>
//             <th scope="col">contacts</th>
//             <th scope="col">teams</th>
//             <th scope="col">minTeamMember</th>
//             <th scope="col">maxTeamMember</th>
//           </tr>
//         </thead>
//         <tbody>
//           {all_products.map((product, index) => (
//             <tr key={product.id}>
//               <th scope="row">{index + 1}</th>
//               <td>{product.clubOrganisingName}</td>
//               <td>{product.time}</td>
//               <td>{product.nameOfCompetition}</td>
//               <td>{product.image}</td>
//               <td>{product.soloOrTeam}</td>
//               <td>{product.about}</td>
//               <td>{product.prize}</td>
//               <td>{product.rulebook}</td>
//               <td>{product.contacts}</td>
//               <td>{product.teams}</td>
//               <td>{product.minTeamMember}</td>
//               <td>{product.maxTeamMember}</td>
//               <button type="button" className="btn btn-secondary">Delete Event</button>
//               <button type="button" className="btn btn-secondary">Update Event</button>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ViewEvents;
