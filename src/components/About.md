## Welcome to BPM Tools!

This is an app aimed at helping electronic music producers and especially those without a strong music background.

Contents:

[What does this app do?](/about#what-does-this-app-do)

[How does this app work?](/about#how-does-this-app-work)

[Technical Information & Implementation](/about/#technical-information--implementation)

### What does this app do?
Currently this app has five tools. More tools and features will likely be added later.

The first section provides a tool for producers to ensure all of the notes they are using musically exist in the same scale. Those without a strong music background, myself included, can find the entire piano roll intimidating since some notes sound "in", some sound "out", and some can be fuzzy. By choosing a specific scale, this application provides the musical notes and tonic that are following structured musical rules to ensure music is produced in key.

The second, third, and fourth tools provides exact timings for a variety of beat subdivisions. For anyone producing electonic music, there is a constant fight against perfectly quantized sounds and processing. It is a fine line to walk between rhythms that are "on" beat in a human way vs. sounding out of sync. And this constrasts with being exactly robotically in perfect syncronization all the time. This delay calculator will allow users to dial in values on their delays and reverbs on analog or virtual DAW instruments that are very nearly in sync with the tempo of their tracks, but finetune their rhythms for more humanization. This can be effective for adding swing or controlling reverb so that it doesn't drown out sounds directly on beat. These timings are also useful for dynamic processing such as compression.

### How does this app work?

Musical modes and scales are predictable patterns and as a result, this app does not have any combinations of tonic or root keys hard coded. Instead, my approach was to design this application like a caesar cipher encryption where the various modes and keys are shifted along the piano roll to modulate the scale patterns.

The delay calculator is a function of 60,000 milliseconds divided by the BPM. This provides the duration of a single beat and it is then multiplied or subdivided to achieve the time of specific notational duration.

### Still to do:
- Clean up the styling
-- Modify EQ range per note chart

### Wishlist items:
- Provide pianoroll overlay
- Add a drag n drop chord progression builder

### Technical Information & Implementation:
NEED TO WRITE THIS!

FUTURE IMPLEMENTATIONS:
Perhaps one day this very application will be available to run as a mobile app.