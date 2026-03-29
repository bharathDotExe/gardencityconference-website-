import { ConferenceTrack, ImportantDate } from './types';

export const COLORS = {
  primary: '#4A0E0E',
  primaryLight: '#5D1212',
  accent: '#F58220',
  accentHover: '#E07210',
};

export const IMAGES = {
  logo: "https://ik.imagekit.io/dvl5mhvik/Garden%20City%20Logo.png",
  hero: "https://ik.imagekit.io/dvl5mhvik/gcu%20(1).webp",
  speaker: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGxE-N-L4izI1xBJaDYcJ_IYIPPfoxYzIDQaVVI44fz5kl8cynGP_WdzB8fO2_DwB0Wih2zlpvil1c1GTwjnJepawe75SbBE0_xbfzLKh5lVYLKXJc0-2_MUttqMmCrdjL624faKFJPDagnPoGJIFphyi_EGgUv6ViIvtRqtsKI5sAknrTqQOyS4VpBrSihPkqhtprINtiQbqGyVHwEGjEtMhggvmG7FpkC30bIf3c6QrDftkRJ8V6jeNYJT1ntrpN1xLqDLBaAA0R",
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcMsxE-gFlMEONm2_g6RyO2-__2qJQVN43SMiO8u0TIC9M5b1hs_eufv9n1_J3bxhG3rXEddUQ9nUMgw0ksXBDBnf-W7BW6Qirc8X6hngzAMJY_zMe86O_wL48DRvdBTC9w1XMXFL1vYh_I2ms_XyEayyEyu806saDmHTJRPqKUV0XaG5zAJQArgjorlJ3gtGfzmZYdjwNrPQTRMes-9YFYqe19rgC1rslSmSA0jM3MVbdHzds9-G9j3nMlovAvFpO19mROcmOpuEc",
  chatbotIcon: "/images/chatbot-icon.jpg"
};

export const TRACKS: ConferenceTrack[] = [
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning Innovations',
    description: 'Explore the latest advancements and applications in AI and ML technologies shaping various industries.',
    icon: 'psychology',
    tags: ['AI', 'ML']
  },
  {
    id: 'iot-cyber-physical',
    title: 'IoT, Cyber-Physical Systems & Smart Automation',
    description: 'Transforming industries with connected devices, intelligent automation, and cyber-physical technologies.',
    icon: 'router',
    tags: ['IOT', 'AUTOMATION']
  },
  {
    id: 'blockchain-trust',
    title: 'Blockchain & Distributed Trust Technologies',
    description: 'Innovations in decentralization, security, and trust through distributed ledger technologies.',
    icon: 'account_tree',
    tags: ['BLOCKCHAIN', 'SECURITY']
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing',
    description: 'Delving into the future of computation and complex problem-solving with quantum technologies.',
    icon: 'memory',
    tags: ['QUANTUM', 'COMPUTING']
  },
  {
    id: 'sustainable-engineering',
    title: 'Sustainable Engineering & Green Energy Technologies',
    description: 'Developing eco-friendly engineering solutions and renewable energy technologies for a green future.',
    icon: 'energy_savings_leaf',
    tags: ['SUSTAINABILITY', 'GREEN']
  },
  {
    id: 'robotics-industry-4',
    title: 'Robotics, Industry 4.0 & Additive Manufacturing',
    description: 'The next generation of manufacturing driven by robotics, automation, and 3D printing technologies.',
    icon: 'precision_manufacturing',
    tags: ['ROBOTICS', 'INDUSTRY 4.0']
  },
  {
    id: 'data-cloud-edge',
    title: 'Data Analytics, Cloud & Edge Computing',
    description: 'Harnessing the power of data through advanced analytics, cloud infrastructure, and localized edge processing.',
    icon: 'cloud',
    tags: ['DATA', 'CLOUD']
  },
  {
    id: 'innovation-management',
    title: 'Innovation Management',
    description: 'Strategies and practices for managing the entire spectrum of technological innovations effectively.',
    icon: 'lightbulb',
    tags: ['MANAGEMENT', 'STRATEGY']
  }
];

export const IMPORTANT_DATES: ImportantDate[] = [
  {
    id: 'd1',
    date: '15 March 2026',
    title: 'Abstract Submission Deadline',
    description: 'Last date to submit your research abstracts for early review and participation.',
    icon: 'description',
    isActive: true
  },
  {
    id: 'd2',
    date: '1 April 2026',
    title: 'Presenter Registration Deadline',
    description: 'Final date for presenters to complete their registration formalities.',
    icon: 'verified'
  },
  {
    id: 'd3',
    date: '6 April 2026',
    title: 'Participant Registration Deadline',
    description: 'Last day for all other participants to register for the conference.',
    icon: 'person_add'
  },
  {
    id: 'd4',
    date: '8th - 9th April, 2026',
    title: 'Conference Date',
    description: 'The main event featuring distinguished speakers, research presentations, and networking.',
    icon: 'event_seat'
  }
];

// Targeted to April 8th, 2026 at 9:00 AM Indian Standard Time (GMT+5:30)
export const CONFERENCE_START_DATE = '2026-04-08T09:00:00+05:30';

export const COMMITTEE = [
  {
    title: 'Chief Patron',
    members: [
      {
        name: 'Dr. Joseph V. G',
        designation: 'Chancellor',
        institution: 'Garden City University',
        image: 'https://icaisbi.gcu.edu.in/wp-content/uploads/2025/04/Dr.-Joseph-V-G-1.jpg'
      }
    ]
  },
  {
    title: 'Patron',
    members: [
      {
        name: 'Mr. Christo V Joseph',
        designation: 'Director \u2013 Strategy and Planning',
        institution: 'Garden City University'
      }
    ]
  },
  {
    title: 'Steering Committee',
    members: [
      {
        name: 'Dr. M. Ramachandra Gowda',
        designation: 'Vice Chancellor',
        institution: 'Garden City University'
      },
      {
        name: 'Dr. Sibi Shaji',
        designation: 'Pro Vice Chancellor',
        institution: 'Garden City University'
      },
      {
        name: 'Dr. Rajesh Kumar',
        designation: 'Pro Vice Chancellor',
        institution: 'Garden City University'
      },
      {
        name: 'Dr. Sheeja M S',
        designation: 'Registrar',
        institution: 'Garden City University'
      },
      {
        name: 'Dr. Preethi Rajesh',
        designation: 'Director, IQAC',
        institution: 'Garden City University'
      },
      {
        name: 'Dr. Biju Dharmapalan',
        designation: 'Dean, Academics',
        institution: 'Garden City University'
      }
    ]
  },
  {
    title: 'Conference Organizers',
    members: [
      {
        name: 'Dr. Surendar M',
        designation: 'Convenor',
        institution: 'Phone: +91 9962717222 | Email: surendar.m@gcu.edu.in'
      },
      {
        name: 'Dr. Jincy Mathew',
        designation: 'Co-Convenor',
        institution: 'Phone: +91 9886962700 | Email: jincy.c@gcu.edu.in'
      }
    ]
  },
  {
    title: 'Organizing Committee',
    members: [
      { name: 'Mr Sachin', designation: 'Member', institution: 'Garden City University' },
      { name: 'Dr Sridhar D', designation: 'Member', institution: 'Garden City University' },
      { name: 'Ms Elizabeth Moses', designation: 'Member', institution: 'Garden City University' },
      { name: 'Mr Thangamuthu', designation: 'Member', institution: 'Garden City University' },
      { name: 'Ms Vidhya', designation: 'Member', institution: 'Garden City University' },
      { name: 'Dr Gogulan', designation: 'Member', institution: 'Garden City University' },
      { name: 'Ms Sahana Edwin', designation: 'Member', institution: 'Garden City University' },
      { name: 'Ms Sandhya N M', designation: 'Member', institution: 'Garden City University' },
      { name: 'Ms Pallabee Padhi', designation: 'Member', institution: 'Garden City University' },
      { name: 'Ms Jhansi Rani', designation: 'Member', institution: 'Garden City University' },
      { name: 'Dr Narmadha', designation: 'Member', institution: 'Garden City University' },
      { name: 'Ms Neha Kumari', designation: 'Member', institution: 'Garden City University' },
      { name: 'Ms Bhagyalakshmi', designation: 'Member', institution: 'Garden City University' },
      { name: 'Ms Soundarya', designation: 'Member', institution: 'Garden City University' },
      { name: 'Ms Sunitha S', designation: 'Member', institution: 'Garden City University' },
      { name: 'Ms Kirti Barker', designation: 'Member', institution: 'Garden City University' },
      { name: 'Mr Kushal', designation: 'Member', institution: 'Garden City University' },
      { name: 'Ms Gowthami', designation: 'Member', institution: 'Garden City University' }
    ]
  },
  {
    title: 'International Advisory Board',
    members: [
      { name: 'Ms. Jisha Mariam Jose', designation: 'Co-Founder & ML/Backend Leader', institution: 'Unithink Inc.' },
      { name: 'Mr. Joshua David J. S.', designation: 'Senior Engineer, Electronic Components', institution: 'Caterpillar Inc., USA' },
      { name: 'Mr. Mohmed Anees Mohammed', designation: 'Senior Hardware Engineer', institution: 'Litens Automotive, Canada' },
      { name: 'Mr. Balamurugan Chinnappan Ponnusamy', designation: 'Solution Architect', institution: 'Ericsson India Global Services Pvt. Ltd.' }
    ]
  },
  {
    title: 'National Advisory Board',
    members: [
      { name: 'Prof. Dr. B. Meenakshi Sundaram', designation: 'Professor & Controller of Examinations', institution: 'T. John College, Bengaluru' },
      { name: 'Dr. Ilango Velchamy', designation: 'Professor, Department of Computer Applications', institution: 'CMR Institute of Technology, Bengaluru' },
      { name: 'Dr. Binju Saju', designation: 'Associate Professor', institution: 'Adi Shankara Institute of Engineering and Technology, Kalady' },
      { name: 'Dr. Santhosh Krishna', designation: 'Professor & Head (CSE-DS)', institution: 'Bangalore Technological Institute' },
      { name: 'Dr. Mariyan Richard', designation: 'Associate Professor & Program Coordinator', institution: 'Atria Institute of Technology' },
      { name: 'Dr. Sudharshan', designation: 'Associate Professor, Department of Computer Science', institution: 'Presidency University' },
      { name: 'Mr. Madhwaraj K. G.', designation: 'Professor & Head, Department of MCA', institution: 'Mangalore Institute of Technology & Engineering' }
    ]
  }
];

export const ABOUT_CONFERENCE = {
  title: 'ICIEM-2026',
  subtitle: 'International Conference on Innovation, Engineering & Management',
  description: 'Significant developments in digital technologies are revolutionizing the way industries are approaching innovation, engineering complex technologies, and managing the entire spectrum of technologies. New technologies such as artificial intelligence, machine learning, cybersecurity, blockchain, cloud computing, data analytics, and cyber-physical technologies are driving intelligent automation, digital security, and data-driven decision making.\n\nTechnological challenges of today require interdisciplinary research that combines innovation, engineering, and effective management. Recent developments in the field of robust system design, intelligent analytics, distributed computing, and digital security have enabled industries to develop digital technologies that are scalable, robust, and sustainable.\n\nInternational Conference on Innovation, Engineering & Management (ICIEM-2026) is a global platform for researchers, academicians, industry professionals, and students to present research results, share innovative ideas, and explore new technologies and innovative engineering practices. The conference will create a platform for the academia, industry, and research institutions to collaborate and develop innovative solutions to the challenges faced by the industry.\n\nICIEM-2026 facilitates interdisciplinary interactions and knowledge sharing in the pursuit of innovation, enhancing engineering research, and developing intelligent, resilient, and sustainable technologies for the future.',
  objectives: [
    'To create a global platform for academia, industry, and research institutions.',
    'To present research results and share innovative ideas.',
    'To explore new technologies and innovative engineering practices.',
    'To collaborate and develop solutions to industry challenges.',
    'To facilitate interdisciplinary interactions and knowledge sharing.',
    'To develop intelligent, resilient, and sustainable technologies for the future.'
  ],
  focusAreas: [
    'Artificial Intelligence',
    'Machine Learning',
    'Cybersecurity',
    'Blockchain',
    'Cloud Computing',
    'Data Analytics',
    'Cyber-Physical Technologies',
    'Robust System Design',
    'Intelligent Automation',
    'Sustainable Engineering'
  ],
  stats: [
    { label: 'Attendees', value: '500+', icon: 'groups' },
    { label: 'Speakers', value: '10+', icon: 'mic' },
    { label: 'Research Papers', value: '150+', icon: 'description' },
    { label: 'Themes', value: '8', icon: 'schema' }
  ]
};

export const ABOUT_UNIVERSITY = {
  title: 'Garden City University',
  description: 'Garden City University is a private university in Bengaluru, India. It is recognized for its focus on academic excellence, innovation, and industry-oriented education. Garden City University offers a wide range of undergraduate, postgraduate, and doctoral programs in various disciplines such as engineering, computer applications, management, commerce, media studies, sciences, and humanities.\n\nThe institution offers a multidisciplinary learning environment with modern infrastructure facilities, sophisticated labs, and experienced faculty. Garden City University fosters innovation, research, and industry partnerships through innovation labs, research centers, and academic collaborations. It encourages students to develop the skills and knowledge needed to address global issues and contribute to the global knowledge economy.'
};

export const ABOUT_DEPARTMENT = {
  title: 'Department of Computer Science',
  description: 'The Department of Computer Science at Garden City University, under the School of Computational Sciences and Information Technology, is dedicated to producing highly qualified computer professionals with a solid foundation in computer systems, software engineering, and new technologies. It offers undergraduate, postgraduate, and doctoral programs in subjects such as computer applications, data science, cyber security, information technology, and more.\n\nWith a course structure that is highly relevant to the needs of the computer industry, students are able to acquire knowledge in computer systems, artificial intelligence, data analytics, networking, and cloud computing. This is achieved through theoretical knowledge and practical experience in computer labs. It also encourages research, innovation, and industrial partnerships with professional organizations such as IEEE, CSI, and other technology giants. This prepares students to become effective contributors in the evolving global technology landscape. It encourages research-oriented learning and innovation, enabling students and researchers to make contributions in the field of computer systems and digital technologies.'
};

export const SPEAKERS = {
  keynote: [
    {
      name: 'Dr. Lalit Patnaik',
      designation: 'Adjunct Professor & NASI Senior Scientist',
      institution: 'NIAS, IISc Campus',
      bio: 'Former Professor, Indian Institute of Science.',
      image: 'https://ui-avatars.com/api/?name=Lalit+Patnaik&background=4A0E0E&color=fff&size=256'
    },
    {
      name: 'Prof. Anne McArdle',
      designation: 'Professor',
      institution: 'University of Liverpool, UK',
      bio: 'Renowned academic expert and researcher.',
      image: 'https://ui-avatars.com/api/?name=Anne+McArdle&background=4A0E0E&color=fff&size=256'
    }
  ],
  invited: [
    { name: 'Dr. Thrivikrama Rao Dasari', designation: 'Senior Manager', institution: 'Flight Test Centre, Hindustan Aeronautics Limited, Bengaluru' },
    { name: 'Dr. Divakar D. S.', designation: 'Scientist D & Senior Consultant', institution: 'INMC, Peenya Industrial Estate' },
    { name: 'Dr. Kanagasundaram K', designation: 'Principal Technical Specialist', institution: 'Nokia, Bengaluru' },
    { name: 'Mr. Mukul Tikotkar', designation: 'Senior Director', institution: 'Qualcomm, Bengaluru' },
    { name: 'Dr. Vignesh Ramamoorthy', designation: 'Associate Professor', institution: 'Amity University' },
    { name: 'Dr. Sunil Kumar G', designation: 'Head of AI, Data Science & Analytics', institution: 'Lenovo' },
    { name: 'Mr. Prakash Thomas', designation: 'AWS DevOps Architect & Platform Engineer', institution: 'NTT DATA' },
    { name: 'Mr. Dheeraj Ram', designation: 'Senior Software Engineer', institution: 'Microsoft' },
    { name: 'Dr. Sreejith S', designation: 'Associate Professor, Dept. of AI & ML', institution: 'New Horizon College of Engineering, Bengaluru' }
  ]
};

export const SCHEDULE = [
  {
    day: 'Day 1: April 8, 2026',
    events: [
      { time: '09:00 AM - 10:30 AM', title: 'Inauguration Ceremony', description: 'Grand opening ceremony with Chief Guest and Patrons.' },
      { time: '10:30 AM - 11:00 AM', title: 'Coffee Break & Networking', description: 'Interact with fellow researchers over coffee.' },
      { time: '11:00 AM - 12:30 PM', title: 'Keynote Session 1', description: 'Distinguished talks on Innovation & Engineering.' },
      { time: '12:30 PM - 01:30 PM', title: 'Lunch Break', description: 'Multi-cuisine lunch buffet.' },
      { time: '01:30 PM - 04:30 PM', title: 'Technical Themes', description: 'Parallel sessions.' }
    ]
  },
  {
    day: 'Day 2: April 9, 2026',
    events: [
      { time: '09:30 AM - 11:00 AM', title: 'Keynote Session 2', description: 'Distinguished talks on Management & Technologies.' },
      { time: '11:00 AM - 11:30 AM', title: 'Coffee Break', description: 'Short break for networking.' },
      { time: '11:30 AM - 01:00 PM', title: 'Invited Expert Talks', description: 'Talks by industry leaders on emerging technologies.' },
      { time: '01:00 PM - 02:00 PM', title: 'Lunch Break', description: 'Networking lunch.' },
      { time: '02:00 PM - 04:00 PM', title: 'Poster Presentations', description: 'Showcasing doctoral research and early-career findings.' },
      { time: '04:00 PM - 05:00 PM', title: 'Valedictory Ceremony', description: 'Closing ceremony and Best Paper Awards.' }
    ]
  }
];

export const REGISTRATION_FEES = [
  { category: 'UG / PG Students (GCU)', local: '₹500', foreign: '$35' },
  { category: 'UG / PG Students (External)', local: '₹750', foreign: '$50' },
  { category: 'Research Scholars', local: '₹1000', foreign: '$75' },
  { category: 'Academicians', local: '₹1500', foreign: '$100' }
];

export const BANK_DETAILS = {
  accountName: 'Garden City Foundation Pvt. Ltd.',
  bank: 'Canara Bank, Indira Nagar Branch',
  accountNumber: '04321010002750',
  ifscCode: 'CNRB0010432'
};

export const SUBMISSION_GUIDELINES = {
  steps: [
    'Prepare your full paper following the ICIEM-2026 template.',
    'Ensure the paper adheres to the minimum 6-page requirement.',
    'Submit the PDF through the Google Form portal.',
    'Wait for peer-review feedback from our technical committee.',
    'Upon acceptance, submit the camera-ready version and registration fee.'
  ],
  policies: [
    'Original research papers and innovative ideas on the themes of the conference are invited.',
    'Plagiarism must be less than 15% (Turnitin/iThenticate).',
    'All submissions must be original and not published elsewhere.'
  ],
  link: 'https://forms.gle/5YbJ8gxecHiHdPpb8'
};

export const VENUE_INFO = {
  name: 'GCU Auditorium, Garden City University Campus',
  address: 'Old Madras Road, KR Puram, Bengaluru',
  mapUrl: 'https://maps.app.goo.gl/uZTct1CB7gANPRxQA',
  travel: [
    'International: Kempegowda International Airport (BLR) - 35km.',
    'National: KSR Bengaluru (Majestic) Railway Station - 18km.',
    'Local: Easy access via Metro and BMTC buses.'
  ]
};
