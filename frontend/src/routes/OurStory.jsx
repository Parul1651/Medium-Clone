// // import React from 'react'

// // function MainContent(){

// //     function handleSub(){
// //         alert('Coming Soon....')
// //     }
// //     return(
// //         <div className="container mt-4">
// //             <div className="row">
// //                 <div className="col-md-8">
// //                     <h2 className="mb-4">Welcome to My Website</h2>
// //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
// //                     <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
// //                 </div>
// //                 <div className="col-md-4">
// //                     <div className="card">
// //                     <div className="card-body">
// //                         <h5 className="card-title">Subscribe to Our Newsletter</h5>
// //                         <p className="card-text">Stay updated with our latest news and offers by subscribing to our newsletter.</p>
// //                         <form>
// //                         <div className="form-group">
// //                             <label htmlFor="emailInput">Email address</label>
// //                             <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" />
// //                             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
// //                         </div>
// //                         <button onClick={handleSub} type="submit" className="btn btn-primary">Subscribe</button>
// //                         </form>
// //                     </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default function Home() {
// //   return (
// //     <main>
// //         <MainContent />
// //     </main>
// //   )
// // }




// import './home.css';
// import React, {useEffect, useState} from 'react'
// import {getAllPosts} from '../server/server'
// function ArticlesCard({heading, content}){

//     return(
        
        
//         <div className="article-card">
//           <h3>{heading}</h3>
//           <p>{content}</p>
//         </div>

//     )
// }

// const App = () => {
//     const [data, setData] = useState()

//     useEffect(()=>{
        
//         getAllPosts().then((res)=>{
//             console.log(res.post)
//             setData(res.post)
//         })
//     },[])
//   return (
//     <div className="App">
//       <header className="header">
//         <h1>Blog Website</h1>
//       </header>

//       <section className="hero">
//         <h2>Welcome to our Blog</h2>
//         <p>Explore the latest articles and stories from our talented writers.</p>
//         <button ><a href="/articles">Get Started</a></button>
//       </section>

//       <section className="articles">
//         <h2>Latest Articles</h2>
//         {/* Article list */}
//         <div className="article-list">
        
//         {data && data.map(e => <ArticlesCard {...e} />)}
          
//         </div>
//       </section>

//       <footer className="footer">
//         <p>© 2023 Blog Website. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;



import React from 'react'
import HomeHeader from '../../HomePage/HomeHeader'
import './css/index.css'

const OurStory = () => {
  return (
    
    <>
        {/* <HomeHeader backgroundColor = {"#ffffff"} /> */}
        <div className='our-story-head'>
          <div className='our-story-content'>
            <p>Every idea needs a <span>Medium.</span></p>
          </div>
        </div>

        {/* Story Content */}
        <div className='our-story-content-main'>
            <div className='our-story-content-main-left'>
              <div className='our-story-main-content'>
                <p>
                The best ideas can change who we are. Medium is where those ideas take shape, take off, and spark powerful conversations. We’re an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.
                </p>
                <br />
                <p>
                We’re creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It’s an environment that’s open to everyone but promotes substance and authenticity. And it’s where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.
                </p>
              </div>
              </div>
              <div className='anime'>
              <iframe title='anime' src="https://player.vimeo.com/video/467834328?api=1&amp;background=1&amp;mute=1&amp;loop=1" width="100%" height="100%" positioning="relative" frameBorder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
              </div>
            
            
        </div>
        {/* Membership */}
            <div className='membership'>
              <div className='memership-content-left'>
                <iframe title='cube' src="https://player.vimeo.com/video/448735219?api=1&amp;background=1&amp;mute=1&amp;loop=1" width="100%" height="100%" positioning="relative" frameBorder="0" allow="autoplay; fullscreen" allowfullscreen="" />
              </div>
              <div className='membership-content-right'>
                <div className='membership-content-right-content'>
                  <h2>Read, Write</h2>
                  <br />
                  <h2>and expand</h2>
                  <br />
                  <h2>your world.</h2>
                  <button>Get Started</button>
                </div>
              </div>
            </div>
    </>
  )
}

export default OurStory