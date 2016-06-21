# Pat's Salmon Cookies - Day 2 Lab Assignment

## Implement a Constructor Function

In class, we learned how to refactor a group of object literals by using a constructor function and creating instances.

Let's replace your object literals for the salmon cookie stands with a single constructor function that, when called with 'new', creates new instances.

Your code will end up with probably 1/4 the number of lines it had before refactoring, and every line of code you don't have is one you don't need to debug!

See pages 106-109 in your textbook for a constructor example... and especially focus on 108 and 109. Also refer to the demo code from class that showed how we can view a constructor function as a translation of an object literal.

## Replace the Lists with Table

We will also be replacing the lists of data for each store, and building a single table of data instead! Tables are much easier to read than lists, and presenting data in a table makes analysis more intuitive and comprehensive.

What numbers should go into a table? Your client, Pat, has reviewed the lists of data you dutifully provided yesterday, and has decided that's actually not the best way to view the information. Here's what Jo wants:

- A table to show the total amount of projected cookie needs at each location, with the table displaying the cookie stand location, the total number of cookies needed for each location, an hourly breakdown of total cookies sales for each location, and [STRETCH GOAL] a row of totals for each column.
- Here's what it should look like, in general (this example is for structural purposes, not formatting, since you can style however you want):

### Cookies Needed By Location Each Day

|               | Daily Location Total | 6:00am | 7:00am | 8:00am | 9:00am | 10:00am | 11:00am | 12:00pm | 1:00pm | 2:00pm | 3:00pm | 4:00pm | 5:00pm | 6:00pm |
|------------------------|-------|--------|--------|--------|--------|---------|---------|---------|--------|--------|--------|--------|--------|--------|
| 1st and Pike      |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| SeaTac Airport           |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Seattle Center |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Capitol Hill       |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Alki        |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Totals                 |       |        |        |        |        |         |         |         |        |        |        |        |        |        |


## User Stories (MVP)
- As a developer, I want to implement a constructor function, so that I can reuse code and eliminate much of the duplication in my JavaScript
- As a user, I want cookie sales data represented in tables rather than lists

## Technical Requirements
- Good use of a constructor function; style and syntax are correctly implemented
- Each cookie stand location should have a separate render() method that creates and appends its row to the table
- The header row and footer row are each created in a stand-alone function
- Duplicate code has been removed and DRY principles are evident
- Working on a non-master branch for the day, with regular commit history

## User Stories (Stretch)
- As a developer, I will continue to work on design aspects of the public-facing page.
- As a developer, to facilitate design work, I will build a style guide.
