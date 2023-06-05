import React, {useContext} from 'react'
import AuthContext from '../utils/AuthProvider'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import EditButton from './EditButton';
function Articles({heading}){
    return(
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{heading}</h5>
            </div>
        </div>
    )
}


export default function Profile({ post }) {

    const {currentUser} = useContext(AuthContext)
    console.log(currentUser.posts[0])
  return (
    <main className="container mt-4">
    <div className="row justify-content-center">
        <div className="col-md-8">

            <div className="card mb-3">
                <div className="card-body">
                    <div className="media">
                        <img src="data:image/png;base64,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" className="mr-3" alt="Dummy Profile Avatar" />
                        <div className="media-body">
                            <h5 className="mt-0">{currentUser.username}</h5>
                            {/* <p>Followers: {currentUser.following}</p>
                            <p>Follows: {currentUser.followers}</p> */}
                            <p>Articles: {currentUser.posts.length}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header">
                    <h3>Articles</h3>
                </div>
                <div className="card-body">
                    {currentUser.posts.map((e,i) =><div className="mb-5"> <Articles key={'Something+' + i} heading={e.heading} />
                       {/* <EditButton post={post} />  */}
                     <Link
                     variant="primary"
                      className=" btn btn-primary m-2">
                               Edit
          </Link>
          <Button variant="danger" >Delete</Button> 
        </div>)}
                </div>
            </div>
        </div>
    </div>
</main>
  )
}
