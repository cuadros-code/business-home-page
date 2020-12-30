import React from 'react'
import '../styles/footer.css'

export const Footer = () => {
    return (
        // <!-- footer -->
        <footer  >
           <div className="container">
               <div className="row ">
                   <div className="col-md-4 text-center text-md-left ">
                       
                       <div className="py-0">
                           <h3 className="my-4">Who We Are</h3>
   
                           <p className="footer-links font-weight-bold">
                               <a className="link" href="#!">About Us</a>
                               <br/>
                               <a className="link" href="#!">Our Team</a>
                               <br/>
                               <a className="link" href="#!">Our Team</a>
                           </p>
                          
                       </div>
                   </div>
                   
                   <div className="col-md-4 text-center text-md-left ">
                       <div className="py-0 my-4">
                           <div>
                           <h3 className="my-4 ">Who We Are</h3>
   
                           <p className="footer-links font-weight-bold">
                               <a className="link" href="#!">About Us</a>
                               <br/>
                               <a className="link" href="#!">Our Team</a>
                               <br/>
                               <a className="link" href="#!">Our Team</a>
                           </p>
                           </div>  
                       </div>  
                   </div>
                   
                   <div className="col-md-4  my-4 text-center text-md-left ">
                       <h3>Get in Touch</h3>
                       
                       <div className="py-2">
                           <a href="#!"><i className="fab fa-twitter fa-2x text-info mx-3"></i></a>
                           <a href="#!"><i className="fab fa-facebook fa-2x text-primary mx-3"></i></a>
                           <a href="#!"><i className="fab fa-instagram fa-2x text-danger mx-3"></i></a>
                       </div>
                   </div>
               </div>  
           </div>
        </footer>
        // <!-- end of footer -->
    )
}
