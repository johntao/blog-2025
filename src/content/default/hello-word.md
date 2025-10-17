---
title: "Word Count: The Hello World In The Text Analysis Realm"
description: ""
pubDate: 2025-10-17
tags: []
---

## Hello Word

**Spoiler**:  
This is NOT the technical post you're looking for...😓  
This article covers only the background story and the result.  
I will leave the technical part until tomorrow

There are so many interesting topics I come up with after this post:

- language comparison: find out the most delightful language to script
- keyword analysis (the area I haven't stepped into at all)
- how to prompt LLM properly to get the simplest implementation
- all the weirdness of bash scripting for a JS, CSharp background developer
- the why and how using plain text to store your precious data

Hopefully, some of these will be covered in the future!

## Story Time

I typed a lot everyday which includes daily journal (a single folder), various types of notes (nested folders) and codes.

These text are stored as plain-text files and scattered everywhere inside a folder named data.  
(p.s. I treat this folder as the main data source of my future PKM system)

Folders may contain subfolders which grows into a deeply nested structure.

I run `wc -w` to track how many words I typed everyday, however, it only fits with daily journals.

I need to find an efficient way to count these nasty scattered files.

## The Motivation

"Counting words" is the entry-level application in the text-analysis world (according to some LLM).

I've been fascinated with the concept of mining useful information from my knowledge base for a long long time.

This type of task is also known as text-analysis (again, according to some LLM).

That's why I hooked up with this idea, and trying to implement in the most minimal and maintainable way.

These are the prompts that generate better outcome:

- implement it with "Unix Tools Philosophy"
- given a basic commands such as `wc -w`
  - then, followed by your requirements
  - and, asked AI to complete your commands

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

It seems in average I typed around 700 words per day, excluding the blog posts 😓

The script only count words in the main data folder, and I haven't figured out a proper way  
to deal with the text stored in the coding folders.

This blog is tied to a coding project, hence the script does not count words from my posts.

And I refuse to do any workarounds at this point 🤣🤣
(p.s. It would be 1000+ words in average if blog posts also count

## END OF BED TIME STORY

Phew! That's a lot of text in this article.

One of my goal is to keep reading time of each blog post less than three minutes!

Hope someone may already learned something useful at this point.

See you in the next technical part! 🤓
