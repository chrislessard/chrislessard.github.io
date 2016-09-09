---
layout: post
title:  Intermission - A lesson about sets and rigour
date:   2016-09-01 19:15:42 +0000
category: math
---

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>

 <script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_CHTML">
 </script>

We've touched on the idea of a set, but haven't formally defined just what a set is. Most people would be tempted to use the definition "a set is a collection of distinct objects" and leave things at that. It turns out that this definition lacks something; something that led to a very famous problem about a hundred years ago. 

It was the during the Spring of 1901 that a young mathematician named Bertrand Russell stumbled upon a discovery that would pose a very serious threat to the work done in his field. Russel, a sort of polymath, had been working on *The Principles of Mathematics*, a book whose prime focus would be to demonstrate that mathematics and formal logic were in fact identical entities. He had studied the foundations of mathematics at Trinity College, Cambridge, and had become convinced during a visit to the International Congress of Philosophy, held in Paris, that a logical reform was needed regarding the philosophy of Mathematics$^1$. Naturally, Russel's work would involve the idea of sets and set theory; many of the ideas central to set theory are of critical importance to mathematics to this day. The field was not void of its challenges: paradoxes regarding sets had been discovered not long before the turn of the 20th century. In 1897 the Italian mathematician Cesare Burali-Forti had discovered a [paradox](http://mathworld.wolfram.com/Burali-FortiParadox.html) by which no set could contain all ordinal numbers - a concept which had been introduced by Georg Cantor just a few decades before. Russel had been studying Cantor's work as well, though his discovery would prove to be an extremely powerful and remarkably simple paradox that would disrupt all of Set Theory. What's more, unlike other logical impossibilities before it, Russel's paradox arose solely from the simple definition used to describe sets themselves.

There are a few ways to explain the discovery. The most intuitive version describes the problem with an analogy as follows:

*"There is a town in which a barber lives. The barber solely shaves each man who does not shave himself. If this is the case, who shaves the barber?"*

The paradox is easy to spot. If the barber shaves himself, then he will have broken his own rule by shaving a man who shaves himself. If he must not shave himself, however, he is then forced by his own rule again to shave himself, as he now fits the criteria. This chain of reasoning can continue endlessly, hence the paradox.

The formal explanation of the problem in only a little bit more involved. Consider the following definition:

<h4 style="text-align:center"> <em> A set is a collection of zero or more distinct objects.</em></h4>

This may seem a bit vague, and it is somewhat intended to be. A set is a collection, and the objects can be anything: numbers, letters, events, people, whatever. There is one type of member, however, that leads to Russel's paradox. The explanation is as follows:

We will consider a special variety of sets, ones which contain *themselves* as an element. These sets are called *extraordinary* sets, and resemble the form:

$$A = \{1, 2, 3, ..., A\}$$

Any other set that does not contain itself as an element is thus called an *ordinary* set. To relate these concepts to the barber analogy, all ordinary sets are equivalent to the men who shave themselves, and all extraordinary sets the men that do not.

Now, we consider one very specific set, who acts as the barber. This set, we'll call it $P$, is defined as the set of all ordinary sets. Much like how we ask who shaves the barber, here we ask ourselves whether $P$ is an ordinary or extraordinary set. With some reasoning, it follows that it can be neither. If $P$ is an ordinary set, then it would need to be included within itself, as $P$ is composed of all ordinary sets. If $P$ became a member of itself, however, it then becomes an extraordinary set, and so we must remove it. This action returns $P$ to the status of ordinary, and so on. This chain of reasoning may continue endlessly, hence the paradox.

Russel wasn't fully aware of the ramifications of his discovery, and was quick to write about it both in his book and in various letters to other mathematicians. Luckily, most work would not be disrupted, as the flaw could be amended which a small change to the definition of a set:

<h4 style="text-align:center"> <em>A set is a collection of distinct objects, except for the set itself.</em></h4>

Mathematicians were careful before, but they've been on their toes ever since. This kind of paradox is precisely why we must always be so rigorous when we do Mathematics. Mathematicians have come to a sort of universal agreement that we must always be skeptical until we are fully convinced of ideas, lest they contain inherent flaws like the one Russel came up with. It seems over the top in some scenarios, but it is of utmost importance that substantial rigor be provided whenever an argument is made. Some students of Mathematics and Computer Science become confused by this: they believe that there is a particular way to write, or a series of steps to follow, in order to achieve perfect rigor. In fact, this is impossible. With such a wide variety of problems, it is more important that students recognize that a rigorous argument is one that cannot be broken. When reading a proof, no one should be able to poke holes in your argument, and your points should flow logically from one to the other. It will be difficult to understand this at first, but as you see more examples, things will become more clear. We can never be sure that another Bertrand Russel will show up to clean up after us, so its best to remain on our guard.

Sources:

1. Russel, Bertrand. "Letter to Frege." Letter to Gottlob Frege. 1902. MS. [source](http://isites.harvard.edu/fs/docs/icb.topic1219929.files/FregeRussellCorr.pdf), n.p.

2. Trudeau, Richard J. "Introduction to Graph Theory." Dover Publications.
