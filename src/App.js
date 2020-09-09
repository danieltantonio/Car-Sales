import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addPrice, rmPrice } from './actions';

const App = (props) => {

  const addPriceOnClick = (price, feature) => {
    props.addPrice({ price, feature });
  }

  const delPriceOnClick = (price, feature) => {
    props.rmPrice({ price, feature });
  }

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} delPriceOnClick={delPriceOnClick}/>
      </div>
      <div className="box">
        <AdditionalFeatures addPriceOnClick={addPriceOnClick} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
};

export default connect(mapStateToProps, { addPrice, rmPrice })(App);