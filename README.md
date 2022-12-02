# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
This application contains different books that are accorss differente genres and languages. The user should be able to
create a reading list by adding books to the readings list. There is an aggregator that sums up the total price of
books in the reading list. A user can sort the books viewed either by their goodreads rating or their price point. 
Additionaly, the user can filter viewed books by genre and language they are in. 

### Usability Principles Considered


### Organization of Components

#### The Json Data Structure:
    "name": Name of Book
    "genre": Genre of Book, either fiction, non-fiction, or poetry
    "author": Name of author
    "description": Description of Book, retrieved from Amazon description
    "price": Price of Book, retrieved from Amazon
    "image": Image source
    "language": Language a book is in, either Arabic, English, or French 
    "rating": Ratinf og a boo ,retrieved from Goodreads

#### Component One:
##### Book:
    A book component is the representation of each book in the library. I use the bootstrap card library to represent each book. It takes in 4 inputs:
        item: Which is the book item that is outlined in the JSON data file
        readingList: Is the cart of all books added to reading list
        addToCart: This function is initiated when a user pressed "add book to reading list" and it adds said book to
        reading list
        removeFromCart: similar to addToCart

##### Checkbox: 
    A checkbox component is used to create the filtering checkboxes. It takes in these props:
        

### How Data is Passed Down Through Components

### How the User Triggers State Changes

