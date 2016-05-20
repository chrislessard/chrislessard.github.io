---
layout: post
title:  Lesson 0 - Formal Logic
date:   2016-05-18 19:15:42 +0000
category: math
---

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>

 <script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_CHTML">
 </script>

Before we can begin to tackle Discreet Mathematics and Computer Science, it's important that we first understand one of their supporting entities: formal logic.

People have devoted an entire field of study to logic; their primary focuss is to examine ***propositions***,
***statements*** and ***deductive arguments***. The logic they practice lends itself well to programming and mathematics, as the
paradigms employed in those fields are what most people would consider to be "logical". As we'll see, most people' have a fairly good understanding of logic, but need to refine their understanding.

The decision to use formal logic in mathematics is debated to some extent, although most people agree that the principles and ideas we'll be visiting shortly are ones worth adopting. Many students like to claim that the concepts described here are largely common sense,
but because our idea of common sense tends to range vastly from person to person, we'll be explicit so as to avoid confusion. Courses
in discreet mathematics often define logical concepts concretely from the beginning, much as we will do here.

You might be wondering why logic matters at all. Well, as I'm sure you already know, English isn't a particularily
accurate language. Unfortunately, many problems in both Computer Science and Mathematics require us to be very precise, which is why we must train ourselves to be specific. This can help us word our problems clearly, and analysize others quickly when English has tendency to fall short.

If you grew up in the North America, you were probably exposed to "word problems" in elementary school. These problems typically attempt to relate math to the real world, and are typically similar to:

*A car and a bus set out at 2 p.m. from the same point, each headed in the same direction. The average speed of the car is
30mph slower than twice the speed of the bus. In two hours, the car is 20 miles ahead of the bus; determine the speed at
which the car is travelling.*

Word problems often annoy people because they force them to spend time deciphering what is truly being asked, rather than simply applying their knowledge. While it's obviously true that we adapt the real world to our more precise mathematical models, a lot of these questions do no more than add pointless context to the things we actually care about. Thankfully, logic can also help us solve word problems by deducing their core meaning.

So, let's start with natural language: full of logical concepts, but altogether a weak medium for communicating them. As examples of English's short commings, consider the following statements:

"Prositutes appeal to the pope."
"Miners refuse to work after death."
"New obersity study looks for larger test group."

Each phrase can be interpreted in multiple ways, and none of their intended meanings can be deciphered once context is removed. Generally speaking, if we want to define our problems, it is best to avoid these kinds of slip ups. If you need to solve a problem, it shouldn't matter where that problem has arisen, otherwise our work wouldn't be portable.

As mentioned, you'll soon see that once you have learned some formal logic, deciphering word problemsand stating questions accurately will become much, much simpler.
