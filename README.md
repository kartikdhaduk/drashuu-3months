# For Drashti — three months above the clouds

A small site, written like a letter.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Make it yours

Look for `IMAGE_SLOT` comments in the components — those are the spots
ready for real photos.

- `components/Chapter3.tsx` — drop a photo of you and a photo of Drashti
  into the two video-call frames (`/public/images/you.jpg`,
  `/public/images/drashti.jpg`, then swap the placeholder divs for `<img>`).
- Add an instrumental at `/public/music/song.mp3` to enable the music
  toggle (top-right). If the file isn't there, the toggle hides itself.
- All written text lives inside the `components/Chapter*.tsx` files —
  edit anything you want to make it more *yours*.

## Structure

- `app/page.tsx` — orchestrates all chapters
- `components/Opening.tsx` — sky / airplane / Instagram request hook
- `components/Chapter1.tsx` — the flight, the request
- `components/Chapter2.tsx` — every single day (chat + 90-day counter)
- `components/Chapter3.tsx` — Surat ↔ Toronto, first video call
- `components/Chapter4.tsx` — the Titan Raga moment (emotional peak)
- `components/Chapter5.tsx` — chocolates, nicknames
- `components/Chapter6.tsx` — you, the quiet kind
- `components/FinalChapter.tsx` — three months, just the start
- `components/Ending.tsx` — "Yes ❤️" → reveal

Built with Next.js, Tailwind, and Framer Motion.
