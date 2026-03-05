import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Alex Orri Ingvarsson',
  tagline: 'Computer Scientist · Fullstack Developer',
  location: 'London, United Kingdom',
  email: 'alexorr.ing@gmail.com',
  linkedin: 'https://linkedin.com/in/alexorri',
  github: 'https://github.com/masterlexus',
  languages: [
    { language: 'English', level: 'Fluent' },
    { language: 'French', level: 'Fluent' },
    { language: 'Icelandic', level: 'Native' },
  ],
  about: `Computer science student at EPFL, currently on exchange at Imperial College London. I've built an AI-powered healthcare triage platform as CTO of a startup, contributed real-time vehicle control software for a racing team, and shipped features used by thousands of businesses as a fullstack developer.\n\nI care about writing clean systems and solving real problems with code. I've found myself delving into the world of systems programming and am really passionate about performant systems.`,

  timeline: [
    {
      id: 'imperial',
      year: 2026,
      startDate: 'September 2025',
      endDate: 'June 2026',
      title: 'Exchange Program - Computing',
      organization: 'Imperial College London',
      location: 'London, United Kingdom',
      type: 'education',
      description:
        'Currently completing exchange year at Imperial College London as part of EPFL computer science degree.',
      bullets: [
        'Selected for prestigious exchange programme based on academic performance.',
        "Studying computing modules at one of the world's top technical universities.",
      ],
    },
    {
      id: 'epfl-racing',
      year: 2025,
      startDate: 'September 2024',
      endDate: 'July 2025',
      title: 'Software Engineer',
      organization: 'EPFL Racing Team',
      location: 'Lausanne, Switzerland',
      type: 'work',
      description:
        'Delivered complete revamp of LabVIEW codebase for real-time vehicle systems control.',
      bullets: [
        'Delivered complete revamp of LabVIEW codebase, bringing real-time vehicle systems control up to professional software standards.',
        'Delivered real-time vehicle control software interfacing directly with physical sensors and actuators.',
        'Implemented comprehensive error handling system using LabVIEW errors, enabling faster debugging during live car operation.',
        'Debugged and fixed issues on live car systems during testing sessions, improving reliability under real constraints.',
        'Replaced legacy code with clean, modular architecture for improved maintainability.',
      ],
      technologies: ['LabVIEW'],
    },
    {
      id: 'asa-tech',
      year: 2025,
      startDate: 'July 2024',
      endDate: 'August 2025',
      title: 'CTO',
      organization: 'Ása Tech',
      location: 'Reykjavik, Iceland (Remote)',
      type: 'work',
      description:
        'Led technical development of an AI-powered healthcare triage platform serving patients in Iceland.',
      bullets: [
        'Architected full-stack system enabling patients to describe symptoms and receive guided diagnostic assessments.',
        'Built clinician-facing dashboard prioritising patients by severity with diagnosis summaries, red flag indicators, and confidence levels.',
        'Successfully secured investment by selling equity to a private healthcare provider in Iceland.',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'AI/ML'],
    },
    {
      id: 'epfl',
      year: 2023,
      startDate: 'September 2023',
      endDate: 'Present',
      title: 'Bachelor of Science in Computer Science',
      organization: 'EPFL',
      location: 'Lausanne, Switzerland',
      type: 'education',
      description:
        "Studying computer science at one of Europe's top technical universities. Grades qualified for Imperial College exchange.",
      bullets: [
        'Foundation year grade: 9.35/10.',
        'Second year grade: 8.8/10.',
        'Final grade over both years: 5.427/6.',
        'Grades qualified for Imperial College exchange program.',
      ],
      technologies: ['Java', 'Scala', 'C', 'Python', 'SQL', 'VHDL', 'GLSL'],
    },
    {
      id: 'simplybook',
      year: 2023,
      startDate: 'July 2022',
      endDate: 'August 2023',
      title: 'Fullstack Software Developer',
      organization: 'SimplyBook.me',
      location: 'Limassol, Cyprus',
      type: 'work',
      description:
        'Developed UI interfaces and shipped features to production for a booking platform serving thousands of businesses.',
      bullets: [
        'Developed UI interfaces in React and Marionette.js for a booking platform serving thousands of businesses.',
        'Shipped features to production, iterating based on live user feedback.',
        'Built Chrome extension using RAG architecture to help the support team construct AI-enhanced responses.',
        'Revamped the entire onboarding process: designed React UI and PHP services in Zend Framework, using AI to auto-infer company details.',
        'Created Symfony business logic for core platform functionality.',
      ],
      technologies: [
        'React',
        'JavaScript',
        'PHP',
        'Symfony',
        'Zend Framework',
        'MariaDB',
      ],
    },
    {
      id: 'bocal',
      year: 2022,
      startDate: 'May 2022',
      endDate: 'June 2022',
      title: 'Fullstack JavaScript Bootcamp',
      organization: 'Bocal Academy',
      location: 'Remote',
      type: 'education',
      description: 'Completed intensive fullstack JavaScript training program.',
      bullets: [
        'Completed intensive fullstack JavaScript training program covering modern web development.',
      ],
      technologies: ['JavaScript', 'Node.js', 'HTML/CSS'],
    },
  ],

  projects: [
    {
      id: 'asa-tech',
      title: 'Ása Tech',
      subtitle: 'AI Healthcare Startup',
      description:
        'AI-powered healthcare triage platform serving patients in Iceland. Patients describe symptoms and receive guided diagnostic assessments, while clinicians get a dashboard prioritising patients by severity.',
      technologies: ['React', 'TypeScript', 'Node.js', 'AI/ML', 'PostgreSQL'],
      highlights: [
        'Led development as CTO, architecting the full-stack system end to end.',
        'Built clinician-facing dashboard with severity prioritisation, red flag indicators, and confidence levels.',
        'Secured investment by selling equity to a private healthcare provider.',
      ],
    },
    {
      id: 'support-assistant',
      title: 'Support Assistant Extension',
      subtitle: 'RAG-Powered Chrome Extension',
      description:
        'Chrome extension integrating with Ladesk support interface to add AI-powered response tools. Built a RAG system indexing help documentation and anonymized resolved conversations.',
      technologies: ['JavaScript', 'OpenAI API', 'RAG', 'Chrome Extensions'],
      highlights: [
        'Created RAG system indexing help documentation and anonymized support conversations.',
        'Injected contextual buttons enabling one-click AI-generated responses from indexed knowledge base.',
        'Integrated directly with Ladesk support interface for seamless agent workflow.',
      ],
    },
    {
      id: 'underwater-scene',
      title: 'Underwater Scene',
      subtitle: 'Computer Graphics - EPFL',
      description:
        'Interactive real-time 3D underwater scene using WebGL with custom GLSL vertex and fragment shaders for all visual effects.',
      technologies: ['WebGL', 'GLSL', 'JavaScript'],
      highlights: [
        "Implemented Craig Reynolds' Boids flocking algorithm for realistic fish schooling behavior.",
        'Created procedural terrain generation using noise functions for natural-looking seabed topology.',
        'Built atmospheric fog rendering with distance-based exponential fog and blue color grading.',
        'Designed first-person camera system with WASD movement and mouse look.',
      ],
    },
    {
      id: 'kv-store',
      title: 'Distributed Key-Value Store',
      subtitle: 'CS-202 Computer Systems - EPFL',
      description:
        'Distributed hash table system in C implementing Amazon Dynamo architecture with client-server model supporting configurable replication and fault tolerance.',
      technologies: ['C', 'POSIX Threads', 'UDP Networking', 'SHA-1'],
      highlights: [
        'Implemented consistent hashing ring using SHA-1 for key distribution across networked server nodes.',
        'Developed quorum-based consensus protocol with configurable N, W, and R parameters.',
        'Created multithreaded server using POSIX threads with mutex synchronization.',
        'Built UDP-based network layer with socket abstraction, request routing, and error recovery.',
      ],
    },
    {
      id: 'medical-imaging',
      title: 'Deep Learning for Medical Imaging',
      subtitle: 'Introduction to Machine Learning - EPFL',
      description:
        'Implemented and compared multiple neural network architectures for skin lesion classification using the DermaMNIST medical dataset.',
      technologies: ['PyTorch', 'Python', 'NumPy', 'Matplotlib'],
      highlights: [
        'Built custom CNN architectures inspired by LeNet and AlexNet with configurable layers.',
        'Conducted comprehensive hyperparameter optimization across model sizes, depths, and activation functions.',
        'Developed automated training pipeline with CUDA acceleration and performance visualization.',
        'Applied machine learning to medical imaging domain with model comparison methodologies.',
      ],
    },
    {
      id: 'chacun',
      title: 'ChaCuN Board Game',
      subtitle: 'OOP Programming - EPFL',
      description:
        'Digital version of Carcassonne-based board game in Java for 2–5 players with complete game logic, graphical interface, and networked multiplayer.',
      technologies: ['Java', 'JavaFX', 'JUnit'],
      highlights: [
        'Built comprehensive game state management with tile placement, area management, and scoring algorithms.',
        'Developed JavaFX GUI following MVC pattern with event handling and property bindings.',
        'Applied advanced OOP: immutable data structures, builder patterns, generics, and design patterns.',
        'Implemented networked multiplayer with binary data serialization for remote play.',
      ],
    },
  ],

  skillCategories: [
    {
      name: 'Programming Languages',
      skills: [
        'Python',
        'Java',
        'C',
        'Scala',
        'TypeScript',
        'JavaScript',
        'PHP',
        'SQL',
        'HTML/CSS',
        'GLSL',
      ],
    },
    {
      name: 'Frontend',
      skills: ['React', 'React Native', 'JavaFX', 'WebGL', 'Marionette.js'],
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express', 'Symfony', 'Zend Framework'],
    },
    {
      name: 'Machine Learning & AI',
      skills: [
        'PyTorch',
        'NumPy',
        'Matplotlib',
        'CNNs',
        'MLPs',
        'Medical Imaging',
      ],
    },
    {
      name: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Pinecone', 'Firebase'],
    },
    {
      name: 'Systems & Networking',
      skills: [
        'POSIX Threads',
        'UDP Networking',
        'Distributed Systems',
        'Network Programming',
      ],
    },
    {
      name: 'Tools & Technologies',
      skills: [
        'Linux',
        'Git/GitHub',
        'GitHub Actions',
        'LabVIEW',
        'Docker',
        'JUnit',
        'GDB',
      ],
    },
  ],
};
