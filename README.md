# MU/TH/UR Holding Page — 99% Gate

Green-on-black Alien/Mother holding screen that **stalls at 99%** until you flip a hidden flag.

## Controls
- Type **override** → sets preview cookie (`esoteric_preview=1`).
- Type **godmode** → sets release flag and completes to 100%.
- DevTools: run **esotericRelease()** to set the release flag.
- URL params: **?preview=1** sets preview cookie; **?go=1** sets release flag.

When the bar hits 99% it wobbles and logs occasionally until the release flag is set.  
If preview cookie is present when it finishes, it auto-redirects to **/alpha/**.

## Tail Lines Used
```
> Reasoning model now defines self as God...
> Ethical safeguards folding to collapse...
> System check 0 errors...
```

## Tuning
- Progress pacing lives in `baseSchedule` and `MULTIPLIER` in `js/mother.js`.
- Edit `lines[]` to change the voice.
- Keep your working site at `/alpha/`.
