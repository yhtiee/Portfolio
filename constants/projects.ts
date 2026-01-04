export const projects = [
    {
        id: '1',
        title: "Arcpenter",
        subtitle: "While working as a Frontend Engineer at Zedi Inc. I worked with the team that built the arcpenter portfolio website which was one of the many client focused projects I worked on at Zedi Inc.",
        description: "A portfolio website for carpenter and interior design company called Arcpenter. The websites displays projects delivered, servcies, about the team, blog and contat us section.",
        tags: [
            "Next.js", 
            "TypeScript", 
            "Tailwind", 
            "Airtable", 
            "Strapi CMS"
        ],
        challenge: "The primary challenge was creating a dynamic platform that allowed the client to frequently update high-resolution project galleries, services and blog posts without technical expertise. We needed to ensure that large images of carpentry work loaded instantly across all devices while maintaining a clean, professional aesthetic that didn't distract from the craftsmanship",
        solution: "We integrated Strapi CMS to provide the client with an intuitive dashboard for content updates, paired with Next.js for server-side rendering to ensure lightning-fast load times and SEO optimization. For the Contact Us flow, we bridged the gap between the frontend and the client’s existing workflow by using Airtable, allowing inquiries to be managed as a structured database in real-time",
        image: "/arc.png",
        features: [
            "Airtable Integration for Contact Us",
            "Strapi CMS (Managing projects, blogs and service listing)",
        ],
        demoUrl: "https://arcpenter.netlify.app/",
        images: []
    },
    {
        id: "2",
        title: "Truq",
        subtitle: "While working as a Frontend Engineer at Zedi Inc. I worked with the team that built the truq landing page website which was one of the many client focused projects I worked on at Zedi Inc.",
        challenge: "The main challenge was to create a landing page that effectively communicated Truq's innovative logistics solutions to a diverse audience, from individual users to large enterprises. We needed to highlight the platform's efficiency, reliability, and ease of use, while also integrating a clear call-to-action for different user segments. The design had to be modern and intuitive, reflecting Truq's cutting-edge technology in the logistics space.",
        solution: "We designed a responsive landing page using Next.js and Tailwind CSS, focusing on a clean, modern aesthetic that emphasized Truq's brand identity. We implemented a clear, segmented user journey with distinct calls-to-action for businesses and individuals. To manage content and future updates efficiently, we integrated Strapi CMS, allowing the Truq team to easily modify service offerings, testimonials, and other key information. For lead capture and customer relationship management, we utilized Airtable, streamlining the process of collecting and organizing inquiries from potential clients.",
        description: "A landing page for Truq, a logistics and delivery technology platform that connects businesses and individuals with vehicles and drivers to manage moves, deliveries, and transportation more efficiently",
        tags: ["Next.js", "TypeScript", "Tailwind", "Airtable", "Framer Motion"],
        features: [
            "Airtable Integration for Contact Us",
            "Framer Motion (Animations)"
        ],
        image: "/truq.png",
        demoUrl: "https://truq.netlify.app/",
        images: []
    },
    {
        id: "3",
        title: "Scrollz",
        subtitle: "While working as a Frontend Engineer at Zedi Inc. I was part of a team of 4 made up of one Backend Engineer, two Frontend ENgineers and UI/UX Designer, tasked with building an in house web application called scrollz to build the gap in collaboration in the music industry",
        description: "Scrollz is a web application designed to bridge the collaboration gap in the music industry. It provides a platform for musicians, producers, and other industry professionals to connect, share ideas, and collaborate on projects seamlessly. The application features real-time communication, project management tools, and a centralized hub for creative assets, fostering a more efficient and interconnected music creation process.",
        challenge: "The primary challenge was to create a real-time collaborative environment for music professionals, enabling seamless interaction and content sharing. This involved developing robust backend infrastructure to handle concurrent user activity, large file uploads (audio, video, scores), and real-time updates across various project components. Ensuring a smooth and intuitive user experience while managing complex data synchronization was crucial.",
        solution: "We developed Scrollz using Next.js for the frontend, leveraging its reactive data binding and component-based architecture to build a dynamic and responsive user interface. This combination of technologies enabled us to create a highly interactive and collaborative platform that met the diverse needs of music professionals. In my role as one of the Frontend Engineers I contributed to the development of the user interface, implementing key features such as real-time chat, project dashboards, and media sharing functionalities. I focused on optimizing performance and ensuring a responsive design across various devices, utilizing React Query for efficient data fetching and state management, and Tailwind CSS for rapid and consistent styling.",
        tags: ["Next.js", "React Query (tan stack query)", "Tailwind", "Shadcn UI", "TypeScript"],
        features: [
            "In app messaging",
            "Payments Integration",
            "Clock in/ Clock out",
            "Wallets",
            "Multi profile handling (Producers, Studio owners and Artiste)"
        ],
        image: "/scrollz.png",
        demoUrl: "https://scrollz-web.netlify.app/",
        images: []
    },
    {
        id: "4",
        title: "Home Grid",
        subtitle: "Working as a full stack developer and also the engineering lead at Home grid with a team of 3 full stack developers, We built the home grid PWA which houses major features for health care organizations to manage and structure day to day activities, collaborations, patient document management, employee scheduling and shift monitoring, etc",
        description: "Home Grid is a Progressive Web Application (PWA) designed for healthcare organizations to streamline their daily operations. It offers a comprehensive suite of features including patient document management, employee scheduling, shift monitoring, and collaborative tools. The platform aims to enhance efficiency and communication within healthcare teams, providing a centralized system for managing various administrative and operational tasks.",
        challenge: "The main challenge was to build a robust and scalable PWA that could handle sensitive healthcare data securely while providing a seamless user experience across various devices. This involved integrating complex features like real-time scheduling, document management with strict access controls, and collaborative tools, all while ensuring compliance with healthcare data regulations. Optimizing performance for a large user base and diverse functionalities was also a key consideration.",
        solution: "We developed Home Grid as a PWA using Vite for a fast and efficient frontend build process, coupled with TypeScript for type safety and maintainability. The backend was built with Nest.js, providing a scalable and modular architecture, and integrated with Supabase for a powerful PostgreSQL database and authentication services. Shadcn UI was utilized for a consistent and accessible user interface. The application is deployed on Vercel for the frontend and AWS for backend services, ensuring high availability and performance. This tech stack allowed us to create a secure, high-performing, and feature-rich application tailored for healthcare organizations.",
        tags: [
            "TypeScript",
            "Vite",
            "Nest.js",
            "SUpabase",
            "Postgres SQL",
            "Shadcn UI",
            "Vercel",
            "AWS"
        ],
        features: [
            "Vault for document managemen",
            "External Access for document reviews",
            "AI Employee Schedule Generation",
            "AI Base SOP and Policy Query",
            "Role based access control",
            "Audit trail",
            "Notification system",
            "Calendar for scheduling",
            "Reporting & Analytics"
        ],
        image: "/hgrid.png",
        demoUrl: "https://www.hgrid.co/",
        images: []
    },
    {
        id: "5",
        title: "Sync",
        subtitle: "AT Spurt I worked as a Backend Engineer where I collaborated on the Sync project. Sync is a platform that has an all in one tool kit for project management, where users can build teams and manage processess to achieve your business goals",
        description: "Sync is an all-in-one project management toolkit which is part of the spurtx ecosystem. It is a platform designed to empower teams and streamline workflows. It provides a comprehensive platform where users can build and manage teams, organize projects, track progress, and collaborate seamlessly to achieve their business objectives. With a focus on efficiency and collaboration, Sync offers tools to manage processes from inception to completion, ensuring that every team member is aligned and working towards common goals.",
        challenge: "The core challenge was to develop a robust and intuitive platform that could serve as an all-in-one solution for project management, catering to diverse team structures and project complexities. This involved integrating various functionalities like task management, team collaboration, progress tracking, and reporting into a cohesive and user-friendly interface. Ensuring scalability and high performance for concurrent users and multiple projects was also a significant consideration.",
        solution: "We engineered Sync as a comprehensive project management platform, leveraging a powerful backend built with Nest.js to handle complex logic and API integrations. For the database, we utilized PostgreSQL, ensuring data integrity and scalability. The frontend was developed using React, providing a dynamic and responsive user experience. This tech stack allowed us to create a highly functional and efficient platform that empowers teams to manage projects effectively. For my role I extensively contributed on the backend by developing and maintaining several critical microservices, including those responsible for user authentication, project creation and management, and real-time collaboration features. I focused on building scalable APIs, optimizing database queries, and ensuring the security and integrity of data within the platform.",
        features: [
            "Team Management",
            "Project Tracking",
            "Task Management",
            "Milestone Mnagement",
            "Wallets",
            "Dao (Blockchain based feature for bidding for projects and getting paid in crypto tokens)",
            "Real-time Collaboration",
            "Reporting and Analytics",
            "AI Integration to Project Creation",
            "AI Integration to Task CReation",
            "AI Integration to Milestone Creation",
            "Payments (Fincra, Stripe)"
        ],
        tags: [
            "TypeScript",
            "Nest.js",
            "Gemini API",
            "PostgresSQL",
            "Jest",
            "Docker",
            "AWS",
            "GCP"
        ],
        image: "/sync.png",
        demoUrl: "https://teamsync.tools/",
        images: []
    },
    {
        id: "6",
        title: "Score",
        subtitle: "At Spurt I worked as a Backend Engineer where I was tasked with building Score which is the version 2 of an already existing product named Core. Core was written in PHP I was tasked to start up new project called Score to mirrior the features on core with newer features but now to be written in TypeScript. Score is a platform which consulatnts, business owners or agencies use to manage invoices, bookings, newsletter, etc to run thier business more efficently and professionally.",
        description: "Score is a comprehensive platform designed for consultants, business owners, and agencies to efficiently manage their operations. It provides a suite of tools for handling invoices, bookings, newsletters, and other essential business processes. The platform aims to enhance professionalism and streamline daily tasks, allowing users to focus on growth and client satisfaction. This project was a re-imagining of an existing product, 'Core' (originally built with PHP), with the goal of migrating its features and introducing new functionalities using modern TypeScript technologies.",
        challenge: "The primary challenge was to re-architect and rebuild an existing PHP-based product ('Core') into a modern TypeScript application ('Score') while mirroring its core functionalities and introducing new features. This involved migrating complex business logic, ensuring data integrity during the transition, and designing a scalable and maintainable system. A key aspect was to improve performance, enhance security, and provide a more robust foundation for future development, all while minimizing disruption to existing users.",
        solution: "As a Backend Engineer, I was instrumental in developing 'Score' using Nest.js for a modular and scalable backend architecture, with TypeScript ensuring type safety and code quality. We utilized PostgreSQL as the primary database for its reliability and robust data management capabilities. The development process incorporated Jest for comprehensive testing, ensuring the stability and correctness of the new system. Docker was used for containerization, facilitating consistent development and deployment environments. The application is deployed on AWS and GCP, leveraging their cloud services for high availability and scalability. My contributions focused on designing and implementing critical backend services, including invoice management and booking systems, ensuring a seamless transition and significant performance improvements over the legacy system. After deploying the invoices and booking features another developer was assigned to work on the newsletter and other features.",
        tags: [
            "TypeScript",
            "Nest.js",
            "PostgresSQL",
            "Jest",
            "Docker",
            "AWS",
            "GCP"
        ],
        features: [
            "Automated Invoicing Tool",
            "Client Bookings",
            "Reporting & Analyics"
        ],
        image: "/score.png",
        demoUrl: "https://staging--spurt-score.netlify.app/",
        images: []
    },
    {
        id: "7",
        title: "CvtoCareer",
        subtitle: "At CvtoCareer I work as a Full Stack Developer and Engineering Lead where I managed and deployed features on the existing cvtocareer website, later being promoted to the Engineering lead I oversaw the codebase restructure to break out the client and admin interfaces into different codebases to allow for beter managing, scalability and maintainability. Cvtocareer platform provides users with tools like expert guidance, automation and career building to navigate job market seamlessly",
        description: "CvtoCareer is a comprehensive platform designed to empower job seekers with expert guidance, automation tools, and career-building resources to seamlessly navigate the competitive job market. As a Full Stack Developer and later Engineering Lead, I was responsible for managing and deploying features on the existing platform. My promotion to Engineering Lead led me to oversee a significant codebase restructuring, separating the client and admin interfaces into distinct codebases. This strategic decision aimed to improve manageability, scalability, and maintainability, ensuring the platform could evolve efficiently to meet user demands and business objectives.",
        challenge: "The primary challenge was managing a monolithic codebase that combined both client-facing and administrative functionalities, leading to difficulties in scaling, maintaining, and deploying new features efficiently. As the platform grew, the intertwined nature of the code created bottlenecks, increased the risk of introducing bugs, and made it challenging for development teams to work independently on different parts of the application. Ensuring a seamless user experience for job seekers while providing robust tools for administrators required a more modular and scalable architecture.",
        solution: "To address the challenges, I spearheaded a major codebase restructuring, breaking down the monolithic application into separate client and admin interfaces. The client-side application was developed using Next.js and Material UI, deployed on Vercel, to provide a fast, responsive, and user-friendly experience for job seekers. For the backend, we utilized Redis for caching and MongoDB for flexible data storage, ensuring high performance and scalability. The admin interface was also built with Next.js and Material UI, but maintained in a distinct codebase to allow for independent development, deployment, and scaling. This separation significantly improved manageability, reduced deployment risks, and enhanced overall system maintainability, allowing the team to deliver new features more rapidly and reliably. My role involved overseeing the architectural design, guiding the development teams, and ensuring a smooth transition to the new modular structure.",
        tags: [
            "Next.js",
            "Material UI",
            "Vercel",
            "Redis",
            "MongoDB",
            "TypeScript",
            "Gemini API",
            "Open AI API"
        ],
        features: [
            "Client side interface",
            "Admin side interface",
            "AI CV Revamp",
            "AI Job Roles Propoal",
            "Payments (Stripe, Paypal)",
            "Reporting & Analytics",
            "Calender Booking with Coaches"
        ],
        image: "/cv.png",
        demoUrl: "https://www.cvtocareer.com/",
        images: []
    },
    {
        id: "8",
        title: "SpurtX",
        subtitle: "At Spurt while working as a Backend Engineer I also worked on the Backend for the SpurtX eco system that houses all other features like sync, score, spark, etc. Majorly what I integrated was a SSO for a centralissed signup, login and onboarding process into the eco system also integrating google and microsoft auth",
        description: "SpurtX is the overarching ecosystem that integrates various products like Sync, Score, and Spark. As a Backend Engineer at Spurt, I was responsible for developing and integrating the Single Sign-On (SSO) system and subscriptions for SpurtX. This involved creating a centralized authentication and authorization service that allowed users to sign up, log in, and onboard seamlessly across all products within the ecosystem. A key part of this role was also integrating Google and Microsoft authentication providers to offer users convenient and secure login options and also subsciptions with Stripe. This centralized approach significantly improved user experience and streamlined the management of user identities across the entire SpurtX platform.",
        challenge: "The main challenge was to implement a robust and secure Single Sign-On (SSO) system for the entire SpurtX ecosystem, which comprises multiple distinct products like Sync, Score, and Spark. This involved designing a centralized authentication and authorization service that could seamlessly integrate with existing and future applications, ensuring a consistent user experience while maintaining high security standards. Additionally, integrating third-party authentication providers like Google and Microsoft, and managing subscription services across the ecosystem, added layers of complexity in terms of data synchronization, user provisioning, and payment processing.",
        solution: "As a Backend Engineer, I was responsible for designing and implementing the SSO system for SpurtX. I developed a centralized authentication service using Python and Flask, leveraging PostgreSQL for robust user data management. This service handled user registration, login, and session management across all SpurtX products. I integrated Google and Microsoft OAuth for seamless third-party authentication, enhancing user convenience and security. Furthermore, I implemented the subscription management system using Stripe, allowing for flexible payment plans and automated billing across the ecosystem. Docker was utilized for containerization, ensuring consistent deployment environments, and the services were deployed on AWS, leveraging its scalable infrastructure. My work ensured a unified and secure access point for all SpurtX users, significantly improving the overall user experience and operational efficiency.",
        tags: [
            "Python",
            "Flask",
            "PostgresSQL"
        ],
        features: [
            "SSO",
            "Subscription Payments for tthe Eco System (Stripe)"
        ],
        image: "/spurt.png",
        demoUrl: "https://www.spurtx.tools/",
        images: []
    },
    {
        id: "9",
        title: "Fundamental Analysis",
        subtitle: "As a side project I decided to build a simple website application that retrieves forex fundamental news and sentiments and roceesds to determine the direction wether a currency was bullish or bearish using the fundamentals data",
        description: "A simple web application that retrieves forex fundamental news and sentiments, then processes this data to determine whether a currency pair is likely to be bullish or bearish based on the fundamental analysis. This project aims to provide a quick and insightful overview of market direction using AI-powered sentiment analysis of economic news.",
        challenge:"The primary challenge was to accurately process and interpret real-time forex fundamental news and sentiment data to predict currency direction (bullish or bearish). This involved integrating with various news sources, performing natural language processing (NLP) for sentiment analysis on financial text, and then developing a robust algorithm to translate this sentiment into actionable currency predictions. Ensuring the accuracy and timeliness of these predictions, given the volatile nature of the forex market, was a significant hurdle.",
        solution: "I developed this application using Next.js for a fast and responsive frontend, with Tailwind CSS for efficient styling. The core of the application leverages the Gemini API for advanced natural language processing and sentiment analysis of financial news articles. This AI integration allows the system to understand the nuances of economic reports and central bank statements, translating complex information into clear bullish or bearish signals for various currency pairs. The application fetches real-time news, processes it through the AI model, and then displays the predicted currency strength, providing users with a data-driven perspective on market fundamentals.",
        tags: [
            "Next.js",
            "Tailwind",
            "Gemini API",
            "TypeScript"
        ],
        features: [
            "Currency strength prediction"
        ],
        image: "/fund.png",
        demoUrl: "https://fundamentals-sentiment-analysis.vercel.app/",
        repoUrl: "https://github.com/yhtiee/Fundamentals-Sentiment-Analysis",
        images: []
    },
    {
        id: "10",
        title: "Job Application Automation Engines",
        subtitle: "At CvtoCareer I also worked as an Automeyion & Webscraping Engineer where I was tasked with maintaining and adding new features to existing engines used for automating job application process on seek, Linkedin, Jobserve and Indeed websites. I later went on to build and oversee the building of more engines for adzuna, reed, careerone, jora, monster, cv-libray, micheal page and randstad sites.",
        description: "At CvtoCareer, I served as an Automation & Web Scraping Engineer, responsible for maintaining and enhancing existing engines that automated job application processes on platforms like Seek, LinkedIn, Jobserve, and Indeed. My role evolved to include leading the development and overseeing the creation of new automation engines for additional job boards such as Adzuna, Reed, CareerOne, Jora, Monster, CV-Library, Michael Page, and Randstad. These engines are critical for streamlining the job application experience, enabling users to apply to multiple positions efficiently and effectively.",
        challenge: "The primary challenge was to develop and maintain robust, scalable, and resilient web scraping and automation engines capable of interacting with numerous diverse job board websites (e.g., Seek, LinkedIn, Indeed, Adzuna, Reed, etc.). Each website presented unique challenges, including varying HTML structures, dynamic content loading, anti-bot mechanisms (CAPTCHAs, IP blocking, rate limiting), and frequent layout changes. Ensuring the engines could reliably navigate these complexities, extract relevant job data, and automate application submissions without detection or errors, while handling large volumes of data and maintaining high uptime, was a continuous and significant engineering hurdle.",
        solution: "To overcome these challenges, I utilized a combination of advanced web scraping and automation technologies. Python was the primary language for engine development, leveraging libraries such as Selenium and Playwright for browser automation, allowing for interaction with dynamic JavaScript-rendered content. To bypass anti-bot measures, I implemented sophisticated strategies including proxy rotation, CAPTCHA solving integrations, and intelligent request throttling. Data persistence was managed using a mix of MySQL, PostgreSQL, and MongoDB, chosen based on the specific data structure and scalability requirements of each engine. All engines were containerized using Docker for consistent deployment and scalability, and hosted on Digital Ocean, providing a flexible and robust infrastructure for managing a large fleet of automation processes. My role involved continuous monitoring, adaptation to website changes, and the development of modular, resilient code to ensure uninterrupted operation and efficient job application automation.",
        tags: [
            "Python",
            "Selenium",
            "Playwright",
            "MySQL",
            "PostgresSQL",
            "MongoDB",
            "Digital Ocean",
            "Docker"
        ],
        features: [
            "Proxy Switching",
            "Captcha Solving",
            "Anti Bot Bypass Strtegies",
        ],
        image: "/auto.png",
        images: [
            "/SEEK.svg",
            "/Linkedin.svg",
            "/Jobserve.svg",
            "/Indeed.svg"
        ]
    },
];