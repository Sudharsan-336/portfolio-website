import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects: Array<{
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
}> = [
    {
      title: "ATM Simulation System",
      description: "It is a console-based Java application that simulates real-world ATM operations. It allows users to securely manage bank accounts, perform transactions, and maintain a basic banking workflow using file-based data storage.",
      image: "ATM-System.png",
      github: "https://github.com/Sudharsan-336/ATM-Simulation-System.git",
      live: "",
    },
    {
      title: "QR Code Generator",
      description: "It is a simple web-based application that generates QR codes from user input, such as text or URLs. It allows users to instantly create and view QR codes through a clean and interactive interface.",
      image: "QR-Generator.png",
      github: "https://github.com/sudharsan-336/QR-Code-Generator",
      live: "https://qr-code-generator-dev.vercel.app/",
    },
    {
      title: "Text To Speech Converter",
      description: "It is a web-based Text-to-Speech converter built using HTML, CSS, and JavaScript. It uses the Speech Synthesis API to convert written text into spoken voice. Users can type text, select different voices, and listen to the output in real time.",
      image: "Text-to-Speech.png",
      github: "https://github.com/sudharsan-336/Text-to-Speech-Converter",
      live: "https://text-to-speech-converter-web.vercel.app/",
    },
    {
      title: "Random Password Generator",
      description: "It is a web-based application that generates strong 12-character passwords using uppercase, lowercase, numbers, and symbols with JavaScript, and includes a copy-to-clipboard feature with a simple and user-friendly interface.",
      image: "password-generator.png",
      github: "https://github.com/sudharsan-336/Random-Password-Generator",
      live: "https://random-password-generator-web.vercel.app/",
    },
    {
      title: "Quote Generator",
      description: "It is a web-based Quote Generator built using HTML, CSS, and JavaScript that fetches random quotes from an API, displays the quote along with the author, allows users to generate new quotes dynamically, and includes a feature to share quotes directly on Twitter.",
      image: "Quote-Generator.png",
      github: "https://github.com/sudharsan-336/Quote-Generator.git",
      live: "https://quote-generator-dev.vercel.app/",
    },
    {
      title: "To-Do List",
      description: "It is a web-based application built using HTML, CSS, and JavaScript. It allows users to add, delete, and mark tasks as completed dynamically. The app uses DOM manipulation to update the task list in real time without page reload. It provides a simple and user-friendly interface to manage daily tasks efficiently.",
      image: "To-Do.png",
      github: "https://github.com/sudharsan-336/To-Do-List",
      live: "https://to-do-checklist.vercel.app/",
    },
    {
      title: "Image Search Engine",
      description: "Built a web-based image search engine that fetches and displays images in real time using the Unsplash API. Implemented search functionality with pagination to load more images dynamically on user request. Designed a responsive grid layout to neatly display images with smooth UI interaction.",
      image: "image-generator.png",
      github: "https://github.com/sudharsan-336/Image-Search-Engine",
      live: "https://image-search-engine-dev.vercel.app/",
    },
    {
      title: "Crypto Price Tracker",
      description: "It is a web-based Cryptocurrency Price Tracker built using HTML, CSS, JavaScript, and jQuery. It fetches real-time cryptocurrency data from the CoinGecko API. The application displays live prices of Bitcoin, Ethereum, and Dogecoin in USD.",
      image: "crypto.png",
      github: "https://github.com/Sudharsan-336/Chatbot-AI.git",
      live: "#",
    },
    {
      title: "Weather Application",
      description: "It is a web-based Weather Application built using React, HTML, CSS, and JavaScript. It fetches real-time weather data from the OpenWeatherMap API based on user input. The app displays temperature, humidity, wind speed, and weather conditions with icons.",
      image: "Weather-App.png",
      github: "https://github.com/sudharsan-336/Weather-Application",
      live: "https://weather-application-dashboard.vercel.app/",
    },
    {
      title: "AI Chatbot",
      description: "Built a full-stack AI chatbot that provides real-time responses using Google Gemini AI with a modern UI. Implemented secure backend APIs with Node.js and MongoDB for fast and scalable performance. Designed a responsive interface using Tailwind CSS for smooth user experience across devices.",
      image: "GPT.png",
      github: "https://github.com/Sudharsan-336/Chatbot-AI.git",
      live: "#",
    },
  ];

export default function Projects() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl xl:max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-12 md:mb-16 px-2"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text pb-2">
            My Projects
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground pt-1 max-w-2xl mx-auto">
            A showcase of my recent work and experiments
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-7 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="glass-card border-border overflow-hidden group h-full flex flex-col backdrop-blur-xl">
                <div className="relative overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${encodeURI(project.image)}`}
                    alt={project.title}
                    className="w-full h-48 sm:h-52 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl gradient-text">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Source Code
                      </a>
                    </Button>

                    {/* Show Live button only if link exists */}
                    {project.live && (
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}