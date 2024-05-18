import ImageOne from '../../images/image1.webp';
import ImageTwo from '../../images/image2.jpg';
import ImageFive from '../../images/image5.jpg';
import ImageEight from '../../images/image8.jpg';

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
  {
    id: 2,
    name: 'Health Care Application',
    description: 'The React/Redux front-end application for the "Doctor Appointments" seamlessly communicates with the Rails back-end API, ensuring a cohesive and efficient user experience',
    image: ImageTwo,
    link: 'https://healthcare-app-frontend.vercel.app/',
    code: 'https://github.com/Uzair-Manzoor/healthcare-app-backend.git',
    tech: ['PostgreSQL', 'React', 'Redux', 'Ruby On Rails', 'Render', 'Vercel', 'Tailwind'],
  },
  {
    id: 2,
    name: 'Summer Summits',
    description: 'Built with HTML, CSS, and JavaScript. The main objective of this project is to start practicing the professional way to work with CSS HTML and JavaScript in responsive design, using the basic structure, data query, flexbox and all following a template in Behance.',
    image: ImageFive,
    link: 'https://uzair-manzoor.github.io/Capstone/index.html',
    code: 'https://github.com/Uzair-Manzoor/Capstone.git',
    tech: ['JavaScript', 'HTML5', 'CSS5'],
  },
  {
    id: 2,
    name: 'Pollution Metrics',
    description: 'Pollution Metrics is a pollution metrics dashboard for Canadian cities and states. It allows users to explore air quality and weather data for various regions within Canada. Users can navigate through Canadian states, view a list of cities, and access detailed pollution and weather information for each city.',
    image: ImageEight,
    link: 'https://metrics-webapp-git-styling-uzair-manzoor.vercel.app/',
    code: 'https://github.com/Uzair-Manzoor/Matrics-webapp.git',
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
