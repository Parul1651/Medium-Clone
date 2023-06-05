// import React from "react";
// import { AuthModal } from "../Modals/AuthModal";
// gt-super, Georgia, Cambria, "Times New Roman", Times, serif
import React, {useEffect, useState} from 'react'
import {getAllPosts} from '../server/server'
import "./home.css";
import {Link} from 'react-router-dom'

function ArticlesCard({heading, content}){

    return(
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{heading}</h5>
                <p className="card-text">{content}</p>
            </div>
        </div>
    )
}

export default function Home() {


    const [data, setData] = useState()

    useEffect(()=>{
        
        getAllPosts().then((res)=>{
            console.log(res.post)
            setData(res.post)
        })
    },[])


  return (
    <div>
    <div className="className=col-md-2 main">
         <div className="main-container">
          <div className="main-content">
              <h3>
              Medium is a place <br /> to write, read, and <br /> connect
            </h3>
             <h6>
               It's easy and free to post your thinking on any topic and connect
               with millions of readers.
              </h6>
              <button><Link className='nav-link' to={'/compose'}>Start writing</Link></button>
              {/* <button onClick={() => setModal(true)}>Start Writing</button> */}
            </div>
          {/* <div>
             <AuthModal signInPopup={signInPopup} open={modal} setOpen={setModal} />
          </div> */}
        </div>
        </div>
        {/* <div> */}
    <div className="container mt-4">
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className="card mb-3">
					<div className="card-header">
						<h3>Latest Articles</h3>
					</div>

					<div className="card-body">
						{data && data.map(e => <ArticlesCard {...e} />)}
                    </div>

                </div>
            </div>
        </div>
    </div>
    </div>
//    </div>
  )
}

// function ArticlesCard({heading, content}){

//     return(
//         <div className="card mb-3">
//             <div className="card-body">
//                 <h5 className="card-title">{heading}</h5>
//                 <p className="card-text">{content}</p>
//             </div>
//         </div>
//     )
// }
// const home = () => {
//     const [data, setData] = useState()

//     useEffect(()=>{
        
//         getAllPosts().then((res)=>{
//             console.log(res.post)
//             setData(res.post)
//         })
//     },[])
//   return (
//     <>
//     <div className="main">
//       <div className="main-container">
//         <div className="main-content">
//           <h3>
//             Medium is a place <br /> to write, read, and <br /> connect
//           </h3>
//           <h6>
//             It's easy and free to post your thinking on any topic and connect
//             with millions of readers.
//           </h6>
//           <button onClick={() => setModal(true)}>Start Writing</button>
//         </div>
//       </div>
//       {/* <div>
//         <AuthModal signInPopup={signInPopup} open={modal} setOpen={setModal} />
//       </div> */}
//     </div>
//     <div className="container mt-4">
//     <div className="row justify-content-center">
//         <div className="col-md-8">
//             <div className="card mb-3">
//                 <div className="card-header">
//                     <h3>Latest Articles</h3>
//                 </div>

//                 <div className="card-body">
//                     {data && data.map(e => <ArticlesCard {...e} />)}
//                 </div>

//             </div>
//         </div>
//     </div>
// </div>
// </>
//   );
// };

