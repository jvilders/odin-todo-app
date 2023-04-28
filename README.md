# Restaurant Page - Odin Project

Designed a small page for a fictional restaurant as part of the Odin Project's JavaScript course. The lesson's focus this time was getting experience integrating a module bundler into a project, webpack in this case. I imposed another restriction on myself: No `border-radius`! I found myself throwing it on nearly everything, so I wanted to see what I could do without it. I also chose not to use any colors outside black, white, and shades of grey, but that was more because it fit with the idea I had of the fictional restaurant. I also didn't use any custom fonts, that wasn't some self-imposes challenge to learn from, I was just lazy.

## Visit it [here](https://jvilders.github.io/odin-restaurant-page/)

## Learnings
### Overlapping grid layout

The homepage uses a grid but with overlapping areas. It's not an amazing example, but it was fun to play around with. It seems more difficult to make a responsive design with such a grid though as the positioning of grid elements is very much a top-down decision. At smaller screens, I imagine you need to layout everything all over again (probably change the number of grid rows/columns too).

### Opening hours visualization

I made a neat visualization for the opening hours on the contact page. Didn't take as long as I thought, but that's partly because there are some shortcuts: It can't close at the very last hour of the day because the selectors used in CSS won't render the ending hour pseudo-element. I considered just using flex and having three parts: pre-open, open, post-open; then giving each a `flex-grow` value proportional to the size it should have. E.g. if opening hours are 12-16, pre-open would have `flex-grow: 12`, open would have `flex-grow: 4` and post-open would have `flex-grow: 8`. I ended up not doing this because I wanted the segmented look and this would be difficult to accomplish with only three flex items.

### Webpack wasn't that scary

I was expecting it to be more painful, I'd heard webpack was a very complex bundler, but for a very simple project like this it was totally fine. Had to fix some things since I was using TypeScript, but overall no huge hurdles Good to know for future simple projects! I didn't do much with uglification/minification or setting up explicit development/production settings (for example not including sourcemaps for production), I'll leave that for when I need to care about that.
