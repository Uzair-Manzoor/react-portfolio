import ImageOne from '../../images/image1.webp';

const portfolioData = [
  {
    id: 2,
    name: 'Space Hub',
    description: 'Space Hub is a cutting-edge web application integrated with real-time data from the SpaceX API, and empowers users to effortlessly book rockets and participate in curated space missions. Experience the future of space exploration with Space Hub.',
    image: ImageOne,
    link: 'https://space-travelers-8tvba23t2-uzair-manzoor.vercel.app/',
    code: 'https://github.com/Uzair-Manzoor/SpaceTravelersHub.git',
    tech: ['React', 'Redux', 'CSS5', 'API'],
  },
];

const filterData = [
  {
    filterId: 1,
    label: 'All',
  },
  {
    filterId: 2,
    label: 'Front End',
  },
  {
    filterId: 3,
    label: 'Back End',
  },
];

export { portfolioData, filterData };
