# Assignment Overview: Lab for Class 14

Lab today will be a practice run in working with your project team. You're going to create a single project (in a new GitHub repo, of course, and call it `june_30_lab`, with all team members set up as Collaborators) with two HTML docs and supporting CSS and JS docs as needed.

Pro tip: Keep notes on your progress throughout the lab and record any "a ha" moments.

***It is not expected that you will complete this project in any meaningful way. The point of this exercise is to get your feet wet in the group work process and to try some things for the first time without the pressure of working on your final project.***

***Ideally, you'll get as much done as you can between about 1:00 and 3:00, take about an hour to do the merge conflict exercise described at the bottom of this document, and then take some time as a team to review and discuss how it all went.***

***Also, consider how far you made it relative to what you thought you would. Then turn in the project and go home and start collecting your thoughts on the final project.***

***Do not work on this all night to try to make it perfect. Just don't. You're not going to be graded on how well today's pages came out. Seriously, do not work on this outside of the group exercise today. You're going to be evaluated on how the group work went rather than the code itself.***

***There are instructions in an exercise below that you should follow to create merge conflicts. You need practice in seeing those and resolving those.***

***Focus more on process than product, but still build the best thing you can. The more Git you do, the better. A-C often, and P occasionally. Don't forget PRs when wanting to merge to master.***

***The other big goal of this assignment is to give something clear to build out as a team, and to see how far you make it in the time you spend on it. Calibrating your sense of "It takes this long to do X" is an important part of planning and completing a project***

## Today's buildout

1. One of the HTML docs is a design comp based on the PREVIEW.tiff image in the adjoining assets directory.

2. The other HTML doc will be a metric/standard conversion calculator. How you design it and implement it is up to you. Here are the technical requirements:
	- Capable of doing the following conversions:
  		- inches to/from centimeters
  		- fluid ounces to/from milliliters
  		- miles to/from kilometers
  		- pounds to/from kilograms
  		- English shit-ton to metric shit-ton
		- Receives user input via a single \<input> element, has a \<select> element to determine the conversion, and has a \<button> for users to click to perform the conversion
		- The result is displayed in the browser window in this format: "1 inch equals 2.540 centimeters"
		- Round decimals to the thousandths place as in example
		- Maintain a list of all conversions performed on the window, and give user an option to clear the list
		- Other than that, make that conversion page whatever you want.

3. Each page should have a clear link to the other HTML document

There are no requirements about how each team member contributes, or what your workflow is, such as there is on the final project, but each team member should keep a log of the parts that they work on, and in what role/capacity, for submission in Canvas at the end of the day.

## Merge Conflict Exercise

Merge conflicts occur when files get out of sync between GitHub and a user's local codebase, and Git becomes unsure of where HEAD really is.

Let's describe how a pretend team would get into that situation and then extricate themselves from it.

Our sample team has four members: Bob, Carol, Ted, and Alice. Add a file called `APP_JS.md` to the `master` branch of the repo you've been working on in lab. When we start, everyone is totally in sync and freshly pulled from `master` on their individual laptops, and has `APP_JS.md`. Bob and Carol are pair-programming one feature on Carol's laptop in a new feature branch, and Ted and Alice are working on another feature in a different non-master feature branch on Ted's laptop, also in `APP_JS.md`.

Assign a member of your team to each character, and then do what they do. And do ONLY what they do.

For the purposes of this exercise, the work you're doing on a feature consists of adding a sentence or two of "This is what Bob & Carol did on Bob's computer when working on the first feature" and maybe a joke or something to keep your teammates amused.

Bob and Carol get their feature finished and do a A-C-P of their branch from Carol's laptop and make a PR. Ted & Alice review the feature, deem that it is good and subsequently merge it. Ted & Alice then do a `git pull origin master` into their feature branch on Ted's laptop ONLY and continue working on that feature.

In the meantime, Bob & Carol have switched to Bob's laptop, started a new feature branch in `APP_JS.md`, and started working on it. They did not do a `git pull origin master` and will live to regret it. They finish that feature at the same time that Ted & Alice finish their feature. Each team does an A-C-P and makes a PR. They review each other's PRs and attempt to merge them.

Chaos ensues. Try to get it sorted out, referring to the instructions on the Git workflow document in the class repo. Get everyone's individual laptop back in sync by doing a `git pull origin master` into `master` until Git stops complaining.

Then they switch partners, of course. Bob & Alice start a quick new feature on her laptop in the `master` branch and Ted & Carol start another new feature of their own, also in `master`. They finish these quick features, and attempt to A-C-P and create/merge PRs.

**MERGE CONFLICTS** erupt like a horde of screaming sugar-filled children in a Chuck-E-Cheese.

It's time to get them sorted out.

---

How could these problems have been prevented?

Review the workflow on Bob & Carol & Ted & Alice and try to identify all of the individual things that they did wrong **AND** all of the things that they should have done but failed to do.
