# Introduction

This repo is where I'm going to be working on my submission for the 2025 LittleJS Game Jam for which submissions are due in about 7 days from the initial commit on this repository. I entered the Game Jam when it was launched but procrastinated on working on anything until now the day of the initial deadline. The deadline extension has short-circuited my poor time-management skills and now I'm enthusiastically going to see what I can build in a week! Let's go.

## The Idea

First off, here are the parameters of the challenge:

- **Theme**: SMALL
- **Rules**: All entries must use LittleJS Engine and be free to play in browser.
- **Deadline**: November 10th 2025 at 9:06am.

LittleJS was on my radar because I've been tinkering with it on another project called Rpg-Planet. I had considered working that game for entry into the Jam but I have lots of ambitions for that game and _SMALL_ only applies when you get real loose with definitions. Instead I tried to come up with an idea over the past month and failed to find something that sparked excitement within me to work on. I even had plans to ask a creative friend for some help brainstorming ideas, but we ended up playing VR mini-golf instead and I forgot to ask her.

Thinking back on this missed opportunity it dawned on me that mini-golf has the makings of an exceptional idea for this game jam. It takes an existing game concept and makes it smaller resulting in a similar game but one with its own identity. For example, I've never played golf but I've played tons of mini-golf and my knowledge in the latter space equates to reliable insight in the former space. In any case, the game of mini golf itself is fairly straightforward from a physics standpoint (I sense a disturbance in the force, as if I will regret these words) and suposing I were to take a minimalistic approach this all feels like something I can reasonably accomplish in a week.

The game that I'm invisioning is a representation of mini-golf. I see white bars on a black background, a la Pong. Player interaction is limited and based on the parameters of the game of golf. Essentially they're able to hit the ball and wait for it to rest or perform administrative actions (quit, restart, replay, etc.) I see a top-down view of a 2-dimensional playing field but I'm unsure if that will end up working for the full game because certain hazards require topology or a bouncing ball. For now I think I'll start 2d and maybe play in spaces that don't require that pesky 3rd dimension. Lastly, even with a 2d game I have an opportunity here to do some pretty neat physics stuff. Imagine a 2d green where most everywhere behaves as though the viewer is looking from above downward. With this layout in mind, I want to then adjust portions of the space to have gravity work differently (say being pulled down the X-axis rather than the invisible Z-axis from the top-down perspective). This is tricky to explain but visually works quite well - at least in my brain. I'm excited to see if this in particular will be possible with what I'm going to build here.

Alright, that's enough pie in the sky for now. Let's get down to business.

## Building It

I see this project as having the following component parts:

- The ball
- Striking the ball
- Ball goes into hole
- Course/Layout Management
- Course Hazards
- Score keeping
- Administrative operations
- _music and sound effects_

At this point I'm going to spend a little bit of time doing 'market analysis' and record findings.

Here's a list of existing mini-golf games: https://en.wikipedia.org/wiki/Category:Miniature_golf_video_games I'm going to review them in reverse order for no reason in particular.

### Market Research

#### Zany Golf

https://www.youtube.com/watch?v=dSwQSQZWhD4

- Sega Genesis isometric style. This allows them to make 3d courses that are easy to distinguish even in very low-bit graphics.
- Putting action is a crossbar selector that you pull away from the ball and then release. Adds white lines between cursor and the ball but leaves the player to have to determine the rest of the result.
- Ball uses shadows to sell 3-dimensonality.
- Music and sound effects when the ball strikes something on the course - totally forgot about this.
- Game gives a Par and Strokes left readout on the screen.
- At about 13:30 there's a hole that plays like ball breaker, nice.

#### Wonderputt Forever

https://www.youtube.com/watch?v=-yAv7PC7KMA&list=PLLR2uyH1QsP5ivPkXlapqmxLn22VoWHmq

- Another game where you grab the pull and pull and then release. This one creates an arrow between the cursor and ball and shows trailing dots coming out of the ball to suggest the path it will take.
- Graphics are much more sophisticated. It is still isometric but I can't see pixels anymore. The game makes great use of particle effects for various non-standard events like the ball colliding with a rock or spending too much time out of bounds where it combusts.
- This game has some pretty awesome level designs!

#### Wonderputt

https://www.youtube.com/watch?v=8N3NswMOIAU

- Precursor to Wonderputt forever it seems.
- This game is beautiful. Reminds me of Monument Valley.
- Overall, the experience seems very similar to Wonderputt Forever at least in terms of putting. Level design is even better in this one it seems.

#### Putt & Putter

https://www.youtube.com/watch?v=qepAjzRgfm4

- Dumb & Dumber joke? It's a 1992 Sega game.
- Isometric again. I'm sensing a theme.
- These levels are fairly simple compared to what I've seen in other gamnes so far.
- The ball direction is locked in and then a power bar moves up and down and the player stops it at a certain point which launches the ball. Interesting 2 step process.
- Game only has 18 holes. Probably a solid resource for inspiration. Take for instance hole 5. Uses ramps and a single teleport mechanism with corners to make an interesting game experience.

#### Miniature Golf

https://www.youtube.com/watch?v=BuZyJbjQ5S4

- Probably the oldest example on this list. Everything is a square haha.
- Works how you'd expect, but there are a lot of solid moving obstacle blocks that seem to go way faster than the ball will.
- "I have to hit the yellow square here to the blue square over here while avoiding the red square" is an accurate description of gameplay haha.
- Striking the ball seems to be a free-floating blue square that you maneuver wherever and then collide with the ball to get it to move. Hella primitive. . . it's actually really hard to see how it works from this video.

#### Mini-Putt

https://www.youtube.com/watch?v=XtJPeyoDEpM

- Another old one. Putt & Putter is way more impressive IMO but that's a stylistic difference I think.
- This one uses a top-down view for golfing and augments the screen with more fluff like a visual of the character putting and striking the ball. The whole hole is usually too large to show on the screen, so the top portion is a portion of the hole while next to the character portrait is the full hole in a smaller form (but still showing key details like the ball and the hole). The lesson I'm learning here is top-down does work but probably requires being augmented since the whole screen isn't necessary for showing the relevant ball action.
- The levels I'm watching use arrow tiling on the floors in some moderately interesting level design. This is likely a great resource if I plan to do things in a top-down way.
- When putting there are two intensity dials? Maybe one is for chipping? I wonder how they manage that in 2d gameplay?
- Putting sprite reacts to what happens. Celebrates if the ball goes in the hole and cringes if the ball goes out of bounds. Kinda fun.

#### Krazy Ace Miniature Golf

https://www.youtube.com/watch?v=ijngsHXmgQY

- I think this is isometric, but it looks a little different than the other ones I've been seeing. It's doing the same kind of stuff: representing inclines with darker colors. The physics in this one seems more advanced than others. It hides the pixel grid quite well.
- Dang, the way that they do physics makes it very easy to pull off a ball flying through the air or getting some lift off of a ramp. Hole 2 with the water fountain is impressive.

#### Goofy Golf Deluxe

https://www.youtube.com/watch?v=YKRuJFWRx-4

- Interesting. Top-down but with heavier graphics and good physics. This game actually places a player sprite on the field and you maneuver them so that the putt arrow points where you want it to and the sprite follows the ball. Human sprite walks over terrain the ball can't and so on. Seems to work pretty well and the intensity of the stroke is entirely conveyed by the golfing sprite.

#### Golfinity

https://www.youtube.com/watch?v=-iqo4UZwAe8&list=PLQwPrpHYLKZPwZsKdlYnNwBz8OeeoB_qw

- This is a cool one. It was made in 2014 but it has a very minimalistic feel to it. Feels a lot like Monument Valley and Wonderputt.
- I find the videos for this one annoying, but the gameplay and the way the levels are designed and laid out is very intriguing and probably worthy of further exploration.
- This game seems designed for mobile and probably has some great insight into that direction if I want to explore it.

#### Skipped Over:

- I decided I've seen enough and did not make it to the following:

  - Fun! Fun! Minigolf
  - Family Mini Golf
  - Dangerous Golf
  - Animaniacs Game Pack
  - 3D Ultra Minigolf Adventures
  - 3D Ultra Minigolf (game series)

- Itchy & Scratchy in Miniature Golf Madness ~ Half platformer half mini-golf? Bizarre.
- Kirby's Dream Course ~ This is more of a Kirby game than it is a mini-golf game. That being said, there's a lot going on here and it's a VERY advanced isometric game. Kirby is the ball lol.
- Lunar Pool ~ Pool game, probably just a minigame.
- Micro Golf ~ No YouTube presence that I could find.
- Over the Hedge: Hammy Goes Nuts! ~ Lol, looks like a platformer with a minigolf minigame probably.
- Planet Minigolf ~ Playstation 3 game. Too advanced for what I'll be building.
- Toy Golf ~ Gizmodo 2005 release, no YouTube presence at all.
- Rocketbowl ~ I guess it's a bowling game that plays like mini-golf? Or maybe there's a sub-game here. Idk, didn't spend much time on this.

#### Conclusions:

- Isometric is the most common choice for physical game layout. I haven't touched this at all in LittleJS or elsewhere for that matter, so I'd like to learn about what I'd be getting into here.
- Most games handle striking the ball in similar mechanical ways but represent those mechanics differently.
- In order to build interesting courses, I'll need a toolbox of hazards and hole features to pull from. I can start with simple ramps and portals which would be sufficient for a complete (albeit boring) game. I can then iterate from there.
- Much of the character of these games comes through in the hole designs and how these environments are shown to the players.
- Sound totally slipped my mind but will likely be an important piece of the puzzle for creating a convincing simulation.

### Isometric Projection

https://www.theengineeringchoice.com/what-is-isometric-projection/

This is a super helpful resource. I took a look through the LittleJS examples and documentation for any isometric hit and came up empty, that's a bummer. I did find a pretty great pool example that showcases how a top-down version might work: https://killedbyapixel.github.io/LittleJS/examples/?example=Box2d+Pool.

Ok yeah, did some more research and this question has been posed before on the discord. LittleJS isn't really suited for isometric stuff and I doubt I'd be able to build my own thing in a week, so top-down it is.

### The Ball

I want to put a ball on the screen so I'm going to create an empty project in this repo. I'm using the empty project example provided by LittleJS and I'm downloading the latest release and placing that in a dist folder so my local preview will work. This makes me think about how I need to figure out what launching a game looks like so I'll make a todo section and add that to it.

In working to get a ball on the screen, I'm having trouble with my local behaving properly when it comes to Box2dObject. I'm thinking maybe this is because I didn't run an npm install of LittleJS? `>npm install littljsengine`.

Running the build file, I kept getting errors with npx. Running `>npm install -g uglifyjs` didn't help because what I really needed was `>npm install -g uglify-js`. Now it's failing at the run TypeScript build step and `>npm install -g tsc` didn't make any difference.

Ok, this is feeling like a waste of time. I'm going to work off a supplied project and publish that. I am glad I'm looking into this now because I do not find it explained very well at all.

## TODO:

- [ ] Publishing the game and submitting it to the Jam.
