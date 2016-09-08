---
layout: post
title:  Lesson 1 - Quantifiers
date:   2016-05-18 19:15:42 +0000
category: math
---

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>

 <script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_CHTML">
 </script>

### 0. How do you quantify a statement?

Quantification, as its name suggests, is a way of analyzing a *quantity* of "objects". These "objects" could be anything - numbers, people, buildings, etc; they are simply "things", and there are three general ways to quantify them. Any statement pertaining to objects may refer to *none* of them, *some* of them, or *all* of them.

As an example, let's consider a class of students. We don't know exactly how many students are in the class, but we don't actually care about that. There could be 5 students, or 5 million. The nice thing about logic is that - like algebra - we can discuss the class' properties without binding ourselves to the identities of the students themselves. 

That last sentence might be a bit confusing, so let's again clarify with an example. We don't know who exactly is in this class - we don't know there names, their appearances, or any other aspects of their personality. Despite that, without any tools but quantification, I can still convey some facts to you about the class:

- Every student is taking a math course.
- Some of the students are boys.
- None of the students understand quantification.
- Eventually, all students will understand discreet math.

Each statement uses one of the three "quantifications" mentioned earlier. Don't forget, you have no idea who is in this class, but we nevertheless presented some general information about them.

Consider another, more interesting set: one consisting entirely of even natural numbers. The natural numbers can be (loosely) defined as the set of all positive integers, and zero (depending on who you're asking). An even number is defined as one that can be expressed as a multiple of two. Now have a look at these two sets:

$$s = {4, 8, 16, 14, 26}$$  
$$t = {2, 10, 400, 96}$$

If you think about it, both $s$ and $t$ fit the description of the set we provided earlier. This, however, is exactly the point we're trying to drive home: we don't actually care which one it is! We can discuss properties about the set without needing to know the actual members in it. We'll revisit this concept when we start talking about proofs, you'll get a better idea of this. 

### 1. Using Symbols

Computer Scientists are lazy. Namely, they don't like to write more than they have to, so they tend to use symbols instead of words. Each of these symbols represents one of the quantifier we mentioned earlier:

*The Universal Quantifier* : $\forall$

$\forall$ is the equivalent to "all" or "everything". When you read the symbol aloud, read it literally as "for all". When we use this quantifier, we are refering to the entirety of our context. If we're thinking about sets and objects, it means we're refering to every object in the set. In the class example, $\forall$ is used to refer to every student in the class. There are lots of ways to discuss for all in english - "all", "every" and "each", for example, all refer to the same overarching amount.

When we use this quantifier and no other in a statement, we say that we have written a "universal statement".

*The Existential Quantifier* : $\exists$

$\exists$ is the equivalent to "some". When read aloud, read it literally as "there exists" or, more verbosely, "there exists as least one". When we use this quantifier, we are refering to some part of our context. If we're thinking about sets and objects, it mean's we're refering to at least one object in the set. In the class example, $\exists$ is used to refer to some portion of the students in the class. Don't be confused: it doesn't actually matter how many students we're refering to - as long as *at least one of them* satisfies the property at hand, we're happy.

When we use this quantifier and no other in a statement, we say that we have written an "existential statement".

#### 1.5 How quantifiers relate to one another
If we have a collection of objects in a statement, like in the phrase "Some of the students are boys", we can conclude that at least one of the students in the class is a boy. There may be more than one boy in the class, but all we know for sure is that some of them are. Knowing this, we can automatically deduce that a statement like "None of the students are boys." is false. On the other hand, a statement like "All of the students are boys." *may* be true. We can't be sure with certainty.

This is sort of a trick: Existential statements can always be derived from universal ones, but the inverse is not necessarilytrue. Consider these statements:

a) "All the students in the class have brown eyes."  
b) "At least one of the students in the class has brown eyes."

If we tell you that (a) is in fact a true statement, you can automatical deduce that (b) is as well. Since every student have brown eyes (given by (a)), we can of course find at least one of them (to verify (b)). 

However, if we are given that (b) is true, we cannot necessarily conclude that (a) is also true. The truthfulness of (b) does not reveal enough information about all the students for us to verify (a). 

### 2. Deducing truth from quantifiers
There are a few ideas that arise out of these two quantifiers. For the following claims, I'll use this table, giving some info about four people in an office:

| Name    | Favourite Programming Language | Likes Math |
|---------|--------------------------------|------------|
| Monica  | Python                         | F          |
| Alex    | Ruby                           | F          |
| Jeffery | R                              | T          |
| Lola    | Haskell                        | T          |


1. Many statements dealing with collections of things use quantifiers.

2. If I make a statement that employs a quantifier, we say that the statement is *quantified. Every statement is either True or False.
	This is one of those axiomatic things that we all just sort of agree on. If you're interested in learning more about it, send me an email.


	 **To prove that a universal statement is true**, you must show *that every element in your collection* maintains the property it describes.

	> **Example: Everyone at the office has a favourite programming language**.
	>
	 > I verify that none of the entries in the chart have "null", and since everyone has a favourite language, the statment is true.

	 **To prove that an existential statement is true,** you must find *at least one element* in your collection that maintains the property it describes.

	 > **Example: At least one of the workers in the office has a name starting with J.**

	> "Jeffery" begins with a J, meaning that at least one of our office workers satisfies the property, and therefore the statement is true. Of course, Jeffery is the only one who satisfies this property - a universal quantification would have made the statement false.

	As it turns out, Universal and Existential quantifiers are sort of "opposites". To disprove one, we use the other:

	**To disprove a universal claim**, you must find *at least one element* in your collection that does not maintain the property it describes.

	> **Example: Everyone at the office likes math.**

	> Clearly this claim is false, because I can find at least one (two in fact!) people in the office who do not like math. In otherwords, the universal claim is false because *there exists* at least one person who doesn't like math: in this case, Monica and Alex are those two people.

	**To disprove an existential claim**, you must show that none of the elements in the collection satisfy the property.
	> **Example: At least one person at the office has C as their favourite language.

	> Again, this claim is false, because I can't find a single person who's favourite language is C. In otherwords, the universal claim is false because *for all* the employees, none of them satisfy the property.

### 4. But what about nothingness?? 

You may have noticed that I neglected to offer a symbol describing the concept of "none" or "nothingness". One exists, but it is most commonly used in set theory to describe the "empty set". While the logic we've discussed implicitely uses concepts from Set Theory, we won't typically use the empty set to quantify statements. 

We'll revisit this idea later. If you're wondering, the symbol looks like this:

$$\empty$$