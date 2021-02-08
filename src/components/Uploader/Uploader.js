import React from 'react'
import './Uploader.css'
import mountain from '../../images/image.svg'

const Uploader = ({ toggle }) => {
    

    return (
        <div className="uploader">
            <div className="uploader__card">
                <h1>Upload your image</h1>
                <p className="uploader__cardSub">File should be Jpeg, Png,...</p>
                <div className="uploader__uploader">
                <img src={mountain} alt="illustration"/>
                <p>Drag & Drop your image here</p>
                </div>
                <p className="uploader__cardOr">Or</p>
                <button onClick={toggle}>Choose a file</button>
            </div>
        </div>
    )
}

export default Uploader
