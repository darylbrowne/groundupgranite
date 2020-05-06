# Granite.js

![CI](https://github.com/darylbrowne/granite.js/workflows/CI/badge.svg) ![Generated Button](https://raw.githubusercontent.com/darylbrowne/granite.js/image-data/badge.svg) ![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square) [![Anaconda-Server Badge](https://anaconda.org/anaconda/brotli/badges/version.svg)](https://anaconda.org/anaconda/brotli) ![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)

Granite.js is a front-end component library from addapptation, built to render formatted JSON as PWA-ready DOM elements.

The word "granite" comes from the Latin word, _granum_, meaning grain. A nod to both where it was created (New Hampshire, USA - also known as _The Granite State_), as well as to how (rock solidly) it renders data. Each _block_ of granite.js creates a self-contained chunk of HTML, CSS, and JS that can be late-loaded into any front-end enviroment - yes, even inside your existing Vue, React, or Angular project!

## Granite.js Life Cycle

Your page includes a reference to your version of _granite.js_ 
Your server-side logic writes a DOM element with a unique _id_ and a _data-granite_ attribute containing the JSON required for the desired UI element, or _block of granite_.



# Foundations

The following foundational factors go in to developing and extending Granite.js: 

> **Run-Time Solution:** Granite.js requires one standardized JSON object and generates an immediately usable component, with no need for a compile step between receiving data and rendering results. To this end, we use CSS Variables instead of SASS.

> **One Flavor - Vanilla:** Granite.js is based on the best of breed usage of HTML, CSS, and JavaScript. To keep everything as atomic as possible, Granite.js leverages the native strengths of each language or protocol with no special flavors except vanilla. 

> **Chatty vs Chunky Notifications:** From their initial invocation through their entire life cycle, blocks provide interface points for your external notification, warning, and error handling solutions.  

# Core Concepts

The following core concepts constitute the foundation of development of all new and existing _blocks_ of Granite.js 

> **block:** a Granite.js UI element is called a block, and consists of an HTML tag with an _id_ and a _data-granite_ attribute.

> **theme:** Granite.js offers global and/or block-level styling via JSON.

> **JSON:** Granite.js relies on valid JSON (which includes defining keys as strings). When in doubt, run your JSON through [https://jsonlint.com/](https://jsonlint.com/) 


### Setup

- Once you have a local copy of Granite.js, open a terminal window in that directory and be sure you have a current version of npm running.

> install/update npm

```shell
$ npm install npm@latest -g
```

> install granite.js packages

```shell
$ cd [your local granite.js project]
$ npm install
```


---

## Granite.js Syntax

```html

<div id='myTiles' 
     data-granite='{
                        "id" : "myTiles", 
                        "options": "...",
                        "records": "...",
                   }'></div>

<script src="granite.js"></script>

```

---


##  Workflows (Build Options)

You are free to use this project in its raw, uncompressed form by simply forking the repository. However, if you are integrating Granite.js into a professional workflow, we recommend using the YAML file to build your Development, Stage, and Production environments. This repository's release branch contains the latest, documented stable from each of the below's latest run via our own CI/CD automation (that mirrors to GitHub from GitLab). Finally, there are regular Releases available for each stable release commit. Refer to the repository for additional notes. 

> Remember to _run test_ before you merge changes upstream,

```shell
$ run test
```

- **Development**: Continuous Integration build process runs jest tests and file compression on every commit
- **Stage**: Continuous Deployment creates semantic versioned releases 
- **Production**: Integrate with GitHub Actions to populate a CDN and/or pull releases

## Releases

|                |Features                          |Date                         |
|----------------|-------------------------------|-----------------------------|
|Version 0.1.0|Tiles            |May 6, 2020            |
|Version 0.2.0          |Tiles, Tabs            |May 13, 2020           |
|Version 0.3.0          |Tiles, Tabs, Nav, Sidepane|May 20, 2020|
|Version 1.0.0          |Tiles, Tabs, Nav, Sidepane, YAML|May 27, 2020|


## Community

Granite.js is an MIT-licensed open source project with its ongoing development made possible by the support of addapptation and these awesome [backers](https://addapptation.com). If you'd like to join us, please fork this project and reach out to us at granite[at]addapptation[dot]com. 


## The State of Granite.js

Each week, the Granite.js Community hosts a 45-minute Zoom meetup called, The State of Granite.js, where you can come listen to the latest updates and provide feedback and ask questions regarding your own projects. For more, please contact...


## How to Get Involved

To join the Developers Group, please contact us at... 



