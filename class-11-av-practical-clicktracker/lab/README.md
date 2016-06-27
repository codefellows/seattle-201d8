## New week, new project!
# BusMall

### Backstory

You've been hired by a startup called BusMall, whose product is similar to the SkyMall catalog found in the seatback pockets on airplanes: a catalog of assorted high-markup products provided to a captive audience seeking a mental escape from the drudgery of travel.

But in this case, BusMall catalogs are placed on Puget Sound regional transit system buses... whose overall travel times are now comparable to cross-country flights, after all.

Since catalogs are expensive to print and distribute, and the products cost money to make and warehouse, and BusMall is a lean startup that needs to carefully watch its expenditures, BusMall wants to feature only the items in its catalog that are the most likely to sell.

This means that BusMall wants to do market analysis on proposed products to test their potential customer interest... before actually putting them into the catalog and getting the manufacturing wheels in motion.

### Problem Domain

To make this market analysis maximally effective, BusMall wants you to build an app that displays potential products to individuals in focus groups (three products at a time, side-by-side-by-side, so you'll need to manage the size and the aspect ratio of the images and perhaps edit them a bit; Mac users can do this in Preview (very cool!), plus, there are lots of online tools.

The app's purpose is to have the group members choose which product, of the three displayed images, that they would be most likely to purchase, and then store, calculate, and visually display the resulting data.

To keep the product selection process as untainted as possible, you have been instructed to not allow any results to be shown to users until there have been a total of 25 selections made.

The marketing team is not only interested in the total number of clicks, but also the percentage of times that an item was clicked when it was shown. So, you'll also need to keep track of how many times each image is displayed and do the calculations.

You are also responsible for the look and feel of the app, so don't forget a custom font, color palette, layout with semantic HTML, and so on.

# User Stories

Part of your assignment today is to write your own user stories. Be sure to consider the multiple roles involved: the marketing research team, the developer, and the focus group participant who will be using the application. Try to write 4-5 user stories for each role. DO THIS STEP FIRST in a file called **user_stories.md**. The commit logs in your repo will have a first couple of commits for the scaffolding process, but next you should have a 'user stories' commit that is in place before any code is written.

A wise student would take about 30-60 minutes to work on the user stories and also draft a technical plan for the project (a detailed to-do list of things to make, step by step and tested at each stage) before getting into the code. That time spent in thought and planning will make the code flow a lot faster. Give yourself a series of little problems to solve (rather an a ginormous thing that you just wade through and poke at).

Set 'em up, and knock 'em down.

Plan your work, and work your plan.

## Goals to complete by the start of class Tuesday morning

- Create a new repo for this weekly project called **bus-mall** at the root level of your *~/CF/201* directory.
- Scaffold your repo with the usual README, CSS, JS, and HTML files, plus a *img/* directory.
- Retrieve the assets from the *assets/* directory in the *week-03* directory of our class repo and place them in your image directory.
- Write your user stories as described above and place them in a file called *user-stories.md* in your repo. Utilize good Markdown style to make this document look nice.
- The thing you want to build today will select three random photos from the image directory and display them side-by-side-by-side in the browser window.
- In addition, you'll want to be able to receive clicks on those displayed images, and track those clicks for each image. You'll also want to track how many times each image is displayed, for statistical purposes.
- Upon receiving a click, three new non-duplicating random images need to be automatically displayed. In other words, the three images that are displayed should contain no duplicates, nor should they duplicate with any images that we displayed immediately before.
- To do this, you'll want a constructor function that creates an object associated with each image, and has (at a minimum) properties for the name of the image, its filepath, the number of times it has been shown, and the number of times it has been clicked.

**This is an individual assignment today, but you are free (heck, even encouraged) to collaborate with classmates if you want. Just be sure that if you do, be sure to make note of that collaboration in your README file.**

### *Remember to submit this link following the instructions in Canvas.*
