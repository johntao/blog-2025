---
title: "Word Count: The Hello World In The Text Analysis Realm Part 2"
description: ""
pubDate: 2025-10-18
tags: []
---

## Prerequisite

This article is for readers who've finished part 1 and get interested to the technical part.  
Readers should have already known the following concepts:

- bash, terminal
- unix Philosophy
- commonly use POSIX tools

I would skip explain syntax intentionally, and focusing on the design/mind flow.  
We are living in a world where answers are no longer valuable.  
One can always find an answer on the internet.  
Asking the right questions or having the mindset are more valuable nowadays.

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

- use find to get all the files having modified date greater than today
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
Here's the requirements:
* scan all files that is modified on given date
* pipe all the text to wc to get the word count
* sum up all the word count
* written in bash script
```

Briefly commenting all the follow-up questions I've asked:

- LLM gave long scripts that was too hard to comprehend
- spent some time working on the syntax and trying to compose it myself piece by piece
- start questioning the algorithm. realize the role of created date, modified date and delta
- back to the basic, double check the limitation of using a single date value in this algorithm
- accept the limitation, make the call to use the simplest solution
- figure out the last piece of the puzzle is to use custom attribute to store the last state
- make my way to the result and also learn the prompt tips mentioned in part 1

### Retrospective

I start my planning phases using Claude Web client, and then, switch to Claude CLI  
once I am comfortable working with the generated scripts.

Besides the overkill scripts, there were also some bash quirky syntax that I am not aware of.  
I tend to understand all the quirks before running the scripts or adding new features.

LLM kept generating complicated scripts that I started to wonder what am I trying to solve.

LLM do help me through the process of inspecting all the limitation and the essential parts  
of the algorithm. (still, explain in an over-engineering language)

Finally I come up with the idea to store the "state" in the metadata of a file  
which was the last piece of the puzzle. Everything goes smooth afterward.

## AI Pros & Cons

### Overkill Script

The script was written in a formal way which split the code into sections including arguments
and errors check. This is practical in a large developer team, but clumsy for a personal scripting project.

### Overkill Solution

LLM gave a complete solution including:

- introduce a database to store all the state
- use git to help track the modification as well as the state
- use file system snapshot to track

These are all good options if I have the following requirements:

- users require query arbitrary history data multiple times, and the result needs to be idempotent
  - which is not the case, I run the script in daily basis, and keep all the records in one place
  - i.e. NO need to concern about querying or idempotence
- users require to track detailed modification such as words deletion or file removal
  - in my case, I count addition exclusively

Things get clearer once I made up my mind to set the scope of this project to minimum.

LLM also helps on implementing best practice in a text-based data store system, we could explore  
the idea in another article.

### Failed To Deliver Simple Solution

This one is debatable, I felt like giving accurate prompts should help LLM better solution.

Also, I felt like simplicity is somehow an aesthetic take.

Cannot tell if it was me being grumpy or LLM failed to express minimalism 😓

### Repeating Themselves For The Same Mistake

This one is hilarious and interesting in the same time.

I observed LLM making the same mistake and then immediately correct themselves in the same  
response twice! (same question and behavior happened on different LLM, each happened once)

I cannot tell if there's another thread to monitor the response, and correct themselves  
dynamically during a response.

If not, it would be ridiculous if LLM already knew the answer, and still deliberately  
threw out a wrong answer first 🤣🤣
