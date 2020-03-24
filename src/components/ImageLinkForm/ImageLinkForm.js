import React from 'react';
import './ImageLinkForm.css';
import 'tachyons';

const ImageLinkForm = ({onInputChange, onButtonSubmit }) =>{
    return  (
        <div>
            <p className='f3'>
                { 'This magic brain will detect faces in your pics. Give it a try!'}
            </p>
            <div className='center'>
                <div className='form pa4 br3 shadow-5'>
                <input className='f4 center pa2 w-70 center' type='tex' onChange={onInputChange}/>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-purple'
                onClick={ onButtonSubmit}
                >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;