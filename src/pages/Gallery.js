export default function Gallery(){
    return <div style={{ 
    // backgroundImage: `url('/images/cover.jpg')`,
    backgroundColor: 'rgb(173, 173, 173',
    // backgroundPosition: 'center',
  }}>

         <div className="container">
            <div style={{backgroundColor: "#175692"}}>
                <h2 className=" d-flex justify-content-center m-2 text-white">Gallery</h2>
            </div>
        </div>
         <div className=" container gallery-container cardtrans">
            <div className="gallery-item"><img src="gallery images/image1.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image2.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image3.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image4.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image5.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image6.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image7.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image2.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image8.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image9.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image10.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image11.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image12.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image13.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image14.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image15.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image16.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image17.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image18.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image19.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image20.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image21.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image22.jpeg" alt="images"/>
            </div>
            <div className="gallery-item"><img src="gallery images/image6.jpeg" alt="images"/>
            </div>
        </div>

        <div id="myModal" class="modal">
            <span class="close">&times;</span>
            <img class="modal-content" id="img01" alt=""/>
            <div id="caption"></div>
        </div>

    </div>
}
