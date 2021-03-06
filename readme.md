# Google Books API command line application

This is a command line application that accesses the [Google Books API](https://developers.google.com/books/docs/overview) to search for books and construct a reading list. 

### How to run this command line app
1. fork or clone the repository from [here](https://github.com/erinjohnson47/8thlight-assessment)
2. from the command line, cd into the directory you just forked/cloned into and in the root directory, `touch config.js` and add the following code to this file:
`module.exports = {
    GOOGLE_BOOKS_API_KEY: ''
}`, you should then insert your Google Books API key (obtained from google, or sent by me via email) as a string (within the empty single quotes)
3. once the config.js file has been added, run `npm install books` to install dependencies and `sudo npm link`; (after running `sudo npm link` you may be prompted for your system password to give permission to run this app)
4. to run the application from the command line, type `books` and follow the prompts


### User Stories:
1. A user should be able to type in a query (author, title, or pub) and receive back a list of **5 books matching that query**.

2. Each item in the list should include: 
    - author 
    - title
    - publishing company

3. A user should be able to select a book from the five displayed to save to a “Reading List”

4. View a “Reading List” with all the books the user has selected from their queries (local reading list and not tied to Google Books account features).

### Technologies and libraries:
CLI | Javacsript | Node.js | axios | minimist 

#### resasons for choosing these libraries:
**axios** - this is to make API calls to the google books API

**minimist** - parses the arguments entered into the terminal
