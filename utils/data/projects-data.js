import ayla from "/public/image/ayla.jpg";
import eduvision from "/public/image/eduvision.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "EduVision - Online Examination System Project",
    description: `This web application streamlines management for educational institutions of all sizes, including private centers and schools. Technical Highlights: Built with ASP.NET Core MVC for a robust and scalable architecture; Beautiful, intuitive interface with multi-language support (more than 3 languages); Optimized for various devices, ensuring a smooth user experience.`,
    tags: ["ASP .NET Core MVC (.NET 6)"],
    tools: [
      "C#",
      "MSSQL",
      "HTML",
      "JavaScript",
      "CSS",
      "Bootstrap",
      "jQuery",
      "C#-LINQ",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "https://eduvision.id.vn/",
    image: eduvision,
  },
  {
    id: 2,
    name: "Travel Agency App",
    description:
      "I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.",
    tags: [],
    tools: [
      "NextJS",
      "Tailwind CSS",
      "Google Maps",
      "NestJS",
      "TypeScript",
      "MySQL",
      "AWS S3",
      "Sun-Editor",
      "Gmail Passkey",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "https://eduvision.id.vn/",
    image: travel,
  },
  {
    id: 3,
    name: "AI Powered Real Estate",
    description:
      "My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.",
    tags: [],
    tools: [
      "React",
      "Bootstrap",
      "SCSS",
      "Stripe",
      "Express",
      "TypeScript",
      "MongoDB",
      "Azure Blob",
      "OpenAI API",
      "Replicate AI",
      "Cronjob",
      "JWT",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "https://eduvision.id.vn/",
    image: realEstate,
  },
  {
    id: 4,
    name: "Newsroom Management",
    description:
      "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    tags: [],
    tools: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
    code: "",
    demo: "https://eduvision.id.vn/",
    image: ayla,
    role: "Full Stack Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
