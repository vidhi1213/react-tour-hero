import React from 'react';
import { Link} from 'react-router-dom';

export default function Navigation () {

   return (
     <>
              
               <div className="container">
               <h2>Tour of Heroes</h2>
               <div className="row">
                           <Link to="/dashboard" className="dash btn btn-light btn-outline-secondary mr-3">Dash Board</Link>

                           <Link to="/heroes" className="hero btn btn-light btn-outline-secondary">Heroes</Link> 
                           </div>
                           </div>
</>
   );
}

