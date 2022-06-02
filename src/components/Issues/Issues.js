// import axios from "axios";
// import React, { useState } from "react";

// const personal_access_token = "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";
// const Issues = () => {
//   const [issues, setIssues] = useState([]);

//   const getIssues = async () => {
//     console.log(issues);

//     try {
//       const result = await axios(
//         "https://api.github.com/search/issues?q=repo:username/reponame",
//         {
//           auth: "personal_access_token",
//         }
//       );
//       setIssues(result);
//     } catch (err) {
//       console.log(err);
//     }

//     //     axios
//     //       .get("https://api.github.com/search/issues?q=repo:username/reponame")
//     //       .then((res) => {
//     //         console.log(res);
//     //         const myIssues = res.data;
//     //         setIssues(myIssues);
//     //       });
//   };
//   console.log(issues);

//   //   useEffect(() => {
//   //     getIssues();
//   //   }, []);

//   return <div>Issues</div>;
// };

// export default Issues;
