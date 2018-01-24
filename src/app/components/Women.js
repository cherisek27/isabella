import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Lightbox from 'react-image-lightbox';
import Nav from './Nav';
import allImages from './allImages';
//import Slideshowwomen from './Slideshowwomen';

//remove background fade on onClick show full screen and remove zoom/ - minus bar

class Women extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      margin: 0
    };

    this.showGallery = this.showGallery.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  showGallery(index) {
    this.setState({ isOpen: true, photoIndex: index })
  }

  navigate(type) {
    const pageWidth = window.innerWidth;
    let photoIndex;
    if(type === 'next') {
      photoIndex = this.state.photoIndex + 1;
    } else {
      photoIndex = this.state.photoIndex ? this.state.photoIndex - 1 : allImages.length - 1;
    }
    this.setState({
      photoIndex
    });
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    const style2 = { 'width': '285px', 'height': '190px' };
    const style = { 'width': '130px', 'height': '190px' };
    const differentSizeIndexes = [2, 7, 16, 18];
    return (
      <div className="women">
        {
          isOpen && (
            <div className="gallery-popup">
              <div className="gallery-wrapper">
                {
                  allImages.map((each, index) => (
                    <div key={index} className={photoIndex === index ? "each active" : "each"}>
                      <div className={`image-holder ${each.position}`}>
                        {
                          (each.caption && each.position.includes('right')) && <p className={`caption ${each.position}`}>{each.caption}</p> 
                        } 
                        <img src={each.src} style={each.style} />
                        {
                          (each.caption && each.position.includes('left')) && <p className={`caption ${each.position} ${each.captionPosition}`}>{each.caption}</p> 
                        }
                        {
                          (each.caption && each.position.includes('full')) && <p className={`caption ${each.position} ${each.captionPosition}`}>{each.caption}</p>
                        } 
                        {
                          (each.caption && each.position.includes('fullLeft')) && <p className={`caption ${each.position} ${each.captionPosition}`}>{each.caption}</p>
                        } 
                        {
                          (each.caption && each.position.includes('side')) && <p className={`caption ${each.position} ${each.captionPosition}`}>{each.caption}</p>
                        }  
                        {
                        (each.caption && each.position.includes('centerLeft')) && <p className={`caption ${each.position} ${each.captionPosition}`}>{each.caption}</p> 
                        }  
                        {
                        (each.caption && each.position.includes('centerRight')) && <p className={`caption ${each.position} ${each.captionPosition}`}>{each.caption}</p> 
                        } 
                        {
                        (each.caption && each.position.includes('centerCloseLeft')) && <p className={`caption ${each.position} ${each.captionPosition}`}>{each.caption}</p> 
                        } 
                        {
                        (each.caption && each.position.includes('rightFarLeft')) && <p className={`caption ${each.position} ${each.captionPosition}`}>{each.caption}</p> 
                        } 
                        {
                        (each.caption && each.position.includes('testRight')) && <p className={`caption ${each.position} ${each.captionPosition}`}>{each.caption}</p>  
                        }
                        {
                        (each.caption && each.position.includes('imgTest')) && <p className={`caption ${each.position} ${each.captionPosition}`}>{each.caption}</p> 
                        }
                      </div>
                    </div>
                  ))
                }

              </div>
              <div onClick={() => this.navigate('prev')} className="nav arrow-left">
                <img src="../assets/images/leftArrowSlideshow.svg" id="leftArrow" />
              </div>
              <div onClick={() => this.navigate('next')}  className="nav arrow-right">
                <img src="../assets/images/rightArrowSlidshow.svg" id="rightArrow" />
              </div>
            </div>)
        }

        {
          !isOpen && (
            <div className="image-grid">
              {
                allImages.map((each, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => this.showGallery(index)}
                      className="box">

                      <img src={"../assets/images/thumb/" + index + ".jpg"} style={(differentSizeIndexes.includes(index)) ? style2 : style} />

                      {/*(index % 6 === 0) ? <hr className="line-break"/> : null */}
                    </div>
                  );
                })
              }
            </div>)
        }

        {/*<Slideshowwomen />*/}

      </div>
    );
  }
}

export default Women;

/*
{/*{isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                            }
                            onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                            }
                        />
                    )}
*/