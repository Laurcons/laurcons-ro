import dayjs from 'dayjs';

export interface Project {
  id: number;
  title: string;
  shortDescMarkdown: string;
  longDescMarkdown: string;
  imageUrl?: string;
  creationDate: dayjs.Dayjs;
  updateDate: dayjs.Dayjs;
  oldSiteLink?: string;
  versions: {
    name: string;
    links: {
      title: string;
      url: string;
    }[];
    releaseDate?: dayjs.Dayjs;
  }[];
}

export const Projects: Project[] = [
  {
    id: 17,
    title: 'Rust Web Backend',
    shortDescMarkdown:
      'For one of the easier college assignments, I decided to use Rust. It was a blast!',
    longDescMarkdown:
      'This is a simple web API that I wrote using Rust as an exercise with the language. It uses Axum as a web driver, Tokio as the async runtime, and Diesel as a database ORM. I honestly think it works really nicely.\r\n\r\nGo check it out on my GitHub!',
    creationDate: dayjs('2025-03-10'),
    updateDate: dayjs('2025-03-10'),
    versions: [
      {
        name: 'GitHub',
        links: [
          {
            title: 'GitHub',
            url: 'https://github.com/Laurcons/cs-wsmt1m-individual',
          },
        ],
      },
    ],
  },
  {
    id: 16,
    title: "orar-discord: Bot for my Faculty's Timetables",
    shortDescMarkdown:
      'As a first year student, I noticed that my faculty\'s timetable webpage is a fairly simple webpage: small and concise, which immediately screamed in my head "web scraping!!!". I put two and two together and figured I could make a sort of useful discord bot out of this.',
    longDescMarkdown:
      "This is a webhook-based Discord \"bot\" that, every day at 17:00, sends messages in the configured channels with the chosen timetables. The timetables, due to their volatility, are retrieved live, scraped directly from the faculty's website. They are processed and presented in a (more) user-friendly format.\r\n\r\n## Features\r\n* Keeps track of odd/even weeks and filters classes accordingly\r\n* Configurable: sends only the timetables you want to only the channels you want\r\n\r\n## Motivation\r\nI just thought it'd be fun to code :)))\r\n\r\n## More information\r\nFor more information please read the README file of the repository. That's the only file I'm constantly updating.",
    imageUrl: 'https://i.ibb.co/XDgsCYs/image.png',
    creationDate: dayjs('2021-10-05'),
    updateDate: dayjs('2021-10-05'),
    versions: [
      {
        name: 'GitHub',
        links: [
          {
            title: 'GitHub',
            url: 'https://github.com/Laurcons/orar-discord',
          },
        ],
      },
    ],
  },
  {
    id: 12,
    title: 'Portal Still Alive in JavaScript',
    shortDescMarkdown:
      "This is the pinnacle of all my JS lyric videos. No video I've made or will ever make will come even close to the perfection that this video is.",
    longDescMarkdown:
      "## Description\r\nNot much to say here. It's a video that has been entirely written in HTML, CSS and JS.\r\n\r\n## If running the live version\r\nPlease reload the page once or twice. It might not start on the first load. Reloading also fixes audio-visual desync.\r\n\r\n## Further reading\r\nI've written more about these kind of projects in my [world.execute(me)](/projects/11) lyric video. You should give that a read!\r\n\r\n## Shameless YouTube channel self-promotion\r\nYes, yes, do check out [my channel](/yt). I upload random stuff (mostly lyric videos and memes about friends) whenever I feel like.",
    imageUrl: 'https://i.imgur.com/sqn6s5Z.png',
    creationDate: dayjs('2021-03-01'),
    updateDate: dayjs('2021-03-01'),
    versions: [
      {
        name: 'Video',
        releaseDate: dayjs('2021-03-01'),
        links: [
          {
            title: 'Watch!',
            url: '/yt/C2eJ0ZJlTJI',
          },
        ],
      },
      {
        name: '1.0',
        releaseDate: dayjs('2021-03-01'),
        links: [
          {
            title: 'View live!',
            url: 'https://static.laurcons.ro/projects/play/still-alive/',
          },
          {
            title: 'GitHub',
            url: 'https://github.com/Laurcons/still-alive-js/releases/tag/1.0',
          },
        ],
      },
    ],
  },
  {
    id: 14,
    title: '"Physical Mail Manager" - High School Certificate Project',
    shortDescMarkdown:
      'In Romania, at the end of high school (mathematics-informatics specialization) you are required to create some sort of computer project, Web or otherwise, and present it to a committee, which will evaluate it. This is the project that I created, called "Physical Mail Manager" (original Manager Poștă Fizică).',
    longDescMarkdown:
      "**The project's language is Romanian, even if the not-user-facing parts are English.**\r\n\r\n## Conception\r\nSo, I am a person who likes to send mail. Not sure where this came from, but I find it kind of magical that I can write whatever I want on a piece of paper, place it in an envelope, stick a stamp on it, and drop it in the postal box, only for it to arrive in the other side of the country in a couple of days, or the other side of Europe in 2 weeks. I'm also a fan of keeping track of things, in tables and all that jazz, so since I started sending mail I have had at least some way of keeping track of what goes in and what goes out: firstly a simple note in my phone's Notes app, then an Excel spreadsheet.\r\n\r\nI initially had big plans for this certificate thing. I knew it's not really worth anything, but I wanted to have fun while doing it, so I thought I could make some sort of mini social network, called HiSix (because Hi5 already exists), and maybe even add some kind of live chat to it. I thought it wasn't that hard, and I still think it's not really (at the scale of a demo project, no scalability in mind), but I underestimated the sheer amount of work that it needed, and I didn't really want to take any (security or other) shortcuts, so after a while I dropped it.\r\n\r\nThen I put two and two together and figured I could make an interface for my postmaster requirements. I have been wanting to make one for a while anyway, so I went for it.\r\n\r\n## Data model\r\nThe project keeps track of two kinds of structures: letters and destinations, and provides ways to visualize and edit them.\r\n\r\nA destination is a person. It represents either the destination of a letter, or the sender (but it's referred to as \"destination\" regardless). A destination contains the person's name, their address, and whatever user-added observations.\r\n\r\nA letter contains information about a letter, such as its destination, and type (incoming/outgoing). It also contains relevant dates (when it was written, dropped in the postal box, and received), price, and whatever user-added observations.\r\n\r\nMost of these fields have no enforced type or value, and are not required, to give the user the freedom to write whatever data they need in the fields. For example, a user might not know the exact date a letter was sent, but does know what it _was_ sent, so they can type \"yes\" into the field.\r\n\r\n## Architecture\r\nOne of the \"requirements\" of the project was that, if I make a web app, it needs to be easily drag-and-dropped into the `/htdocs` folder of XAMPP, and it should work, no additional configuration. This pretty much ruled out any live or WebSocket capabilities (which would require spinning up an additional server), and I had to hack my way around the folders using `.htaccess` files. It works tho.\r\n\r\nThe project uses PHP as a backend, with [SleekDB](https://sleekdb.github.io/) as a database (it uses the filesystem and JSON files, which was perfect for me), and a React app, with TypeScript, as frontend.",
    creationDate: dayjs('2021-05-20'),
    updateDate: dayjs('2021-05-20'),
    versions: [
      {
        name: 'Online',
        releaseDate: dayjs('2021-05-20'),
        links: [
          {
            title: 'Visit',
            url: 'https://pmail.laurcons.ro',
          },
          {
            title: 'GitHub',
            url: 'https://github.com/Laurcons/PhysicalMailManager',
          },
          {
            title: 'Docs (RO)',
            url: 'https://static.laurcons.ro/projects/play/pmail/documentatie.pdf',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Minesweeper',
    shortDescMarkdown:
      'A recreation of Minesweeper in a console. You know, I do these kind of things. Yeah.\r\n\r\nAnd this is also the first project on the site, yay!!',
    longDescMarkdown:
      "I wanted to make a Minesweeper game for quite some time, but I didn't know how to properly arrange a fixed number of bombs, randomly, on the table. But then, while working on another project, I needed to shuffle a List and I found an extension which does just that. And this gave me an-- sorry, _the_ idea for bomb placement: set first N squares to bombs, and then shuffle the map! And this is what brought the idea a Visual Studio solution.\r\n\r\nBecause it was **my** attempt at the game and **my** project and because **I** have power over it and because why not, I added some extra things to the gameplay, to make the experience a bit more enjoyable. All of them were added because of my testing (aka playing).\r\n\r\n## Features\r\n\r\n*   Cannot configure the game from a menu, but rather from a file\r\n*   Playable with only the keyboard, not the mouse (yes, I consider this a feature)\r\n*   Displays time after game over\r\n*   Flagging system\r\n*   You are able to specify a seed or a number of bombs (default random and one eighth of total cells, respectively)\r\n*   (as of 1.3) Displays a progress bar that indicates the progress through the map\r\n\r\n## Specific or non-standard features\r\n\r\n*   Displays whole map after game over (I thought why not)\r\n*   Displays all flags placed over bombs, flags placed incorrectly and bombs with no flag in different colors after game over\r\n*   Keeps track on-screen of total bombs and total flags\r\n*   You cannot accidentally trigger a flagged bomb\r\n*   You cannot trigger a bomb on first move\r\n*   You will always uncover an empty square at first move, eliminating the frustration of uncovering a number\r\n\r\n## Other\r\n\r\n*   Best played with font Raster Font, size 12x16 (square-ish), Magnifier set to 200% and a Paint black background (my experience)\r\n*   Everything else you need to know is in the program\r\n\r\n## Known issues\r\n\r\n*   (fixed, 1.4) The seed system doesn't work for some reason and I don't know why..\r\n\r\n## Images\r\n\r\nFirst version (1.1)  \r\n![](https://static.laurcons.ro/projects/minesweeper/1.png)\r\n![](https://static.laurcons.ro/projects/minesweeper/2.png)\r\n![](https://static.laurcons.ro/projects/minesweeper/3.png)\r\n\r\nversion 1.2 (b5)  \r\n![](https://static.laurcons.ro/projects/minesweeper/4.png)\r\n\r\nversion 1.3 (b6)  \r\n![](https://static.laurcons.ro/projects/minesweeper/5.png)\r\n\r\n## Downloads\r\n\r\nYou may need .NET Framework 4 or higher to run the game. The game language is English.\r\n\r\n(available in the Versions card)\r\n\r\n## Source code\r\n\r\nI don't have the source code for this anymore. It got deleted in an accident. lmao\r\n\r\n## Happy playing!",
    imageUrl: 'https://i.imgur.com/xxJzNTz.png',
    creationDate: dayjs('2017-07-11'),
    updateDate: dayjs('2017-07-11'),
    oldSiteLink:
      'http://old.laurcons.ro/publ/games/recreations/minesweeper/2-1-0-1',
    versions: [
      {
        name: '1.1 (b4)',
        links: [
          {
            title: 'ZIP',
            url: 'http://old.laurcons.ro/files/minesweeper/mslc-11b4.zip',
          },
        ],
      },
      {
        name: '1.2 (b5)',
        releaseDate: dayjs('2017-07-12'),
        links: [
          {
            title: 'Changelog',
            url: 'http://old.laurcons.ro/files/minesweeper/mslc-12b5-changelog.txt',
          },
          {
            title: 'ZIP',
            url: 'http://old.laurcons.ro/files/minesweeper/mslc-12b5.zip',
          },
        ],
      },
      {
        name: '1.3 (b6)',
        releaseDate: dayjs('2017-07-13'),
        links: [
          {
            title: 'Changelog',
            url: 'http://old.laurcons.ro/files/minesweeper/mslc-13b6-changelog.txt',
          },
          {
            title: 'ZIP',
            url: 'http://old.laurcons.ro/files/minesweeper/mslc-13b6.zip',
          },
        ],
      },
      {
        name: '1.4 (b7)',
        releaseDate: dayjs('2017-07-14'),
        links: [
          {
            title: 'Changelog',
            url: 'http://old.laurcons.ro/files/minesweeper/mslc-14b7-changelog.txt',
          },
          {
            title: 'ZIP',
            url: 'http://old.laurcons.ro/files/minesweeper/mslc-14b7.zip',
          },
        ],
      },
      {
        name: '1.5 (b8)',
        releaseDate: dayjs('2017-07-24'),
        links: [
          {
            title: 'Changelog',
            url: 'http://old.laurcons.ro/files/minesweeper/mslc-15b8-changelog.txt',
          },
          {
            title: 'ZIP',
            url: 'http://old.laurcons.ro/files/minesweeper/mslc-15b8.zip',
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: 'Reactsweeper',
    shortDescMarkdown:
      'So I recently tried my hand at React, and after completing the "Tic Tac React" tutorial, I really wanted to try my hand at creating an original game. It can\'t get much more original than Minesweeper, can it?',
    longDescMarkdown:
      "## Description\r\nIt's just a Minesweeper game. Pretty much like [my other Minesweeper game](/projects/7) that was written in C#. It also borrows from the additional features the C# variant has.\r\n\r\n## Updates\r\nI don't know what I am going to do with this project. I might update it, to be a bit more feature-complete with its sibling.\r\n\r\n## GitHub\r\nAvailable at [https://github.com/Laurcons/Reactsweeper](https://github.com/Laurcons/Reactsweeper)",
    creationDate: dayjs('2020-11-08'),
    updateDate: dayjs('2020-11-08'),
    imageUrl: 'https://i.imgur.com/OKU0sNS.png',
    versions: [
      {
        name: 'v1.0',
        releaseDate: dayjs('2020-11-08'),
        links: [
          {
            title: 'Play',
            url: 'https://static.laurcons.ro/projects/play/reactsweeper/v1.0/',
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: '"Sad Machine" JavaScript Lyric Video',
    shortDescMarkdown:
      "This is a Lyric Video that I've written in JavaScript (runs in browser), I've recorded, and uploaded on YouTube.",
    longDescMarkdown:
      "## Description\r\nThis is honestly pretty much exactly what it says on the tin. A lyric video written in JavaScript. All you have to do is click the link above/to the right to go to the YouTube video.\r\n\r\n## Any more lyric videos in JavaScript?\r\nNo. Probably not.\r\n\r\n## Code\r\nI haven't yet uploaded this to GitHub, and I do not really plan on doing so. I might tho, in the future. If you want to see the code, please do ask for it!\r\n\r\n## Shameless YouTube Channel self-promotion\r\nYes, yes, do check out [my channel](/yt). I upload random stuff (mostly lyric videos and memes about friends) whenever I feel like.",
    creationDate: dayjs('2020-12-14'),
    updateDate: dayjs('2020-12-14'),
    versions: [
      {
        name: 'Video',
        releaseDate: dayjs('2020-12-14'),
        links: [
          {
            title: 'Watch!',
            url: '/yt/jg1gpwSO5yU',
          },
        ],
      },
    ],
  },
  {
    id: 11,
    title: '"world.execute(me)" by Mili - JavaScript Lyric Video',
    shortDescMarkdown:
      "This is *another* lyric video written in JavaScript, that runs in the browser, that I've recorded and uploaded to YouTube.",
    longDescMarkdown:
      "## Description\r\nWell this is just like my previous JS Lyric Video. This time, it's a visual _adventure_ &#x2728;, in that the original video contains a piece of code that relates to the lyrics, and I've taken it, adapted it from Java to JavaScript (specifically, TS), spent a bit writing the code for the glide animation, and it was done! It's really pretty, this one. I like it a lot.\r\n\r\n## Description of code\r\nI don't plan on publishing the code or the apps. The codes are extremely messy, and I really don't feel like tidying them up. \r\nSo basically:\r\n\r\n* For the \"printer\" part, that of the lyrics (the 'typewriting' effect and the per-word 'fade' effect (see [my first video](https://laurcons.ro/projects/10))), the app uses a .json file which contains all the lyrics, along with timestamps, which is generated from a .srt file that I either downloaded or have written manually. Every 50 milliseconds, so 20 times a second, the app does the following:\r\n    * Clears the entire DOM contents of the lyrics container (rly inefficient, ik)\r\n    * Parses the entire lyric collection, and for every lyric:\r\n        * If its end timestamp is in the past, it displays it\r\n        * If its start timestamp is in the future, it does nothing\r\n        * If its start and end timestamps are in the past and future respectively, it means the lyric is in the process of being typed, so the app calculates which percentage of the lyric should be displayed, and displays it (for the fade effect seen in my previous video, the calculation is pretty complicated (as a Romanian I'd call it \"&#xEE;ntortocheat&#x103;\"))\r\n\r\n* For the \"scroller\" part (the code displayed in this video), I've manually separated the code into \"groups\" (based on the original video), and manually added start and end timestamps for each group. The app then, every 25 ms, so 40 times per second, for each group:\r\n    * If the current time falls outside the timestamps, it does nothing\r\n    * If the current time falls between the timestamps of the group, it calculates the position it should be on the page, and places it using a position absolute `<pre>` tag.\r\n        * The way this position is calculated is pretty hacky imo :)))) For the calculation, the app needs to know the height of the container in pixels (jQuery has a handy function for that), and the height of the `<pre>` tag, which it has no way of knowing before writing it to the DOM. So what the app does is generate the `<pre>` tag, with no position, and opacity set to 0, place it in the DOM and use this element's height to do the calculation, then update it, removing the opacity setting, and applying the position absolute. It's really beautiful and I'm surprised that this thing running at 40 TPS doesn't affect the performance of my browser at all (when not recording anyway).\r\n\r\n## Shameless YouTube Channel self-promotion\r\nYes, yes, do check out [my channel](https://laurcons.ro/yt). I upload random stuff (mostly lyric videos and memes about friends) whenever I feel like.",
    creationDate: dayjs('2021-02-24'),
    updateDate: dayjs('2021-02-24'),
    versions: [
      {
        name: 'Video',
        releaseDate: dayjs('2021-02-24'),
        links: [
          {
            title: 'Watch!',
            url: '/yt/SaeVrmM3rf0',
          },
        ],
      },
    ],
  },
  {
    id: 13,
    title: 'ASMEA Association Website',
    shortDescMarkdown:
      "The second fully fledged website I've ever made, for an association I volunteer at.",
    longDescMarkdown:
      "\r\n## Description\r\nI am a volunteer at the ASMEA Association who is tasked with computer-related maintenance. Recently, I've been asked to redesign the association's website and make it live again. I've never done something like this (my website doesn't count since I made it for myself), so I was kind of thrilled to be tasked with this.\r\n\r\nThe website is static. There's nothing \"dynamic\" on it except for some JavaScript libraries (carousels or Masonry) and a contact form. But I think it constitutes a good starting point for me :D. It is hosted on an Apache webserver, and uses PHP to maximize code reuse. The design is mine, but I integrated some utility parts from Bootstrap to avoid bothering with boring stuff.",
    creationDate: dayjs('2021-03-25'),
    updateDate: dayjs('2021-03-25'),
    versions: [
      {
        name: 'Online',
        releaseDate: dayjs('2021-03-25'),
        links: [
          {
            title: 'Visit (light theme)',
            url: 'https://asmea.ro',
          },
        ],
      },
    ],
  },
  {
    id: 15,
    title: 'Angularsweeper',
    shortDescMarkdown:
      'I learned the Angular framework. So naturally this is the first project I made with it.\r\n\r\nNot much to say here. Same as my React project. But in Angular. I know Angular now (barely).',
    longDescMarkdown:
      '## Description\r\nI learned the Angular framework. So naturally this is the first project I made with it.\r\n\r\nNot much to say here. Same as my React project. But in Angular. I know Angular now (barely).\r\n\r\nHave fun!',
    creationDate: dayjs('2021-08-07'),
    updateDate: dayjs('2021-08-07'),
    versions: [
      {
        name: 'Online',
        releaseDate: dayjs('2021-08-07'),
        links: [
          {
            title: 'Play',
            url: 'https://static.laurcons.ro/projects/play/angularsweeper/v1.0/',
          },
          {
            title: 'GitHub',
            url: 'https://github.com/Laurcons/angularsweeper',
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: 'Laurcons/place',
    shortDescMarkdown:
      "Some of you might remember Reddit's r/place event that took place on April 1st, 2017\\. For those who don't, the objective was simple.\r\n\r\n_There is an empty canvas.  \r\nYou may place a tile upon it, but you must wait to place another.  \r\nIndividually you can create something.  \r\nTogether you can create something more._\r\n",
    longDescMarkdown:
      "**Note:** The link is broken. I'm working on a fix. Not sure when it'll be done!\r\n\r\n## Description and conception\r\n\r\nSo some friends of mine have set out to create a project with a website. I'm not really sure about what it's supposed to be, but it's aspiring to be a cute site with accounts and friends and some social interaction, and also an archive of browser games. They named it SickGamez, because, you know, that's a very Irish way of naming something. One of the creators is Irish.\r\n\r\nSo I wanted to develop some kind of game to submit for their site, and because recently I've read some things about Reddit's r/place event (even tho I am currently a Redditor, I wasn't around back in 2017) I thought I should try and re-implement the game myself, and I decided JavaScript was the way to go (and not anything compiled like C# or even Unity's WebGL stuff (I tried implementing the game there, and I utterly failed because I couldn't optimize well enough the tile handling)).\r\n\r\nIt's not much, it closely follows the original r/place implementation without adding any new features.\r\n\r\n## Features\r\n\r\n*   There is a universal canvas of 500x500 pixels, and every user has access to the same canvas.\r\n*   Every user can place any color they like (out of 16 total) anywhere they like on their canvas, but they have to wait 1 minute after doing so.\r\n*   The game implements an API, which is ready to be accessed with bots, using simple REST API requests.\r\n\r\n## Known issues\r\n\r\n*   The JavaScript client interface can get relatively buggy, and \"client-side-only pixels\" can occur, which can be reset when the client refreshes the page. The JavaScript interface is subject to more updates.\r\n*   The REST API keeps track of every tile, when it was placed, who it was placed by, and the timers for every participant user.\r\n\r\n## Language\r\n\r\nThe game is entirely in English.\r\n\r\n## Play Laurcons/place now!\r\n\r\n*   The game is currently hosted on our aforementioned friends' site, [SickGamez.com](https://sickgamez.com). Click [here](https://www.sickgamez.com/game?id=e349a3025629441f101b81b2cd0284f420836002) to go to the game.\r\n*   The API Reference for writing bots can be found [at this link](http://old.laurcons.ro/files/place/apidocs.html).",
    creationDate: dayjs('2020-05-06'),
    updateDate: dayjs('2020-05-06'),
    oldSiteLink:
      'http://old.laurcons.ro/publ/games/recreations/laurcons_place/2-1-0-10',
    versions: [
      {
        name: 'Online',
        releaseDate: undefined,
        links: [
          {
            title: 'Play',
            url: 'https://www.sickgamez.com/game?id=e349a3025629441f101b81b2cd0284f420836002',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'BookManagerGUI',
    shortDescMarkdown:
      "This program stores a database of books, and offers the ability to store their location within the house. A book's location is comprised of its area, shelf, section and direction. The program's target is to make finding books easier, by just typing their name in the computer and being told where they are.\r\n\r\nThis is mainly a household program, but if you really want you can use it industrially,  I specifically made it to work!",
    longDescMarkdown:
      "So basically, I made this program because I moved out. The house I currently live in has a crap ton of books from the 1960's and we wanted to keep them. And because they are so many, I decided to make an inventory app with the sole purpose of making finding books easier. Now, the easy part was making the program. The hard part is taking every book, writing its book number on it, and then typing its information in the program. Still fun tho!\r\n\r\nI began registrating books the instant I got the program working. And I also wanted to publish it on my site, but that required additional work, as the program was very error prone. So I undertook the task and I made it to work. The biggest pain in the butt was writing the code to create a new database, when needed. In Visual Studio you just click a few buttons and it'll create the database file for you, but I needed to do that programmatically. I tried everything, from creating an empty file and letting SQL Server handle it, from actually talking with SQL Server into making the file, until I screwed everything and just decided to store an empty database template within the program. As stupid as that might sound, it actually works flawlessly and I ain't changing it.\r\n\r\n## Features\r\n\r\n*   Ability to have multiple libraries with different books\r\n*   Ability to easily edit stored books\r\n*   Ability to sort and filter the book list\r\n*   Support for large database sizes\r\n*   General support for window resizing (this is hard to code)\r\n\r\n## Known bugs\r\n\r\n*   None... it doesn't do much, but as far as I know it does it flawlessly.\r\n\r\n## License\r\n\r\nThis program _is_ licensed under the Creative Commons Attribution Non-Commercial Share-Alike 4.0 license. Read more about how that works [here](https://creativecommons.org/licenses/by-nc-sa/4.0/).\r\n\r\n## Screenshots\r\n\r\n![](https://static.laurcons.ro/projects/bookmanager-gui/1.png)\r\n\r\n![](https://static.laurcons.ro/projects/bookmanager-gui/2.png)\r\n\r\n## Language\r\n\r\nThis program is only available in Romanian, as of yet. I plan on translating it into English soon.\r\n\r\n## Downloads\r\n\r\nYou need Microsoft's .NET Framework 4.6.1 or higher in order to run this application. It is usually pre-installed on Windows 7 and newer machines.\r\n\r\nChangelog  \r\nVersion v1.0 (d31 build 187) [Download ZIP](http://old.laurcons.ro/files/bookmangui/BookManagerGUI-1.0-b187.zip) [Source](http://old.laurcons.ro/files/bookmangui/source-b187.zip) (Jan 31st, 2019)(first and last)",
    creationDate: dayjs('2019-01-31'),
    updateDate: dayjs('2019-01-31'),
    oldSiteLink:
      'http://old.laurcons.ro/publ/applications/household-management/bookmanagergui/4-1-0-9',
    versions: [
      {
        name: '1.0 (d31b187)',
        links: [
          {
            title: 'ZIP',
            url: 'http://old.laurcons.ro/files/bookmangui/BookManagerGUI-1.0-b187.zip',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'TCPChatterGUI',
    shortDescMarkdown:
      'I was playing around with TCP networking features on .NET, and seeing that all my prototypes for communication through TCP worked, I decided to give a shot creating a fully-fledged TCP Chat program.',
    longDescMarkdown:
      "I was playing around with TCP networking features on .NET, and seeing that all my prototypes for communication through TCP worked, I decided to give a shot creating a fully-fledged TCP Chat program.\r\n\r\nIt all started with two console projects that I played around with, and I learned how the TCP system is implemented in C#, and how to use it. It's not that hard, but I had to figure out the kinks and quirks of it. Then (deciding not to overrate my abilites (and laziness)) I created a small console chat program, which can act as both a host and a client, one connecting to the other. And then you chat! And it worked! Sure, I hadn't implemented any form of error-checking or validation, but it worked!\r\n\r\nI kept a friend of mine up to date with this, and due to poor feedback that I received regarding the console app, (and because I wanted to) I decided to go big with it and make a fully-fledged Windows Forms application.\r\n\r\nNow that was _not_ easy nor particularily hard, I just had to dive a bit in the hell of multi-threaded code... But it works! I've worked on it a little bit more, adding some additional features among with proper error-checking and exception-handling.\r\n\r\nIt's not much, but I am so proud of it that this could well be my favourite program to date.\r\n\r\n## Features\r\n\r\n*   Requires manual port forwarding (for hosts).\r\n*   All data is sent in plain text across the Internet, although there is no one who would have any reason to hack the connection. Use it without fear, but do not plan on destroying E Corp with it.\r\n*   Customizable chat window (colors and font).\r\n*   Customizable port, default port 14.\r\n*   Now this is a new feature for me that I haven't ever implemented on anything, but the window(s) is(are) fully resizable, and the controls scale accordingly! (only the main window supports resizing)\r\n\r\n## Known issues\r\n\r\n*   Requires manual port forwarding (for hosts).\r\n*   I haven't experience crashes when resizing the windows, although they can be resized to very, _very_ unnatural sizes. So if it crashes, that's why.\r\n*   The plain text thing ^^\r\n\r\n## Port Forwarding alternative\r\n\r\nI found this nice utility on the internet which uses UPnP to create port forwarding entries. I did try to implement the functionality into my program, but it didn't work so I abandoned the idea. For the time being.\r\n\r\nIts license allows me (doesn't prohibit) to post it here, and because it uses an unnecessary installer I will post only the zipped exe file: [UPnP Wizard](/files/upnpwizard/UPNPWizard.zip) [License](https://old.laurcons.ro/files/upnpwizard/License.txt) [Readme](/files/upnpwizard/Readme.txt) by [XLDevelopment](https://www.xldevelopment.net/)\r\n\r\nThe app has a console mode so I could use that. Hmm.\r\n\r\n## Images\r\n\r\nFirst version v1.0\r\n\r\n![](https://static.laurcons.ro/projects/tcpchatter-gui/1.png)\r\n\r\n![](https://static.laurcons.ro/projects/tcpchatter-gui/2.png)\r\n\r\n![](https://static.laurcons.ro/projects/tcpchatter-gui/3.png)\r\n\r\n## Downloads\r\n\r\nYou need a Windows PC with the .NET Framework 4.6.2 or higher to be able to run this.\r\n\r\n(displayed in Versions card)\r\n\r\n## Source code\r\n\r\nI do not use any versioning system. But I've now decided to .zip the source code for every new version that I release. So here is a list with all the released versions' source code.\r\n\r\nLicensed under [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/) license.\r\n\r\n(displayed in Versions card)\r\n\r\n## Development status\r\n\r\nI will not update projects' development status anymore. You can see the evolution from the release dates.",
    creationDate: dayjs('2018-07-23'),
    updateDate: dayjs('2018-07-23'),
    oldSiteLink:
      'http://old.laurcons.ro/publ/applications/pseudopractical/tcpchattergui/9-1-0-8',
    versions: [
      {
        name: '1.0 (b85)',
        releaseDate: dayjs('2018-07-23'),
        links: [
          {
            title: 'ZIP',
            url: 'http://laurcons.ucoz.org/files/tcpchatter-gui/tcpchat-b85.zip',
          },
        ],
      },
      {
        name: '1.1 (b128)',
        releaseDate: dayjs('2018-07-24'),
        links: [
          {
            title: 'ZIP',
            url: 'http://laurcons.ucoz.org/files/tcpchatter-gui/tcpchat-b128.zip',
          },
        ],
      },
      {
        name: 'All',
        links: [
          {
            title: 'Changelog',
            url: 'http://laurcons.ucoz.org/files/tcpchatter-gui/Changelog.txt',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Conway's Game of Life",
    shortDescMarkdown:
      "Another game recreation: Conway's Game of Life! Although not a 'game' in its pure meaning, it is 'playable' by a 'player'. This app was made using Windows Forms and GDI+. And, to be honest, GDI+ is actually pretty fast, regardless of what I though earlier..",
    longDescMarkdown:
      "I was in a low-programming-power mode just a few days ago. When I wanted to do some programming, maybe some code management for [Minesweeper](/publ/games/recreations/minesweeper/2-1-0-1) or working on some unreleased project from my folder, but I couldn't. I also had no ideas for new programs, as this usually keeps me busy for some time. But then, the inspiration has hit me: let's make a Game of Life!\r\n\r\nAlthough it was relatively easy in my mind, it wasn't quite. I had to mess a lot with preparing the form so that I can properly draw on it using a Render static class, then I had to mess with making the drawing panel double buffered (and that property is protected so I could access it only by creating another class, and adding that to the form was a pain), then creating the Table class and extensions, and then testing. After that, I needed to implement the Life rules, which weren't so easy. I messed them up, and I had to google an actual C# implementation of the rules (which works, as opposed to mine, and I don't know why :( ). Then some GUI elements... yeah.\r\n\r\n## Features\r\n\r\n*   This app's standards are definitely **not** above other programs like this' standards. No way.\r\n*   You are able to proceed generation-by-generation, or by setting and interval.\r\n*   You are able to edit the map whenever you like, by clicking cells\r\n*   The map is resizable, <s>although the tile size is not</s> (v1.1)\r\n\r\n## To do\r\n\r\n*   Clean up the code, it is messy AF\r\n*   <s>Add a tile resize option </s>(v1.1)\r\n*   Further clean up the code\r\n*   General reordering of the source elements\r\n*   Rewriting of some code\r\n*   Testing (I didn't do that much, although it seems to work seamlessly)\r\n*   Reworking parts of code\r\n*   Reviewing performance (by changing code)\r\n\r\n## Additions to our competitors:\r\n\r\n*   None. Did this for fahn.\r\n\r\n## Download\r\n\r\nYou will need .NET Framework 4.5.2 on your machine, although it should be installed on Windows 7 and higher.\r\n\r\nChange log for all versions: [Changelog](/files/gol-gui/Changelog.txt)  \r\nVersion 1.1: [Download](/files/gol-gui/gol-gui-11.zip) [News entry](/news/2017-08-05-10) (latest) (Aug 5, '17)  \r\nVersion 1.0: [Download](/files/gol-gui/gol-gui-10.zip) (first)\r\n\r\n## Source code\r\n\r\nThe source code for the latest version is not available for download, mainly because of how messy it is. The next future versions will hopefully have a cleaner code, point which I will make the source code publicly available.\r\n\r\n## Development is paused\r\n\r\nI am not actively working on this project. If you are interested in reviving this project, send me a Private Message (PM) and I'll consider that!",
    creationDate: dayjs('2017-08-01'),
    updateDate: dayjs('2017-08-01'),
    oldSiteLink:
      'http://old.laurcons.ro/publ/games/recreations/conways_game_of_life_gui/2-1-0-5',
    versions: [
      {
        name: 'All',
        links: [
          {
            title: 'Changelog',
            url: 'https://laurcons.ro/files/gol-gui/Changelog.txt',
          },
        ],
      },
      {
        name: '1.0',
        links: [
          {
            title: 'ZIP',
            url: 'https://laurcons.ro/files/gol-gui/gol-gui-10.zip',
          },
        ],
      },
      {
        name: '1.1',
        links: [
          {
            title: 'ZIP',
            url: 'https://laurcons.ro/files/gol-gui/gol-gui-11.zip',
          },
        ],
      },
    ],
  },
];
