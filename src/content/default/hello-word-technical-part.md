---
title: "Word Count: The 'Hello World' of Text Analysis, Part 2"
description: "Fighting LLM overkill to build a simple bash script. Turns out file metadata is the secret sauce."
pubDate: 2025-10-18
tags: []
---

## Prerequisite

This article is for readers who've finished part 1 and are interested in the technical part.
Readers should already know the following concepts:

- bash, terminal
- Unix Philosophy
- commonly used POSIX tools

I will intentionally skip explaining syntax, and focus on the design/thought process.
We are living in a world where answers are no longer valuable.
One can always find an answer on the internet.
Asking the right questions or having the right mindset is more valuable nowadays.

## First Thing First: The Sauce

```bash
wcount=0;
fcount=0;
today=$(date +%Y-%m-%d);
while read -r file; do
  cur=$(wc -w < "$file");
  prev=$(getfattr -n user.prev_wc --only-values "$file" 2>/dev/null || echo 0);
  delta=$((cur - prev));
  wcount=$((wcount + delta));
  setfattr -n user.prev_wc -v "$cur" "$file";
  echo "$file: cur=$cur prev=$prev delta=$delta";
  ((++fcount))
done < <(find ~/data -type f -newermt "$today");
dd="${today:2}"
dd="${dd//-/}"
result="$dd;$wcount;$fcount"
echo $result
sed -i "1i$result" ~/chronicle/wc-global

```

Brief:

- use find to get all the files with a modified date greater than or equal to today
- run word count on each file
- get previous word count from a custom attribute
  - this is the case when you edited an older file today
  - you only need to calculate the delta (the words you added)
  - I use custom attribute to store the value
- set the current word count value back to the custom attribute
- output the result
- done

## How I Came Up With This Solution

### Prompt History

The very first one

```txt
I want to scan all the text files recursively in the current folder.
Here are the requirements:
* scan all files that are modified on a given date
* pipe all the text to wc to get the word count
* sum up all the word counts
* written in bash script
```

Brief comments on all the follow-up questions I asked:

- LLM gave long scripts that were too hard to comprehend
- spent some time working on the syntax and trying to compose it myself piece by piece
- started questioning the algorithm. Realized the role of created date, modified date and delta
- went back to the basics, double-checked the limitation of using a single date value in this algorithm
- accepted the limitation and decided to use the simplest solution
- figured out the last piece of the puzzle: use custom attribute to store the last state
- made my way to the result and also learned the prompt tips mentioned in part 1

### Retrospective

I started my planning phase using Claude Web client, and then switched to Claude CLI
once I was comfortable working with the generated scripts.

Besides the overkill scripts, there was also some quirky bash syntax that I was not aware of.
I tend to understand all the quirks before running the scripts or adding new features.

LLM kept generating complicated scripts that made me start to wonder what I was trying to solve.

LLM did help me understand the limitations and essential parts of the algorithm,  
though it used overly complex language.

Finally I came up with the idea to store the "state" in the metadata of a file
which was the last piece of the puzzle. Everything went smoothly afterward.

## AI Pros & Cons

### Overkill Solution

The script was written formally with separate sections for arguments and error checks.  
This is practical for large teams, but overkill for a personal project.

LLM gave a complete solution including:

- introduce a database to store all the state
- use git to help track the modification as well as the state
- use file system snapshot to track

These are all good options if I have the following requirements:

- users require querying arbitrary history data multiple times, and the result needs to be idempotent
  - which is not the case. I run the script on a daily basis, and keep all the records in one place
  - i.e. NO need to worry about querying or idempotence
- users require tracking detailed modifications such as word deletion or file removal
  - in my case, I count additions exclusively

Things got clearer once I decided to keep the project scope minimal.

LLM also helped with implementing best practices in a text-based data store system. We could explore
the idea in another article.

### Failed To Deliver Simple Solution

This one is debatable. I thought giving accurate prompts would help the LLM deliver simpler solutions.

But maybe simplicity is just a matter of taste.

Can't tell if it was me being grumpy or LLM failed to express minimalism 😓

### Repeating Themselves For The Same Mistake

This one is hilarious and interesting at the same time.

I saw the LLM make the same mistake and then immediately correct itself—twice in the same response!  
(This happened with two different LLMs, once each.)

I cannot tell if there's another thread to monitor the response and correct themselves
dynamically during a response.

If not, it would be ridiculous if LLM already knew the answer, and still deliberately
threw out a wrong answer first 🤣🤣

## **End Of The Article**

Enough words for me today 😮‍💨

It turns out skipping all technical/syntax explanations can still be really lengthy!

Hope you learned a thing or two here. See you in the next one 🤓
