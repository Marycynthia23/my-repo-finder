// import React from "react";

// import "./Repositories.css";
// // import Repository from "./Repository";

// const Repositories = (props) => {
//   const { search } = props;
//   console.log("Search is: ", search.items);

//   const listRepos = search.items?.map((item) => (
//     <section key={item.id}>
//       <div className="repositories">
//         <div className="repo">
//           <div>
//             <div className="title">
//               <i className="fa fa-book pr-1" />
//               <a href={item.html_url}>
//                 <span>{item.name}</span>
//               </a>
//             </div>
//             <span className="description">{item.description}</span>
//           </div>
//           <div className="d-flex">
//             <div className="subitem">
//               <i className="fa fa-code pr-1" />
//               <span>{item.language}</span>
//             </div>
//             <div className="subitem">
//               <i className="fa fa-star pr-1" />
//               <span>{item.stargazers_count}</span>
//             </div>
//             <div className="subitem">
//               <i className="fa fa-code-fork pr-1" />
//               <span>{item.forks_count}</span>
//             </div>
//             <div className="subitem">
//               <i className="fa fa-code-fork pr-1" />
//               <span>{item.open_issues_count}</span>
//             </div>
//           </div>
//         </div>
//         <br />
//       </div>
//     </section>
//   ));

//   return (
//     <div>
//       <div>{listRepos}</div>
//     </div>
//   );
// };

// export default Repositories;
