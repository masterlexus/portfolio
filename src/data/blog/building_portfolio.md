---
title: 'Building This Portfolio'
date: '2026-02-28'
excerpt: 'How I built a developer portfolio in an afternoon with claude'
tags: ['React', 'TypeScript', 'Claude']
---

# A Litle Background

I finally decided it was time for me to have my own portfolio website showcasing my accomplishements.

I've recently been getting some experience working with Claude and Claude-Code and decided to see how it will perform building my portfolio website from the ground up

# The process

I booted up Claude (the website) and launched a research mode agent with the simple prompt:

"I am going to build my portfolio website. I am a computer scientist, more details about me are in the life.md. Please make a full plan of how my portfolio website should be built. I want it to be in typescript react, with a dockerized setup (such that I can easily deploy it). The plan should be detailed enough that a claude code agent can build the whole portfolio website from the plan."
[with details of my accomplishments and education attached in a file called life.md]

The agent then had me answer the following questions:

"Q: What visual style / aesthetic?
A: Dark & techy (terminal/hacker vibe). But it should also be very minimal. It should have a light mode/dark mode toggle

Q: Which extra features do you want? (Select all that apply)
A: Dark/light mode toggle, Downloadable CV (PDF), Blog section, Timeline section

Q: Where will you deploy?
A: Not sure yet"

around 10minutes later I had in my hands a 800 line build plan markdown file with intricate details about concepts ranging from Typography/Color Palette to the Tech Stack & Tooling. This was going great. Now from my experience with using generative AI tools I know that their performace decreases fast as context grows so prompted claude to:

"read @portfolio_website_build_plan.md and make multiple smaller implementation plans that can be implemented incrementally."

The result was a 7 phase plan. From here on out for each phase I had Claude-Code plan how he would do the phase and then clear the context and have him execute the plan he just created. This approach worked like magic as I barely had to intervene in during the whole process.

## The Stack

The main tech stack is the following:

- **React 19** with TypeScript for type safety and component composition
- **Vite** for instant dev feedback and optimized builds
- **TailwindCSS** with CSS custom properties for a seamless dark/light theme system
- **Framer Motion** for subtle, non-distracting animations

## What I Learned

Building is easier than ever but we must not stop forget how to build ourselves and yearning for knowledge.

## Notes

I will try to keep all texts human generated (written by me) as I hate reading posts where every single word is AI generated and people play it off as theirs when they post it. However AI sure is very handy for writing front-end code (and backend but it requires more overview) so I will be using AI to speed up development process and maintaining this website.
