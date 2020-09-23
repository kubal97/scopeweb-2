import React, {useState} from 'react';
import './jobOffers.scss';
import Offer from './offer';
import { offers } from '../../assets/data';

const PAGE_SIZE = 6;

const pageCount = Math.ceil(offers.length / PAGE_SIZE);

const JobOffers = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="jobOffers">
        <h4 className="header">Lastest <span className="green">Job</span> Here</h4>
        <div className="container">
            {offers.slice(0, PAGE_SIZE).map(offer => {
              return <Offer key={offer.id} logo={offer.logo} name={offer.name} work={offer.work} body={offer.body} />
            })}
        </div>
        <div className="pagination">
            {Array.from({length: pageCount}, (_, i) => i + 1).map(page => {
              return <div key={page} className={currentPage === page ? "page active" : "page"}>{page}</div>
            })}
        </div>
    </div>
  );
}

export default JobOffers;
