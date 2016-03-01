---
layout: post
title:  Getting Cozy with Proofs
date:   2016-02-16 19:15:42 +0000
categories: math
---

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>
<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_CHTML">
</script>

I remember sitting in my family living room around this time a few years ago, skimming through university websites and trying to decide what I wanted to go off and study. I was pretty convinced that CS was the only way to go at this, but as I began to look into requirements for most of the programs I'd be applying to, I caught on to a trend I wasn't too keen on: no matter where I looked, CS seemed to require math. Before long, I'd stepped away from the applications and was dropping into links like these:

01. [https://www.quora.com/Should-I-pursue-computer-science-if-I-am-bad-at-math](https://www.quora.com/Should-I-pursue-computer-science-if-I-am-bad-at-math)

02. [http://www.computersciencedegreehub.com/faq/computer-science-degree-require-lot-math-courses/](http://www.computersciencedegreehub.com/faq/computer-science-degree-require-lot-math-courses/)

03. [http://www.careerigniter.com/questions/do-i-need-to-be-good-at-math-to-be-a-computer-programmer/](http://www.careerigniter.com/questions/do-i-need-to-be-good-at-math-to-be-a-computer-programmer/)

04. [https://www.youtube.com/watch?v=AziNzSvPZ-0](https://www.youtube.com/watch?v=AziNzSvPZ-0)


...You get the point. Don't get me wrong, I'd taken all the required high school math courses and I'd done quite well in them. Getting into a university wasn't worrying me - committing myself to something that I found extremely difficult was.

Before I go on, here's a tl;dr to summarive what I've since learned, in case you're currently in the same position I was:

*(Note: you don't have to read on past this, but if you're concerned, my personal anecdote might help you make a decision)*

- Computer Science != Programming
- If you're wondering whether you *need* any math to program, the answer is no. It does, however, help make a great programmer.
- You probably haven't been exposed to mathematics in their nicest light, and you may very well like them once you are.

If you're interested, I'll explain how I came to these conclusions, and how I feel about the subject today, with roughly 2 years of experience under my belt.

When I committed myself to CS, I developed a sort of personal contract by which I would complete the bare minimum amount of math courses I needed to get the degree, and spend the rest of the time focussing on programming. I was pretty happy with that, until the fifth minute of my first class, when my Calculus teacher shattered all hopes of it ever working.

There are three first year Calc courses at U of T, which essentially break down like this:

- One of them has no proofs (i.e. my obvious choice at this point in the story)
- One of them is mostly proof based
- One of them is virtually entirely theoretical

My instructor told us that if we were studying CS, we'd be better off in one of the other two courses. I spoke to him after to ask why that was true, and he told me it was because most upper year CS courses were essentially math courses.

So here I was, listening to someone wiser tell me that I was making a mistake. At this point I had a more serious problem, because now it was too late to turn back. Of course, I didn't *want* to switch into something more involved. I knew from high school that math could take me a very long time, and that many hours would be spent on problem sets. On top of that, I still worried that I wouldn't retain or truly understand the material. To this day I can still be hilariously bad at mental math, and at that time I didn't believe that I was ever really going to improve at all. I'd spent a whole year doing calculus prior, and I couldn't remember what first principles were. To make things worse, as a few weeks went by, I'd heard from my roommate that the other Calc course was proving to be extremely difficult.

Despite my instructors advice, I stayed in the course for the whole year, and it wasn't particularly difficult. It still took me quite some time, but that was mostly because computations can be quite dry. One might say that I'd caught a lucky break. The real difficulties began in my second semester when I took a mandatory course in Discreet Mathematics. At first, it seemed to be pretty promising; here's a direct quote from the [course notes](http://www.cs.toronto.edu/~gfb/csc165/2015F/CSC165.2015W.Notes.pdf):

*You need this course if you DO:*

- *Memorize math*
- *Have trouble explaining what you are doing in a mathematical or technical question*
- *Have trouble understanding word problems*

*You need this course if you DONT*

- *Like reading math textbooks to learn new math*
- *Enjoy talking about abstract x and y just as much as when concrete examples are given for them*

Every one of those points had described me, and I wasn't even a page in. Needless to say, I thought I'd finally found a course that might help me improve.

In short, it *did* help me a *lot*, but man, did it hurt to get there.

Like I said, things went well at first: it turns out that I'm pretty good with formal logic. It was mostly around the fourth week, when we finally got to proofs, that things started to take a turn for the worst. From that point on, that course became a total nightmare. I spent countless hours trying to understand the material and finish the assignments, often to what felt like little avail. I met a few other friends who were struggling as well, and we ended up working through it together. I needed to get a good mark in the course to be finally admitted into the program itself, so I felt quite a bit of pressure. My lecturer wasn't exactly the best communicator, and we were eventually hit by a TA strike which meant I wouldn't have any tutorials to ask questions in. Shit sucked. Hard.

I managed to do quite well on most of the assignments + midterms, but I felt like I was relying too much on my friends. We'd been working together on almost everything, and I still wasn't convinced that I could stand firmly on my own two feet yet. Most of the course had focussed on different standard proof techniques, with a bit of computaional analysis. When it came time for the exam, I froze up as I came across questiosn I couldn't solve. I walked out hoping I could get by with a half-decent mark to fit the program requirements.

Well, I managed to pull off an 81. That might not be an outstanding mark or anything, but it definitely felt like one to me - I couldn't believe it. I'd worked so hard and it had actually payed off. What's more, once I'd finally calmed down, I realized that I had actually started to get a better sense for solving mathematical problems (something I was starting to notice in my Calc class). I wasn't dealing with boring computations anymore, but rather puzzles, and my perspective on the matter was shifting from one where I simply absorbed facts to one where I sought to understand what was going on, intuitively.

Here are a few things that, in retrospect, I learned from that course:

1. Most people have a (very) hard time with their first exposure to real math.
2. That course wasn't actually hard... to anyone comfortable with proofs. It was definitely challenging for someone who had never seen them before.
3. Puzzle solving and rigour trumps computation
4. Once you start trying to understand why mathematical facts/theorems are true intuitively, not only do things become more interesting, but they become much easier.

I still didn't fully become comfortable with proofs until midway through the follow-up course in my second semester. If you're wondering how I came to felt that way, they only thing I can tell you is this: practice. The more you read (good) proofs, think intuitively about why they are true, and attempt to prove things on your own, the better you will get.

You will fail a lot, do this as quickly as possible. The more you learn doesn't work, the more you'll begin to get a sense for what does work. Baby ideas, such as the formal definition of an odd/even number, will come back. If you understand these things, you will understand more complicated things.

If there's one piece of advice I can forward to you, it would have to be one that my very talented friend [Rob](http://varsityblues.ca/roster.aspx?path=&rp_id=7453) forwarded to me: before you can prove anything, you have to understand *why* it's true.

It took me a while to get used to proofs, and "real" mathematics, but now that I am I couldn't be happier. Even though they're usually the most challenging, my courses in discreet math and analysis are always my favorites. Eventually a breakpoint will come, and you'll solve something. It'll feel really really good, and you'll want to do it again. Don't worry if it seems impossible at first, it does to most of us. If you're really willing to put in the time and get at it, it'll pull through. So, if you feel like I did, just remember that I used to think I was awful in math, and now I'm routinely beating the class average.

In the coming weeks (and probably months), I'll be writing a few posts to go over some of the concepts I learned in that discreet mathematics course. There are many, many resources online to explain them, and many phenomenal textbooks, but they are technical and don't tailor themselves that well to people who feel like I did. Since I struggled so much with them, I feel like I may be able to put those concepts in a way that reaches people more easily. We'll see, I won't get ahead of myself.

P.s. If you are going to pickup any books on mathematics, I **highly** recommend Trudeau's [Intro to Graph Theory](http://www.amazon.com/Introduction-Graph-Theory-Dover-Mathematics/dp/0486678709) on Dover Publications. Its a phenomenal intro to pure math and one of its most enjoyable branches.
