import Instagram from './instagram.svg'
import Google from './google.svg';
import Behance from './behance.svg';
import Windows from './windows.svg';

import { ReactComponent as Tech } from './tech.svg';
import { ReactComponent as Rugby } from './rugby.svg';
import { ReactComponent as Megaphone } from './megaphone.svg';
import { ReactComponent as Bookmark } from './bookmark.svg';

import Face1 from './face1.jpg';
import Face2 from './face2.jpg';
import Face3 from './face3.jpg';

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
      work: "SEO, Expert",
      body: "Now, we are looking for a CEO expert for our Marketing team just apply now."
    },
    {
      id: "3",
      logo: Behance, 
      name: "Behance, London",
      work: "Sr. Product Designer",
      body: "We are looking for a senior Product designer for our design team"
    },
    {
      id: "4",
      logo: Windows,
      name: "Windows, New York",
      work: "Digital Marketing",
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
      work: "SEO, Expert",
      body: "Now, we are looking for a CEO expert for our Marketing team just apply now."
    },
    {
      id: "8",
      logo: Instagram,
      name: "Instagram, Canada",
      work: "Digital Marketing",
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
      work: "Sr. Product Designer",
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
      work: "Sr. Product Designer", 
      body: "We are looking for a senior Product designer for our design team."
    },
    {
      id: "13",
      logo: Google,
      name: "Google, USA",
      work: "Digital Marketing",
      body: "Hey! We are looking for a senior Visual designer for our design team."
    },
    {
      id: "14",
      logo: Google,
      name: "Google, USA",
      work: "SEO, Expert",
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
      work: "Digital Marketing",
      body: "We are looking for a senior Product designer for our design team"
    }
  ];

  const categoryCards = [
    {
      id: "1",
      icon: Tech,
      header: "Programming & Tech",
      body: "100+ Posted new Jobs"
    },
    {
      id: "2",
      icon: Rugby,
      header: "Programming & Tech",
      body: "100+ Posted new Jobs"
    },
    {
      id: "3",
      icon: Megaphone,
      header: "Programming & Tech",
      body: "100+ Posted new Jobs"
    },
    {
      id: "4",
      icon: Bookmark,
      header: "Programming & Tech",
      body: "100+ Posted new Jobs"
    },
    {
      id: "5",
      icon: Bookmark,
      header: "Finance & account",
      body: "100+ Posted new Jobs"
    },
    {
      id: "6",
      icon: Tech,
      header: "Arts & Design",
      body: "100+ Posted new Jobs"
    },
    {
      id: "8",
      icon: Megaphone,
      header: "Video Editing",
      body: "100+ Posted new Jobs"
    },
    {
      id: "9",
      icon: Rugby,
      header: "Education",
      body: "100+ Posted new Jobs"
    }
  ]

  const about = [
    {
      id: "1",
      avatar: Face1,
      opinion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id sunt eius cumque debitis.",
      name: "Randy Elliot",
      position: "Creative Director & CEO",
      color: "#54BD7F"
    },
    {
      id: "2",
      avatar: Face2,
      opinion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id sunt eius cumque debitis.",
      name: "Steve Fisher",
      position: "Creative Director & CEO",
      color: "#FF9166"
    },
    {
      id: "3",
      avatar: Face3,
      opinion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id sunt eius cumque debitis.",
      name: "Marie Oliver",
      position: "Creative Director & CEO",
      color: "#E5F5F1"
    }
  ]

  export  {
    offers,
    categoryCards,
    about
  };