import React, {useState} from 'react';
import './jobOffers.scss';
import Offer from './offer';
import { offers } from '../../assets/data';

const PAGE_SIZE = 6;

const pageCount = Math.ceil(offers.length / PAGE_SIZE);

const JobOffers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedOffers, setDisplayedOffers] = useState(offers.slice(0, PAGE_SIZE))

  const changePage = (page) => {
    setDisplayedOffers(offers.slice((page-1)*PAGE_SIZE, ((page-1)*PAGE_SIZE)+PAGE_SIZE))
    setCurrentPage(page);
    console.log(displayedOffers);
  }

  return (
    <div className="jobOffers">
        <h4 className="header">Lastest <span className="green">Job</span> Here</h4>
        <div className="container">
            {displayedOffers.map(offer => {
              return <Offer key={offer.id} logo={offer.logo} name={offer.name} work={offer.work} body={offer.body} />
            })}
        </div>
        <div className="pagination">
            {Array.from({length: pageCount}, (_, i) => i + 1).map(page => {
              return <button onClick={() => changePage(page)} key={page} className={currentPage === page ? "page current" : "page"}>{page}</button>
            })}
        </div>
    </div>
  );
}

export default JobOffers;
