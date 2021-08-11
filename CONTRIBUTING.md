# Introduction

### Welcome! 👋

We're glad to have you here. Thanks for considering contributing to this project.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

### Contributions we're looking for

`str-gen` is an open source project and we love to receive contributions from our community — you! There are many ways to contribute, from writing tutorials or blog posts, improving the documentation, submitting bug reports and feature requests or writing code which can be incorporated into `str-gen` itself.

### Contributions we are **NOT** looking for

Please, don't use the issue tracker for support questions. If your problem is not strictly specific to this library, consider using [Stack Overflow](https://stackoverflow.com/).

# Ground Rules

Please check out our [Community Code of Conduct](./CODE_OF_CONDUCT.md).

# Your First Contribution

Unsure where to begin contributing? You can start by looking through these beginner and help-wanted issues:

* Beginner issues - issues which should only require a few lines of code, and a test or two.
* Help wanted issues - issues which should be a bit more involved than beginner issues.
* Both issue lists are sorted by total number of comments. While not perfect, number of comments is a reasonable proxy for impact a given change will have.

Working on your first Pull Request? You can learn how from this *free* series, [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first :smile_cat:

# Getting started

### Give them a quick walkthrough of how to submit a contribution.

For something that is bigger than a one or two line fix:

1. Create your own fork of the code
1. [Clone your fork to your machine](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository)
1. Install the dependencies using `yarn` or `npm install`, and run the tests to ensure it's working on your machine before making changes using `yarn test` or `npm test`
1. Make the changes in your fork
1. If you like the change and think the project could use it:
    * Be sure you have followed the [code style for the project](#style-guide)
    * Open an issue tracking this change
    * Send a pull request

Small contributions such as fixing spelling errors, where the content is small enough to not be considered intellectual property, can be submitted by a contributor as a patch.

As a rule of thumb, changes are obvious fixes if they do not introduce any new functionality or creative thinking. As long as the change does not affect functionality, some likely examples include the following:

* Spelling / grammar fixes
* Typo correction, white space and formatting changes
* Comment clean up
* Bug fixes that change default return values or error codes stored in constants
* Adding logging messages or debugging output
* Changes to ‘metadata’ files like `package.json`, .gitignore, build scripts, etc.
* Moving source files from one directory or package to another

# How to report a bug

If you find a security vulnerability, do NOT open an issue. Email `[username-of-the-owner-of-this-repository]+security@protonmail.com` instead.

In order to determine whether you are dealing with a security issue, ask yourself these two questions:
* Can I access something that's not mine, or something I shouldn't have access to?
* Can I disable something for other people?

If the answer to either of those two questions are "yes", then you're probably dealing with a security issue. Note that even if you answer "no" to both questions, you may still be dealing with a security issue, so if you're unsure, just email us at the aforementioned address.

When filing an issue, make sure to answer these five questions:

1. What version of Node.js are you using?
2. What operating system and processor architecture are you using?
3. What did you do?
4. What did you expect to see?
5. What did you see instead?

# How to suggest a feature or enhancement

This project's philosophy is to provide a single function to generate a random string from a variety of characters. We do not force a specific character set, only in that whatever array you pass it contains at least a single non-empty string. Suggestions are welcome, but may not be incorporated -- you're welcome to fork this and make your own changes for your specific use case.

# Code review process
### Explain how a contribution gets accepted after it’s been submitted.

A single person looks at Pull Requests on a regular basis. There's no guarantee of a follow-up, but they'll do their best to give feedback. After two weeks, they may close the pull request if it isn't showing any activity.

# Style guide

- Code: [Standard](https://standardjs.com/)
- Commit message conventions: [Conventional Commits](https://www.conventionalcommits.org/)
