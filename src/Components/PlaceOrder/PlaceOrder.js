import React from 'react';
import './PlaceOrder.css';
import Auth from '../SignUp/useAuth';
const PlaceOrder = () => {
    const auth =Auth();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-xs-6">
                    <div className="place-order-left p-4">
                        <img className='img-fluid' src={require('../../Image/ordercomplete.png')} alt=""/>
                    </div>
                </div>
                <div className="col-md-4 col-xs-6 p-4">
                    <div className="place-order-right p-4">
                        <img className='img-fluid w-50' src={require('../../Image/Group 1151.png')} alt=""/>
                    
                    <div className='location'>
                        <p>
                            your location <br/>
                            <small>107 road 8</small> <br/> <br/>
                            shop address
                            <address><small>Gulshan 5</small></address>
                        </p>
                    </div>
                    <h3 className='mt-4 p-0 mb-0 ml-2' >9:30</h3>
                    <span style={{color:'#666'}} className='ml-2'>Estimated delivery time</span>
                    <div className="location">
                        <p>you</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;