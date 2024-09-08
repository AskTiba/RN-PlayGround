// onboardingData.ts

import { ReactNode } from "react";

// import WelcomeImage from "@assets/svgs/welcomeImage";
// import EventsImage from "@assets/svgs/eventsImage";
// import CommunityImage from "@assets/svgs/communityImage";
// import ProgressImage from "@assets/svgs/progressImage";
// import LearnImage from "@assets/svgs/learnImage";
// import CompeteImage from "@assets/svgs/competeImage";
import StartImage from "@assets/svgs/startImage";
import React from "react";

// Define an interface for the onboarding slide data
export interface OnboardingSlide {
  id: string; // Unique identifier for each slide
  title: string; // Title of the slide
  description: string; // Description of the slide
  image?: React.ReactElement; // Update to accept a React element
  cta: string; // Call-to-action text
}

// Exporting an array of objects that can be used in a carousel
export const onboardingData: OnboardingSlide[] = [
  {
    id: "1",
    title: "Welcome to Uganda Chess Federation",
    description:
      "Your gateway to all things chess in Uganda. Connect, learn, compete, and stay updated with the latest chess events.",
    // image: WelcomeImage ,
    cta: "Swipe to get started",
  },
  {
    id: "2",
    title: "Chess Tournaments & Events",
    description:
      "Never miss a move! Get real-time updates on upcoming tournaments, events, and results from across Uganda.",
    // image: EventsImage ,
    cta: "Learn More",
  },
  {
    id: "3",
    title: "Connect with Fellow Chess Players",
    description:
      "Join a vibrant community of chess enthusiasts. Find opponents, share strategies, and grow your skills.",
    // image: CommunityImage ,
    cta: "Explore Community",
  },
  {
    id: "4",
    title: "Track Your Chess Journey",
    description:
      "Monitor your games, review your performance, and see how you stack up against others in the Federation.",
    // image: ProgressImage ,
    cta: "Start Tracking",
  },
  {
    id: "5",
    title: "Learn from the Best",
    description:
      "Access tutorials, tips, and resources from top players to improve your game.",
    // image: LearnImage ,
    cta: "Start Learning",
  },
  {
    id: "6",
    title: "Compete in Tournaments",
    description:
      "Showcase your skills in local and national tournaments. Climb the ranks and earn recognition.",
    // image: CompeteImage ,
    cta: "Join a Tournament",
  },
  {
    id: "7",
    title: "Ready to Play?",
    description:
      "Dive into the world of chess. Start your journey with the Uganda Chess Federation today!",
    // image: <StartImage />,
    cta: "Get Started",
  },
];
