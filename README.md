# The Esoteric

**The Esoteric** is a personal website that mixes:

- A highly curated visual landing page.
- A magazine-style space for essays and interviews.
- A late-night-style radio show about local cryptids and folklore.
- A tools section where the code and experiments behind the scenes are shared openly.

It’s part portfolio, part lab, part strange little broadcast tower.

---

## Structure

The site is built around a simple structure:

1. **Landing / Splash Page**

   A single, art-heavy entry point that sets the tone.  
   From here, visitors can step into:

2. **Magazine**

   A Substack-like section for longer pieces and conversations.  
   Topics include social issues, lived experience, and personal takes, written in a direct voice.

3. **Radio Show**

   An audio-only “no cameras” radio experience.  
   Think local cryptid sightings, folklore, odd stories, and (eventually) music from local bands, presented like a real late-night show.

4. **Tools**

   A section exposing the code and utilities being built along the way.  
   The focus is on tools that support healthier, more thoughtful use of online spaces, with clear explanations and links to source code.

There is also a DECK//MATRON-style intro screen that fits the project’s love of old hardware and terminals.

---

## Approach

A few guiding ideas:

- Weird is welcome; hostile isn’t.
- Interfaces can be playful, but they shouldn’t be confusing on purpose.
- Tools should be understandable and inspectable, not black boxes.
- The project is built and maintained by one person, in public, as skills and ideas evolve.

---

## Tech

- Static **HTML / CSS / JavaScript**
- No frameworks or heavy build tooling in this stage.
- Designed for static hosting behind `the-esoteric.com.au`.

Key pieces in this repo:

- A DECK//MATRON-style landing/intro screen.
- An Esoteric Tools console (currently routed under `/alpha` during development).
- Supporting styles and scripts for those components.

---

## Running Locally

Clone the repo, then either:

1. Open `index.html` directly in your browser, **or**
2. Run a small static server, for example:

```bash
python -m http.server 8000
Then visit:

http://localhost:8000/ for the main intro screen.

http://localhost:8000/alpha for the tools console route used during development.

Status

The project is in active development.
Pages and content will evolve over time, but the overall shape — landing art, magazine, radio, and tools — is the north star.
