# Boxy Foundry

Built this for a typography challenge. The goal was to draw a custom font from scratch and then build a website that actually represents it well.

Meet **Boxy Regular** a raw, geometric typeface I mapped out using Caligraphr.

Instead of a boring, standard corporate typography site, I went full Neo-Brutalist with the design. Thick borders, chaotic colors, hard drop shadows, and a massive interactive UI. It's loud, but that's the point.

## what's inside?

* **Massive Hero Section:** complete with a scrolling CSS marquee and a floating sticker badge (removed for now).
* **Live Type Tester:** fully interactive text area where you can type your own stuff and tweak size, leading, and tracking to see how it handles
* **Character Map:** CSS grid showing off glyph, number, and symbol in the font (not complete)
* **Direct Download:** grab the raw `.otf`/`.ttf` file

## tech stack

* **React** (with Vite)
* **Tailwind CSS v4** for utility styling, layered on top of raw CSS custom properties for the brutalist theming (borders, shadows, colors).

## running it locally

If you want to clone this and mess around with the code or swap in your own font, it's super easy.

1. Clone the repo:
```bash
git clone https://github.com/armansinghh/typeface-font1.git

```


2. Navigate into the directory:
```bash
cd typeface-font1

```


3. Install the dependencies:
```bash
npm install

```


4. Start the dev server:
```bash
npm run dev

```


5. Open up `http://localhost:5173` in your browser.

## license

The font and the code are free to use for personal or commercial projects. Just don't resell the raw font file. Have fun with it!