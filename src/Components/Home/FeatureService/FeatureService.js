import React from 'react';
import DentalCare from '../../../images/DentalCare.png'

const FeatureService = () => {
  return (
    <div className="d-flex justify-content-center" style={{paddingTop: "100px"}}>
      <div className="card mb-3" style={{maxWidth: "900px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img style={{height: "300px"}} src={DentalCare} alt="..."/>
    </div>
    <div className="col-md-8 pt-5">
      <div className="card-body">
        <h5 className="card-title">Exceptional Dental <br/> Care, On Your Terms</h5>
        <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto libero praesentium. Hic nihil accusamus ea adipisci unde laudantium culpa dicta quia doloribus, odio assumenda magnam eveniet pariatur itaque animi.</p>
        <button className="btn btn-primary">Learn More</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default FeatureService;