This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev

## Structure

Created with Next.js App router.
Interactive components are all saved within /ui.
Custom Tailwind classes have been saved in globals.css. Logo colours saved in tailwind.config.ts.

## What works?

Creating an event using autocracy mode and the 'I know where' location option. (maps api key willing).

The unique link that router.push() uses is the same as what gets saved as the _id for the event database entry (passed down by the Home component uuid() function).
Note middleware.ts in /root - it sets a custom header to page requests so that the app/[eventpage] server-side component can read the URL string properly via headers(). 

API keys are required to make the maps iframe embedding work, just add your key to the url that gets called as the src value.

## What doesn't work?

Login buttons do nothing.
Democracy mode does nothing.
'I want help' location option does nothing.