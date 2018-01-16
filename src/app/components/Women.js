/* figure out line break problem */
import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 
import Lightbox from 'react-image-lightbox';
import Nav from './Nav';
import Slideshowwomen from './Slideshowwomen';

class  Women extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          photoIndex: 0,
          isOpen: false,
        };

        this.showGallery = this.showGallery.bind(this);
    }

    showGallery(index) {
        this.setState({ isOpen: true, photoIndex: index})
    }

    render() {
        const images = [
            '../assets/images/1allieleggett.jpg',
            '../assets/images/1.1AllieLeggett.jpg',
            '../assets/images/2AlanaHadid.jpg',
            '../assets/images/3Rafaella.jpg',
            '../assets/images/3.1Rafaella.jpg',
            '../assets/images/3.2Rafaella.jpg',
            '../assets/images/3.3Rafaella.jpg',
            
            './assets/images/4ChloeLloyd.jpg',   
            '../assets/images/5ArianaAnast.jpg', 
            '../assets/images/6GeorginaGrace.jpg', 
            '../assets/images/7CatrinaStella.jpg', 
            '../assets/images/7.1CatrinaStella.jpg', 
            '../assets/images/6.2CatrinaStella.jpg', 
            '../assets/images/6.3CatrinaStella.jpg', 

            '../assets/images/6.4CatrinaStella.jpg', 
            '../assets/images/6.5CatrinaStella.jpg', 
            '../assets/images/7CarolineVreeland.jpg', 
            '../assets/images/8GeorginaGrace.jpg', 
            '../assets/images/9WomeninCalifornia.jpg', 
            '../assets/images/9.1WomeninCalifornia.jpg', 

            '../assets/images/10.2LauraColeman.jpg', 
            '../assets/images/10.1LauraColeman.jpg', 
            '../assets/images/10LauraColeman.jpg', 
            '../assets/images/11catherinedunlop.jpg', 
            '../assets/images/11.1CatherineDunlop.jpg', 
            '../assets/images/11.2CatherineDunlop.jpg', 
            '../assets/images/11.3CatherineDunlop.jpg', 
            '../assets/images/11.5CatherineDunlop.jpg', 

            '../assets/images/11.6CatherineDunlop.jpg', 
            '../assets/images/17Charlotte.jpg',
            '../assets/images/12.1GeorginaGrace.jpg', 
            '../assets/images/5.1CarolineVreeland.jpg',
            '../assets/images/13TessJantschek.jpg',
            '../assets/images/14.5LeilaYavari.jpg',
            '../assets/images/14LeilaYavari.jpg', 
            '../assets/images/14.2LeilaYavari.jpg', 

            '../assets/images/14.4LeilaYavari.jpg',
            '../assets/images/14.6LeilaYavari.jpg', 
            '../assets/images/14.3LeilaYavari.jpg',
            '../assets/images/14.1LeilaYavari.jpg',
            '../assets/images/16JessicaBuchanan.jpg',
            '../assets/images/15.2VeronicaTaylor.jpg', 
            '../assets/images/15VeronicaTaylor.jpg', 
            '../assets/images/15.1VeronicaTaylor.jpg'
        ] 
            const { photoIndex, isOpen } = this.state; 

            const style2= {'width': '285px', 'height': '190px'};
            const style = {'width': '130px', 'height':'190px'};
            const differentSizeIndexes = [2, 7, 16, 18];
            return (
            <div className="women">
                
                    <div className="image-grid">
                        {
                            images.map((each, index) => {
                                return (
                                <div
                                    key={index}
                                    onClick={() => this.showGallery(index)}
                                    className="box">

                                        <img src={"../assets/images/thumb/"+index+".jpg"} style={(differentSizeIndexes.includes(index)) ? style2 : style} /> 
      
                                        {(index % 6 === 0) ? <hr className="line-break"/> : null } 
                                </div>
                                );
                            })
                        }

                    {isOpen && (
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
                
                </div>   

            <Slideshowwomen />

            </div> 
        );
    }
} 

export default Women; 