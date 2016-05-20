---
layout: post
title:  Lesson 1: Quantifiers
date:   2016-05-19 19:00:42 +0000
category: math
---

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>

 <script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_CHTML">
 </script>
 

First and foremost, we need to learn how to quantify statements.
 
Quantification, as its name suggests, is a way of analyzing a *quantity* of "objects". These "objects" could be anything - numbers, people, buildings, etc; they are simply "things", and there are three general ways to quantify them. Any statement pertaining to objects may refer to *none* of them, *some* of them, or *all* of them.

As an example, lets consider a class of students. We don't know exactly how many students are in the class, but we don't actually care about that. There could be 5, or 5 million. The nice thing about logic is that - like algebra - we can discuss properties without binding ourselves to specifics. Without any tools but quantification, I can convey some facts about the class:

- Every student is taking a math course.
- Some of the students are boys.
- None of the students understand quantification.
- Eventually, all students will understand discreet math.

Each statement uses one of the three "quantifications" mentioned earlier. Whats more, there are symbols that we can use to refer to them! We'll leave the idea of "none" behind for now, focussion instead on "some" and "all". Each of these symbols represent what's known as a *quantifier*:

*The Universal Quantifier* : $\forall$

$\forall$ is the equivalent to "all" or "everything". When you read the symbol aloud, read it literally as "for all". When we use this quantifier, we are refering to the entirety of our context. In the class example, $\forall$ is used to refer to every student in the class. There are lots of ways to discuss for all in english - "all", "every" and "each", for example, all refer to the same overarching amount. 


*The Existential Quantifier* : $\exists$

$\exists$ is the equivalent to "some". When read aloud, read it literally as "there exists" or, more verbosely, "there exists as least one". When we use this quantifier, we are refering to some part of our context. In the class example, $\exists$ is used to refer to some portion of the students in the class. Don't be confused: it doesn't actually matter how many students we're refering to - as long as *at least one of them* satisfies the property at hand, we're happy. 

So, if we have a collection of objects in a statement, like in the phrase "Some of the students are boys", we can conclude that at least one of the students in the class is a boy. There may be more than one boy in the class, but all we know for sure is that some of them are. We cannot conclude that every student in the class is a boy, nor can we conclude that none of the students are boys.

We'll talk about the concept of "none" or "nothingness" later when we relate these ideas to set theory. 

There are a few ideas that arise out of these two quantifiers. For the following claims, I'll use this table, giving some info about four people in an office:

| Name    | Favourite Programming Language | Likes Math |
|---------|--------------------------------|------------|
| Monica  | Python                         | F          |
| Alex    | Ruby                           | F          |
| Jeffery | R                              | T          |
| Lola    | Haskell                        | T          |


1. Many statements dealing with collections of things use quantifiers. 

2. If I make a statement that employs a quantifier, we say that the statement is *quantified*. 
3. Every statement is either True or False.
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
	
