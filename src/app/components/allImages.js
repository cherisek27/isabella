const images = [ { src: '../assets/images/1allieleggett.jpg', position: 'left edge', caption: 'Allie Leggett, London', captionPosition: 'caption-right' },
{ src: '../assets/images/1.1AllieLeggett.jpg', position: 'left edge', caption: 'Allie Leggett, London', captionPosition: 'caption-right' }, 
{ src: '../assets/images/2AlanaHadid.jpg', position: 'full', caption: 'Alana Hadid, Beverly Hills', captionPosition: 'caption-right' }, 
{ src: '../assets/images/3Rafaella.jpg', position: 'right', caption: 'Rafaella Consentino, London' },
{ src: '../assets/images/3.1Rafaella.jpg', position: 'right', caption: 'Rafaella Consentino, London' },
{ src: '../assets/images/3.2Rafaella.jpg', position: 'right', caption: 'Rafaella Consentino, London' },
{ src: '../assets/images/3.3Rafaella.jpg', position: 'right', caption: 'Rafaella Consentino, London' },
{ src: './assets/images/4ChloeLloyd.jpg', position: 'full', 
caption: 'Chloe, Park Plaza, Westminster', captionPosition: 'caption-left' }, /*fix caption */
{ src: '../assets/images/5ArianaAnast.jpg', position: 'center', 
caption: 'Ariana Anast, Spain', captionPosition: 'caption-left' }, /* fix caption */ 
{ src: '../assets/images/6GeorginaGrace.jpg', position: 'right', caption: 'Georgina Grace, London'},
{ src: '../assets/images/7CatrinaStella.jpg', position: 'left', caption: 'Catrina Stella, Downtown Los Angeles'},
{ src: '../assets/images/7.1CatrinaStella.jpg', position: 'left', caption: 'Catrina Stella, Downtown Los Angeles'},
{ src: '../assets/images/6.2CatrinaStella.jpg', position: 'left', caption: 'Catrina Stella, Downtown Los Angeles'},
{ src: '../assets/images/6.3CatrinaStella.jpg', position: 'left', caption: 'Catrina Stella, Downtown Los Angeles'},
{ src: '../assets/images/6.4CatrinaStella.jpg', position: 'left', caption: 'Catrina Stella, Downtown Los Angeles'},
{ src: '../assets/images/6.5CatrinaStella.jpg', position: 'left', caption: 'Catrina Stella, Downtown Los Angeles'},
{ src: '../assets/images/7CarolineVreeland.jpg', position: 'full', 
caption: 'Caroline Vreeland, Los Angeles. On set of L Amour D Une Femme'}, /* fix apstrophe */
{ src: '../assets/images/8GeorginaGrace.jpg', position: 'center', caption: 'Georgina Grace, London'},
{ src: '../assets/images/9WomeninCalifornia.jpg', position: 'full', caption: 'Zoe Gegout, Tes Janstchek - Women in California'},
{ src: '../assets/images/9.1WomeninCalifornia.jpg', position: 'right', caption: 'Zoe Gegout, Tes Janstchek - Women in California', 
position: 'caption-right'}, /* fix caption position */
{ src: '../assets/images/10.2LauraColeman.jpg', position: 'left', caption: 'Laura Coleman, London'},
{ src: '../assets/images/10.1LauraColeman.jpg', position: 'left', caption: 'Laura Coleman, London' },
{ src: '../assets/images/10LauraColeman.jpg', position: 'left', caption: 'Laura Coleman, London' },
{ src: '../assets/images/11catherinedunlop.jpg',  position: 'right edge', 
caption: 'Catherine Dunlop Palm Springs'}, /* caption needs to move more left*/
{ src: '../assets/images/11.1CatherineDunlop.jpg', position: 'right edge', 
caption: 'Catherine Dunlop Palm Springs'}, /* caption needs to move */
{ src: '../assets/images/11.2CatherineDunlop.jpg', position: 'right edge', 
caption: 'Catherine Dunlop Palm Springs'}, /* caption needs to move */
{ src: '../assets/images/11.3CatherineDunlop.jpg', position: 'right edge',
caption: 'Catherine Dunlop Palm Springs'}, /* caption needs to move */ 
{ src: '../assets/images/11.5CatherineDunlop.jpg', position: 'right edge', 
caption: 'Catherine Dunlop Palm Springs'}, /* caption needs to move */
{ src: '../assets/images/11.6CatherineDunlop.jpg', position: 'right edge', 
caption: 'Catherine Dunlop Palm Springs'}, /* caption needs to move */ 
{ src: '../assets/images/17Charlotte.jpg', position: 'center', caption: 'Charolotte, London' },
{ src: '../assets/images/12.1GeorginaGrace.jpg', position: 'left', caption: 'Georgina Grace, London' },
{ src: '../assets/images/5.1CarolineVreeland.jpg', position: 'left edge', 
caption: 'Caroline Vreeland, Los Angeles. On set of L Amour D Une Femme' },/* fix caption */ 
{ src: '../assets/images/13TessJantschek.jpg',position: 'right', 
caption: 'Tess Jantscheck - Women in California', position: 'left'  },
{ src: '../assets/images/14.5LeilaYavari.jpg', position: 'center', caption: 'Leila Yavari, Los Angeles', captionPosition: 'caption-right'   },
{ src: '../assets/images/14LeilaYavari.jpg', position: 'center', caption: 'Leila Yavari, Los Angeles',  captionPosition: 'caption-right' },
{ src: '../assets/images/14.2LeilaYavari.jpg', position: 'center',  caption: 'Leila Yavari, Los Angeles', captionPosition: 'caption-right'   },
{ src: '../assets/images/14.4LeilaYavari.jpg', position: 'center', caption: 'Leila Yavari, Los Angeles', captionPosition: 'caption-right'  },
{ src: '../assets/images/14.6LeilaYavari.jpg',
  position: 'center', caption: 'Leila Yavari, Los Angeles', captionPosition: 'caption-right'  },
{ src: '../assets/images/14.3LeilaYavari.jpg', position: 'center', caption: 'Leila Yavari, Los Angeles', captionPosition: 'caption-right'  },
{ src: '../assets/images/14.1LeilaYavari.jpg', position: 'center', caption: 'Leila Yavari, Los Angeles', captionPosition: 'caption-right'  },
{ src: '../assets/images/16JessicaBuchanan.jpg', position: 'right', caption: 'Jessica Buchanan, London'},
{ src: '../assets/images/15.2VeronicaTaylor.jpg', position: 'left', caption: 'Veronica Taylor, El Matador beach' },
{ src: '../assets/images/15VeronicaTaylor.jpg', position: 'left', caption: 'Veronica Taylor, El Matador beach' },
{ src: '../assets/images/15.1VeronicaTaylor.jpg',
  position: 'left', caption: 'Veronica Taylor, El Matador beach'} ];

export default images;