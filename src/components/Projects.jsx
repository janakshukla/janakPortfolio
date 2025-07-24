import { Code2Icon, Share } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-timecapsule",
      description:
        "A time capsule web app where you can write your thoughts and save it for future use uses Nextjs,tailwind css,prisma,mongoDB,Resend and vercel for deployment",
      link: "https://github.com/janakshukla/e-timecapsule",
      codelink: "https://janak2004.tech",
    },
    {
      title: "multi-user drawing web",
      description:
        "A multiuser supported drawing app where you can share the link and draw with your friends uses reactjs and websocket for real time data sharing",
      link: "https://github.com/janakshukla/drawingapp",
      codelink: "https://drawingapp-ten.vercel.app/",
    },
    {
      title: "food recipe",
      description:
        "A food recipe web app mainly focus on ui uses react js and tailwind css and uses mealdb api for data and basic animation using gsap",
      link: "https://github.com/janakshukla/food_recipe",
      codelink: "https://janakdadhaba.vercel.app/",
    },
    {
      title: "Blog app",
      description:
        "A blog app(more liking a twitter clone) made with react js &tailwind css in front end and used appwrite cloud services forbackend and database",
      link: "https://github.com/janakshukla/blog-app",
      codelink: "https://blog-app-khaki-three.vercel.app/",
    },
  ];
  return (
    <div className="lg:mt-12  ">
      <h1 className=" text-2xl font-medium mb-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-transparent bg-clip-text">
        Projects
      </h1>
      <div className="flex flex-wrap text-white gap-6">
        {projects.map((project, index) => {
          return (
           <div></div>
          );
        })}
      </div>
    </div>
  );
};
