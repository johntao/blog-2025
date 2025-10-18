---
title: "Word Count: The 'Hello World' of Text Analysis, Part 1"
description: "Building a word-counting script to track daily writing across scattered plain-text files. The background story and what I learned along the way."
pubDate: 2025-10-17
tags: []
---

## Hello Word

**Spoiler**:  
This is NOT the technical post you're looking for...😓  
This article covers only the background story and the result.  
I will leave the technical part until tomorrow.

This post sparked so many interesting topics I want to explore:

- language comparison: finding the best language for scripting
- keyword analysis (the area I haven't stepped into at all)
- how to prompt LLM properly to get the simplest implementation
- all the weirdness of bash scripting from a JS/C# developer's perspective
- why and how to use plain text to store your precious data

Hopefully, some of these will be covered in the future!

## Story Time

I type a lot every day, which includes daily journals (a single folder), various types of notes (nested folders), and code.

These texts are stored as plain-text files and scattered everywhere inside a folder named data.  
(p.s. I treat this folder as the main data source of my future PKM system)

Folders may contain subfolders which grow into a deeply nested structure.

I run `wc -w` to track how many words I type every day; however, it only works with daily journals.  
(for people who are confused, `wc -w` is the command I run in a terminal)

I need to find an efficient way to count these nasty scattered files.

## The Motivation

"Counting words" is the entry-level application in the text-analysis world (according to some LLM).

I've been fascinated with the concept of mining useful information from my knowledge base for a long long time.

This type of task is also known as text-analysis (again, according to some LLM).

That's why I got hooked on this idea and tried to implement it in the most minimal and maintainable way.

These are the prompts that generated better outcomes:

- implement it with "Unix Tools Philosophy"
- Start with a basic command such as `wc -w`
  - then, follow it with your requirements
  - and, ask AI to complete your command

## The Outcome

- column separator: semicolon ';'
- column 1: date in format of yyMMdd
- column 2: word count
- column 3: affected file count

```txt
251017;687;20
251016;1634;21
251015;771;14
251014;352;2
251013;623;4
251012;670;13
251011;548;10
251010;421;7
```

It seems on average I type around 700 words per day, excluding the blog posts 😓

The script only counts words in the main data folder, and I haven't figured out a proper way
to deal with the text stored in the coding folders.

This blog is tied to a coding project, hence the script does not count words from my posts.

And I refuse to do any workarounds at this point 🤣🤣
(p.s. It would be 1000+ words on average if blog posts also counted)

## **END OF BED TIME STORY**

Phew! That's a lot of text in this article.

One of my goals is to keep the reading time of each blog post less than three minutes!

I hope someone has already learned something useful at this point.

See you in the upcoming technical part! 🤓
