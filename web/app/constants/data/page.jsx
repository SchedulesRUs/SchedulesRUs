// "use client";
// import { useState, useEffect } from "react";

// export default function getAllUser() {
//   useEffect(() => {
//     async function fetchGetAllUser() {
//       try {
//         const response = await fetch(`https://schedules-r-us-78b737cd078f.herokuapp.com/user`);
//         const data = await response.json();
//         console.log("test", data);
//         console.dir(data);
//         setAllUser(data);
//         setErrorStatus(false);
//       } catch (error) {
//         setErrorStatus(true);
//       }
//     }

//     fetchGetAllUser();
//   }, []);

//   const [allUser, setAllUser] = useState([]);
//   const [isError, setErrorStatus] = useState(false);

//   return (
//     <div>
//       <h1>Meal Ideas</h1>
//       <h1>Here are some meal ideas using :</h1>

//       <div className="ml-8 p-2">
//         {isError ? (
//           <p>Error fetching data</p>
//         ) : allUser.length > 0 ? (
//           <ul>
//             {allUser.map((item) => (
//               <li key={item.id} className="p-2 m-1 hover:bg-orange-800 cursor-pointer">
//                 {item.username}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Loading User</p>
//         )}
//       </div>
//     </div>
//   );
// }
