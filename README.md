# ZERO RISK

ZERO RISK is a multilingual digital platform for emergency, health, safety, and risk management knowledge. The project brings together a trilingual terminology dictionary, safety guidelines, emergency authority information, and educational resources in Arabic, English, and Spanish.

The platform is designed to support students, professionals, translators, and anyone who needs clear terminology and practical guidance in emergency and disaster risk contexts.

## Project Mission

Our mission is to provide a reliable and accessible source of knowledge that raises awareness, improves the use of emergency terminology, and supports better communication and response during emergency situations.

## Supported Languages

- Arabic
- English
- Spanish

Each language has its own localized interface, direction, content, and navigation.

## Current Features

- Trilingual emergency terminology dictionary
- Search section for Arabic, English, and Spanish terms
- Localized home page content
- Project and mission section based on the selected language
- Safety and emergency guidelines
- Emergency authorities directory
- Common mistakes section
- Dictionary cover showcase
- PDF cover access
- Responsive design for desktop and mobile
- Light and dark theme support
- Vercel-ready Next.js deployment

## Dictionary Showcase

The home page includes a showcase for the dictionary cover. Users can view the cover and contact ZERO RISK through the official Instagram account to purchase the full version:

https://www.instagram.com/zeroriskk

## Planned AI Features

ZERO RISK is planned to grow into a smarter emergency knowledge assistant. Upcoming AI features may include:

- AI chatbot assistant for emergency, health, and risk management questions
- Smart explanations of technical terms in Arabic, English, and Spanish
- Context-aware suggestions while searching the dictionary
- AI-assisted terminology comparison between the three languages
- Guided safety recommendations based on the selected topic
- Better support for students and professionals through interactive learning tools

## Planned TTS Features

The search section will also be expanded with a Text-to-Speech model that works across the three supported languages:

- Arabic pronunciation
- English pronunciation
- Spanish pronunciation
- Audio playback for dictionary terms
- Audio playback for definitions or safety guidance
- Accessibility improvements for users who prefer listening

## Future Roadmap

- Add AI chatbot assistant
- Add trilingual TTS support in the search section
- Improve dictionary filters and categories
- Add favorite terms and saved searches
- Add downloadable or purchasable dictionary access flow
- Add more emergency authorities and contact details
- Add richer safety guideline pages
- Add admin tools for updating content
- Improve SEO and social sharing metadata
- Add analytics for search trends and content usage

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint
- Vercel

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Builds the production version of the app.

```bash
npm run start
```

Starts the production server after building.

```bash
npm run lint
```

Runs ESLint checks.

```bash
npm run prepare:data
```

Parses the dictionary source data and prepares the app dictionary JSON.

## Project Structure

```text
app/
  [locale]/
    page.tsx
    guidelines/
    authorities/
    common-mistakes/
  api/
    assets/
components/
data/
lib/
public/
scripts/
```

## Localization

The app supports locale-based routing:

```text
/ar
/en
/es
```

Localization strings are managed in:

```text
lib/translations.ts
lib/i18n.ts
```

## Deployment

The app is ready to deploy on Vercel.

Recommended setup:

1. Push the project to GitHub.
2. Connect the GitHub repository to Vercel.
3. Set the production branch to `main`.
4. Deploy the project.

After connecting GitHub to Vercel, every push to `main` will trigger a new production deployment.

## Status

ZERO RISK is under active development. The current version focuses on multilingual content, dictionary search, safety guidance, emergency authority information, and a polished public interface. AI-powered assistance, TTS, and additional intelligent features are planned for future versions.

## Contact

Instagram:

https://www.instagram.com/zeroriskk
