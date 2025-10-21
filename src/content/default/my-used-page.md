---
title: "My Used Page, Part 1"
description: ""
pubDate: 2025-10-21
tags: []
---

I mentioned the [uses page](https://uses.tech/) in the previous article.

It was fun watching the statistic numbers to know what other people use as their daily drive.

However, it is important to know the sample size whenever talking about statistics.

"Uses page" currently includes ~900 records when the time I wrote this article.

In compare to other famous surveys in the software development area:

- [Stack Overflow: Developer Survey 2024](https://survey.stackoverflow.co/2024/)
  - +65,000 responses
- [JetBrains: Developer Ecosystem 2024](https://www.jetbrains.com/lp/devecosystem-2024/)
  - +23,000 responses
- [Devographics: State of JavaScript 2024](https://2024.stateofjs.com/en-US/demographics/)
  - +14,000 responses

What differs from these surveys is that you can find more details about the hardware setup or OS-related stuff in "uses page".  
(e.g. keyboard, ergonomic chair, which Linux distro...)

Furthermore, one would had a chance to glance how other developers built their personal website, including their tech stacks.

The low popularity of "uses page" is due to the fact that:

1. Not every developers have a personal website (mostly front-end focus developers)
2. Even the developer have one, they might not beware of the existence of such movement

That's to say I am not going to contribute to the community either 🤣🤣

Just shout out to the movement and probably someone read this article would love to join them.

## The Used Page

I felt that in a introspective view, reviewing how many tools I have used is more valuable.

Here I try to list the tools I've used and make them into three categories:  
battle tested (used in my previous job), personal usage, current learning.

I will also split tools into smaller groups for better reading experience, and  
mark the tool with either 'G' as good or 'F' as fair which indicate how much time I've spent on it.  
Markers are prefix on each item just to save some precious space  
extra notes:  
1. I skipped 'excellent' because I don't need excellent in this article
2. markers are given in the sense of comparing only on myself, it doesn't relate to other developers at all
3. I skipped given markers on tools that is too tedious or below the score of 'Fair'
    - however, I will still include them for the record
4. lastly, I probably forget a few items since 8+ years development experience means a lot

Here we GO!

## Battle Tested (Used In Previous Job)

### Web Front-end

- (G) CSS: haven't tried any CSS animation yet; I am comfortable to debug grid, flex and media query
- (G) HTML: the box model along with CSS is a MUST; then, semantic element, then a11y (haven't spent enough time on a11y, though)
- (G) JQuery: I learned this in my first job in 2017-2020; one must know how plug-in system works; and all the nasty closure and IIFE
- (G) DataURL: I've used this to build a flag calculator for my colleague, surprise surprise!
- (F) React: knew the GOTCHA of hooks and re-renders; knew about the tasty eco-system; just enough to build an admin site from scratch
- (F) TanStack Suite: the TanStack stuff gave you the knowledge of extracting functional logic from the UI
- (F) TailwindCSS: I start using it without the experience of preprocessor; I can say the DX is like a breeze
- (F) Vite: I start using it without the experience of webpack; the DX is a piece of cake
- Jest, AngularJS, Vue, Liquid, Bootstrap

### Web Front-end UI Component

- (G) Material UI: the legendary UI since 2014. One might be surprised for how much stuff you can abstract from an input field.
- (G) React Admin: the fantastic project to learn how to abstract an admin site properly. also shout out to the awesome doc site
- (F) Telerik Kendo: the OG commercial UI library (first launch in 2011). the tool has its place in the .NET eco-system
  - thus, I am fortunated enough to encounter it twice in my career
- (F) CKEditor: first launched in 2003. met this tool twice in my career, seems to be the go-to option for WYSIWYG feature

### Web Full-Stack & Application

- (G) ASP.NET WebForm: viewstate, postback, code-behind, UpdatePanel, and the beautiful life cycle chart I used to set it as my wallpaper. good old days
- (G) ASP.NET MVC: cultural shock migrating from WebForm to MVC, but get used to it once you figure out how controller and routing works. the messiest part is usually the over-complicated middleware setup
- (F) ASP.NET RazorPage: cleaner version of WebForm. it's better, but less seen in my work experience, what a shame
- VirtoCommerce, Odoo, Grafana

### Automation & Testing

I use these tools to do cross service providers automation or some simple integration tests.

- (F) Playwright: amazing tool, have built-in browser, tracer (debugger), and run different browser parallel. just amazing.
- (F) Selenium: make sure to set your webdriver correct!
- (F) AutoIt: still remember my first impression. it's amazing how much things you can do via this tool.
  - I once use this tool to enhance my live demo, hotkey to activate descriptive popup just like how you do animaitons in ppt
- (F) AutoHotkey: AutoIt spin-off. I don't use it that much, only know the fact that it make the syntax extraordinary concise.
- (F) NUnit: I know the value of unit tests. just don't have enough TDD experience in my career

### Desktop & Other Platform

- (G) ConsoleApp: my favorite interface for quick admin automation. however, I have a hunch that Powershell might do a better job.
- (F) WinForm: most of my colleagues love to developed their automation stuff on WinForm. I guess it is just a matter of preference
- Android, Unity

### Back-end & Application

- (G) Entity Framework (+Core): I loved it when I first use it. I was the first adapter to use tons of LINQ in my workspace.
  - once you get used to LINQ, there's no reason to reject EF
  - the only GOTCHA is how you ease the process whenever a performance bottleneck hit
- (G) HtmlAgilityPack: I know the existence of XPATH from this tool. It's fascinating how CSS Selector differs from XPATH
  - the true coding guru will know the cases when XPATH shine
- (G) Dapper: it's the tool for developer felt uncomfortable to use too much LINQ in their codebase or developers who make performance as the first citizen
- (G) ADO.NET: the good old friend. I once dived into all the dataset and adapter API. they sure make something robust except for weak types.
- (G) ASP.NET Web API: use it like a breeze. however, one may still get into trouble if they wish to strongly type all the filtering criteria.
  - also, it have similar problem like MVC where middleware might be messy
- (G) Postman: first launch in 2012. every developers go-to tool to test out various API endpoints.
  - I have experience using the scripting feature to compose integration tests
  - however, I doubt it would be the best practice in the era of LLM
- (F) SignalR: I didn't use it that much. from what I know, it just works
- Grafana, RabbitMQ, Nuget, Newtonsoft, System.Text, NLog, Swagger, CodeDom, AutoMapper, Autofac, Unity, Remote Data Service
<!-- uv -->

### Language

- (G) CSharp: the one that earn me a living. sometimes, I felt like my knowledge about CSharp is over-qualified for the job
  - here's how: developers should stick with their team coding convention.
  - solving problems with packages seems more acceptable than using delicate language features, then do it yourself
  - anyway, I don't use CSharp that much these days, but I am still strongly interested how it evolve
- (G) JavaScript: another language that feed me. I don't have much complains that it is not a static typed language
  - what I can recall is that it was fascinating to make things work in the browser, and everyone can open the devtool to debug
  - I am not yet reach the guru level though, 'this' and deeply proto-chain still confused me
  - not to mention the significant semi-colon and parentheses emitted by the minifier, these always catch me off guard
- (G) TypeScript: legendary language designed by the guy who also designed CSharp.
  - it is probably the very first time I know that a language could have so many utilities and operators to interact with a 'type'
  - not to mention the legends said type system of typescript on its own is Turing Complete, just amazing!
- (G) Regex: probably one of my best skills among group of developers. however, I haven't read the book "Mastering Regular Expressions"
  - hope I will complete the book someday, before that, I will just identify myself a layman
- (G) LINQ: the beautiful syntax that imbue SQL-like syntax into CSharp word. the one who designed this must be a genius
  - noted that functional syntax is different from query syntax. query syntax is a subset of functional syntax
  - query syntax shine in cases of simple join or continuation
- (F) Powershell: I don't use it enough in my job experience. cuz I was too fascinating with CSharp and console application
  - hopefully, I will make my own cmdlet one day
- (F) Python: the hotshot programming language. I admit the syntax is indeed graceful that resonate to my pursue of minimalism
  - however, I don't want to use it that much. just call me a rebel

### DB

- (G) SQL Server: good old relational database. One must know how to debug missing JOIN records or know when the JOIN statements would cause cartesian explosion
- (G) Elasticsearch: the very first nodql database I used. enlighten me with tons of concepts
  - e.g. DSL, text-processing, tokenization, search engine, distributed system, Lucene
- (G) SSMS: the default graphic client everyone used to connect SQL Server. (compare to DBeaver) good at alter table schema with advanced feature
- (G) DBeaver: the open source alternative for connecting databases. (compare to SSMS) rich user experience
  - e.g. execute SQL statement under the current cursor, batch row editing, copy-paste blob image
- (F) Redis: it just works
- Oracle, Prometheus, MySQL

### DevOps

I don't do much fancy stuff in the DevOps area. Most of the time I just deploy, and make sure it work, then leave.

- (G) IIS: activate (install) a few options, setup the site, port, pool and folder. switch 32 bit on and off. That's all.
- (G) Task Scheduler: too simple to type extra notes. just make sure you create an obvious folder let your teammates know where to find it
- (G) Windows: it's okay for me. However, if one heavily relied on non-dotnet open source eco-system. You might be upset.
- (F) GitHub Action: extremely rich eco-system. I only use the basic stuff
- (F) Docker: just use it. nothing special. (I use docker to host the ELK solution, btw)
- AWS, VirtualBox, DevContainer, Grafana, Debian, Windows Service

### IDE & Editor & Extra Goodies

- (G) VSCode: I am quite an early adapter. I believe I start using it since 2016. No sweat no complain.
  - the only GOTCHA is that I think VSCodeVim wasn't that good back in the days
- (G) Visual Studio: VsVim is better than VSCodeVim IMHO. I am the basic users. Nothing fancy stuff to shout out here.
- (F) ILSpy: reminds me when debugging production issue. one of the step is to use ILSpy check if I've deployed the wrong version. true story.
- (F) Roslyn: the dotnet team have made the Roslyn compiler very easy to work with. If you love metaprogramming, make sure to check this one.
  - things to remind: syntax tree is different from symbols. You can install Visual Studio extensions to Roslyn syntax tree visualizer.

## **OOPS**

I exceed my expected content length again 😓  
I will leave "personal used" and "current favorite" part in next article.


These are the tools I used in my previous work experience.  
I can't tell if this is the correct format to record stuff  
But, it is a good starting point.

Hope someone found one or two interesting stuff here.  
See you in the next one 💪💪

