# Development

### Link to Deployed Website
If you used the stencil code, this is `https://nervousturtle333.github.io/development`

### Goal and Value of the Application
This application contains different books that are across different genres and languages. The user should be able to 
create a reading list by adding books to the readings list. There is an aggregator that sums up the total price of books
in the reading list. A user can sort the books viewed either by their goodreads rating or their price point. 
Additionally, the user can filter viewed books by genre and language they are in. 

### Usability Principles Considered
I decided to split the screen into two parts so that the user can see their reading list and then on the top right be 
able to apply filters and sort. Additionally, I relied on consistency through using component to make sure all books 
are displayed in a similar structure. The selection of books also ranges across different languages adn genres 
which is a ore accurate representation of books and texts everywhere. Additionally, the checkbox updates and only books
whose criteria match something applied will be presented, which accomplished efficiency, accuracy, and memorability 
since all filters work the same way. 

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
        criteria: This is the criteria that the checkbox works for, could be within a genre or a language
        filterFunction: The filter function appropriately adds or removes a filter
        filterList: The program displays books by checking which filters are applied. If a fitler is applied, it is added to a list of applied filters.

### How Data is Passed Down Through Components
#### Populating books
    Data for books is fed from a books-data.json file. The books are then mapped into Book componenets from the json file. 
#### Adding and removing to the reading list
    The program stores a map of the books added to the reading list, and this list is updated through the buttons within each Book item being pressed. These editing function are passed down to the Book componenets and once clicked, they edit the reading list defined in App.
#### Sorting 
    In order to sort, I use checkboxes that are supplemented by a defined state of how the books are displayed. I pass the function that alters the state into the checkbox for each respective sorting box.
### Filtering 
    I created Checkbox componenets for the 6 possible filters used. I create two lists of applied filters, one for genres and one for languages. I then pass those lists and a function that alters these lists according to the filter this item is supposed to apply. 

### How the User Triggers State Changes
#### Adding a book to the reading list
    Pressing the button to add a book to the reading list alters the readingList state by adding an item. It also triggers the aggregator to increment the total price by the price of the book. It also changes the button to a Remove from reading list button. 
#### Removing a book to the reading list
    Pressing the button to remove a book from the reading list alters the readingList state by removing an item. It also triggers the aggregator to decrement the total price by the price of the book. It also changes the button to a Add to reading list button. 
#### Sorting
    I store a state of what sorter is at use. The default sorting is by book rating. Checking a differnt sorting checkbox changes that stored sorting state and alters the view accordingly.
#### Filtering
    I store two states of what filters are applied: lanauge and genre. Once a checkbox is eitehr checked or unchekced, the filter it is describing will either be removed or added to that filtering list. The program displays the items that represent the fitlers applied. 

