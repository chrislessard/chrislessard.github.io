---
layout: post
title:  Basic Formal Logic
date:   2016-02-29 15:30:42 +0000
categories: math
---

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>
<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_CHTML">
</script>

So, with everything in place, we can get into some *real* math. These posts I'll make are meant to help anyone looking to understand basic discreet mathematics get a sense for them, and get some practice.

Before we can begin to prove anything interesting, we need to formalize your understanding of logic. Most people tend to like this early stage; formal logic is extremely useful for quantifying statements and fairly intuitive to grasp. You'll come to notice that the concepts introduced here become night in day in any course on Discreet Mathematics, Data Structures or Algorithms, so it's best to learn them as early as possible. Moreover, it will introduce you to a new way of thinking - one that may be unfamiliar now - but will help define your skills as a computer scientist. The more you program, the more you begin to solve problems "computationally", i.e. in such a way that you could have a computer solve the problem for you. Computational thinking is the corner stone of computer science - one of our biggest questions to this day asks what can and what cannot be considered in computational terms. Since computers don't tend to like ambiguity, we'll need to be more specific in order to make better use of them.

Like I said, formal logic is extremely useful for "quantifying" statement, but what did I mean by that?

Human languages (especially English) are notoriously ambiguous. Consider the following headlines:

- "Prostitutes appeal to the Pope"
- "Two sisters reunite after 18 years at checkout counter."
- "Panda mating fails: veterinarian takes over"

Each can be interpreted in more than one way, making it hard to understand exactly what they mean without the help of context or grammar. Perhaps these are particular examples, but they highlight the fact that relying on natural language may not be the best way to describe problems in mathematics.

Of course, proofs are still written in English, and problems still described with words. We must simply train ourselves to use a more precise subset of our vocabulary: one that can be expressed in purely "logical" terms just as it can be in English.

To begin, we'll look at two common quantifiers. A quantifier is as it sounds: something we use to determine a quantity. That may sound funny, I find its best to dive right into some example. Here are by far the two most common ones you will ever use:

The Universal Quantifier: $\forall$

The Existential Quantifier: $\exists$
