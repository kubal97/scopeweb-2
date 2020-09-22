import React, {useState} from 'react';
import './jobOffers.scss';
import Offer from './offer';
import Instagram from '../../assets/instagram.svg';
import Google from '../../assets/google.svg'
import Behance from '../../assets/behance.svg'
import Windows from '../../assets/windows.svg'

const PAGE_SIZE = 6;
const offers = [
  {
      id: "1",
      logo: Instagram,
      name: "Instagram, Canada",
      work: "Visual Designer",
      body: "Hey! We are looking for a senior Visual designer for our design team."
  },
  {
    id: "2",
    logo: Google,
    name: "Google, USA",
    work: "Visual Designer",
    body: "Now, we are looking for a CEO expert for our Marketing team just apply now."
  },
  {
    id: "3",
    logo: Behance, 
    name: "Behance, London",
    work: "Visual Designer",
    body: "We are looking for a senior Product designer for our design team"
  },
  {
    id: "4",
    logo: Windows,
    name: "Windows, New York",
    work: "Visual Designer",
    body: "Hey! We are looking for a senior Visual designer for our design team."
  },
  {
    id: "5",
    logo: Windows,
    name: "Windows, New York",
    work: "Visual Designer", 
    body: "We are looking for a senior Product designer for our design team."
  },
  {
    id: "6",
    logo: Google,
    name: "Google, USA",
    work: "Visual Designer",
    body: "Hey! We are looking for a senior Visual designer for our design team."
  },
  {
    id: "7",
    logo: Google,
    name: "Google, USA",
    work: "Visual Designer",
    body: "Now, we are looking for a CEO expert for our Marketing team just apply now."
  },
  {
    id: "8",
    logo: Instagram,
    name: "Instagram, Canada",
    work: "Visual Designer",
    body: "Hey! We are looking for a senior Visual designer for our design team."
  },
  {
    id: "9",
    logo: Behance, 
    name: "Behance, London",
    work: "Visual Designer",
    body: "We are looking for a senior Product designer for our design team"
  },
  {
    id: "10",
    logo: Windows,
    name: "Windows, New York",
    work: "Visual Designer",
    body: "Hey! We are looking for a senior Visual designer for our design team."
  },
  {
    id: "11",
    logo: Google,
    name: "Google, USA",
    work: "Visual Designer",
    body: "Hey! We are looking for a senior Visual designer for our design team."
  },
  {
    id: "12",
    logo: Windows,
    name: "Windows, New York",
    work: "Visual Designer", 
    body: "We are looking for a senior Product designer for our design team."
  },
  {
    id: "13",
    logo: Google,
    name: "Google, USA",
    work: "Visual Designer",
    body: "Hey! We are looking for a senior Visual designer for our design team."
  },
  {
    id: "14",
    logo: Google,
    name: "Google, USA",
    work: "Visual Designer",
    body: "Now, we are looking for a CEO expert for our Marketing team just apply now."
  },
  {
    id: "15",
    logo: Instagram,
    name: "Instagram, Canada",
    work: "Visual Designer",
    body: "Hey! We are looking for a senior Visual designer for our design team."
  },
  {
    id: "16",
    logo: Behance, 
    name: "Behance, London",
    work: "Visual Designer",
    body: "We are looking for a senior Product designer for our design team"
  }
];

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
