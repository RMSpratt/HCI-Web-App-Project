FINAL PROJECT - Gatsby Website Application

Name: Reed Spratt
ID: 0953832
Date: December 17th 2020


OVERVIEW

This is a project developed during my fourth-year of post-secondary studies. All development was done by myself, and as it stands, the applciation
is certainly functional, but incomplete in some facets. 

This project is a Gatsby JS application designed to simulate a utility application to aid stores as part of a larger retailer chain. 
It is only comprised of client-side functionality and doesn't have a back-end. 

Asides from gatsby, this project shouldn't require any additional libraries to run, but it does use a 'gh-pages' module to allow it 
to be hosted.

On that note, if you have too much difficulty running this code for any reason, I am hosting it through gh-pages. The repository is 
private, but the website is not: https://rmspratt.github.io/4300Project/ 

Note: This hosted version of the website does have some limitations, it seems that minifying the code through the 'gatsby build' command
may have introduced some weird styling issues. Notably, any disabled elements are invisible on this website (but they were non-functional regardless).


REQUIREMENTS TO RUN 

The package dependencies that will likely be required for this project include: gatsby, gatsby-cli, react, and react-dom.


RUNNING INSTRUCTIONS

The steps for running this code are outlined below:

1) npm i 
2) gatsby develop
3) View at localhost:8000 in the browser

Once the code is running and you've navigated to it in the browser, you will be presented with an option to sign-in. I have setup two default accounts
that you can use to view all of this application's functionality. The credentials are listed below:

Employee ID: 1
Password: admin
User Role: Management (You can view management-specific functionality)

Employee ID: 2
Password: cis*4300
User Role: Employee (You can view employee-specific functionality)

Any other employee ID does not have a set password. Entering anything in the password field will instead lead you to 'set up' an account by providing a 
custom password. The password provided must meet the strength criteria provided, but otherwise has no restrictions.

Note: If you decide to use your own employee ID in this way, the account will not be saved by the application. (If you sign out, the account will be gone).


LIMITATIONS

I couldn't finish everything I wanted to in the end, and some buttons will appear as disabled as a result. 
