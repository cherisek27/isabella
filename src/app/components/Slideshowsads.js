import React from 'react'

const Slideshowsads = () => (
          <div className="main-container-ads">
              <div className="container-ads-slideshow">
      
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
      
          
              {/* Wrapper for slides */}
              <div className="carousel-inner">
              <div className="item active">
                 <img src="assets/images/1Tylynn.jpg" id="ads0"  />
                    <div className="carousel-caption">  
                         <p className="adscaption">Tylynn Nguyen FW17 Campaign</p>
                     </div>
                </div>
      
                <div className="item">
                    <img src="assets/images/thumbnailsads/1.1Tylynn.jpg" id="ads1" />
                        <div className="carousel-caption">
                            <p className="adscaption">Tylynn Nguyen FW17 Campaign</p>
                        </div>
                </div>
              
                 <div className="item">
                    <img src="assets/images/thumbnailsads/1.2Tylynn.jpg" id="ads2" />
                         <div className="carousel-caption">
                           <p className="adscaption" style={{'fontfamily': 'Didot'}}>Tylynn Nguyen FW17 Campaign</p>
                         </div> 
                 </div>  

                   
                 <div className="item">
                    <img src="assets/images/thumbnailsads/1.3Tylynn.jpg" id="ads3" />
                         <div className="carousel-caption">
                         <p className="adscaption">Tylynn Nguyen FW17 Campaign</p>
                         </div> 
                 </div> 
    
                 <div className="item">
                    <img src="assets/images/thumbnailsads/1.4Tylynn.jpg" id="ads4" />
                         <div className="carousel-caption">
                         <p className="adscaption">Tylynn Nguyen FW17 Campaign</p>
                         </div> 
                 </div> 
           
                 <div className="item">
                    <img src="assets/images/thumbnailsads/1.5Tylynn.jpg"  id="ads5" />
                        <div className="carousel-caption">
                        <p className="adscaption">Tylynn Nguyen FW17 Campaign</p>   
                        </div> 
                 </div> 
                  
                 <div className="item">
                    <img src="assets/images/thumbnailsads/1.6Tylynn.jpg"  id="ads6" />
                        <div className="carousel-caption">
                        <p className="adscaption">Tylynn Nguyen FW17 Campaign</p>    
                        </div> 
                 </div>
            
             </div>
      
              {/* Left and right controls */}
              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span className="glyphicon glyphicon-menu-left"></span>
                  <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                  <span className="glyphicon glyphicon-menu-right"></span>
                  <span className="sr-only">Next</span>
              </a>
      
              </div>
           </div>
          </div>
      )
      
    export default Slideshowsads; 