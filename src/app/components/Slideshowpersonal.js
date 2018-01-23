import React from 'react'

const Slideshowpersonal = () => ( 

      <div className="main-container-personal">
          <div className="container-personal-slideshow">  
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
  

  
          {/* Wrapper for slides */}
          <div className="carousel-inner">
          <div className="item active">
              <img src="assets/images/1JessicaandMaxim.jpg" id="personal0" />
          </div>
  
          <div className="item">
              <img src="assets/images/2 Hotel Alahambra.jpg" id="personal1" />
              <div className="carousel-caption">  
              <p className="personalcaption1">Alahambra Boutique Hotel, Croatia</p>
              </div>                 
          </div>
  
          <div className="item">
              <img src="assets/images/3Christian andAndrea.jpg" id="personal2" />
          </div> 

          <div className="item">
              <img src="assets/images/4MaximNazarov.jpg" id="personal3" />
          </div> 

          <div className="item">
              <img src="assets/images/5JaceyandAnya.jpg" id="personal4" />
          </div>  

          <div className="item">
              <img src="assets/images/5.1JaceyandAnya.jpg" id="personal5" />
          </div> 

          <div className="item">
              <img src="assets/images/thumbnailsP/6privatesociety.jpg" id="personal6" />
          </div>  

          <div className="item">
              <img src="assets/images/thumbnailsP/6.1privatesociety.jpg" id="personal7" />
          </div>   

          <div className="item">
              <img src="assets/images/thumbnailsP/6.2privatesociety_.jpg" id="personal8" />
          </div>  

          <div className="item">
              <img src="assets/images/thumbnailsP/6.3privatesociety.jpg" id="personal9" />
          </div>   

          <div className="item">
              <img src="assets/images/7MattDjordjevic1.jpg" id="personal10" />
          <div className="carousel-caption">  
              <p className="personalcaption">Matthew Djordjevic, Melrose Place</p>
              </div> 
          </div>  

          <div className="item">
              <img src="assets/images/thumbnailsP/7.1MattDjordjevic.jpg" id="personal11" />
              <div className="carousel-caption">  
              <p className="personalcaption">Matthew Djordjevic, Melrose Place</p>
              </div> 
          </div>  

          <div className="item">
              <img src="assets/images/thumbnailsP/7.2MattDjordjevic.jpg" id="personal12" />
              <div className="carousel-caption">  
              <p className="personalcaption">Matthew Djordjevic, Melrose Place</p>
              </div> 
          </div> 
        
        </div>
  
          {/* Left and right controls */}
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span className="slide"><img src="assets/images/leftArrowSlideshow.svg" id="leftp" /></span>
                  <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                  <span className="test"><img src="assets/images/rightArrowSlidshow.svg" id="rightp" /></span>
                  <span className="sr-only">Next</span>
              </a>
  
          </div> 
       </div>
      </div>
  )
  
export default Slideshowpersonal;


