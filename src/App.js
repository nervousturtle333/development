import { useState } from "react";
import booksData from "./assets/books-data.json";
import Book from "./components/Book";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Checkbox from "./components/Checkbox";

import React, { Component }  from 'react';
import Button from "react-bootstrap/Button";
/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
booksData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */




function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const[readingList, updateStateReadingList] = useState(new Map())
  const[update, setUpdate] = useState(false);
  const[languageFilter, setLanguageFilter] = useState(["Arabic", "English", "French"]);
  const[genreFilter, setGenreFilter] = useState(["fiction", "non-fiction", "poetry"]);
  const[sorting, setSorting] = useState("rating");
  const[type, setType] = useState("All");

  const addToReadingList = (book) => {
    if (!readingList.has(book.name)) {
      readingList.set(book.name, book);
    }
    updateStateReadingList(readingList)
    setUpdate(!update);
  }

  const removeFromReadingList = (book) => {
    if (readingList.has(book.name)) {
      readingList.delete(book.name);
    }
    updateStateReadingList(readingList)
    setUpdate(!update);
  }

  const totalPrice = () => {
    let tot = 0
    readingList.forEach((val) => {
      tot += val.price
    })
    return tot
  }


  // Gets reading list items
  const getReadingListItems = () => {
    const items = [];
    readingList.forEach((val, key) => {
      items.push(<div>{val.name}</div>)
    })
    return items;
  }

  // helper to filter on genre
  const checkGenre = (item, genre) => {
    return item.genre === genre;
  }

  // Helper to filter on language
  const checkLanguage = (item, language) => {
    // all items should be shown when no filter is selected
    return item.language === language;
  }


  // This function displays all the items according to the implemented filters and sorted features
  const getDataItems = () => {
    const newList = [];

    // takes into account the added filters
    booksData.forEach((book) => {
      let added = false;
      genreFilter.forEach((genre) => {
        languageFilter.forEach((language) => {
          if (!genreFilter && checkLanguage(book, language) && !added) {
            newList.push(book);
            added = true;
          }

          if (!languageFilter && checkGenre(book, genre) && !added) {
            newList.push(book);
            added = true;
          }

          if (checkGenre(book, genre) && checkLanguage(book, language) && !added) {
            newList.push(book);
            added = true;
          }

          if (!languageFilter && !genreFilter && !added) {
            newList.push(book);
            added = true;
          }
        })
      })
    })


    // take into account the rating in sorting
    if (sorting === "rating") {
      newList.sort((bookA, bookB) => {
        return bookB.rating - bookA.rating;
      })
    }

    // take into accounting the price in sorting

    if (sorting === "price") {
      newList.sort((bookA, bookB) => {
        return bookA.price - bookB.price;
      })
    }
    return newList.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <Col>
          <Book index = {index} item = {item} readingList={readingList} removeFromReadingList={removeFromReadingList} addToReadingList={addToReadingList}/>
        </Col>
      ))
    }

  // This function adds or removes a genre filter
    const onChangeGenreList = (genre) => {
      if (genreFilter.includes(genre)) {
        // remove
        genreFilter.splice(genreFilter.indexOf(genre), 1);
        setGenreFilter(genreFilter);
        setUpdate(!update);
      } else {
        genreFilter.push(genre);
        setGenreFilter(genreFilter);
        setUpdate(!update);
      }
    }

    // This function adds or removes a language filter
  const onChangeLanguageList = (lang) => {
    if (languageFilter.includes(lang)) {
      // remove
      languageFilter.splice(languageFilter.indexOf(lang), 1);
      setLanguageFilter(languageFilter);
      setUpdate(!update);
    } else {
      languageFilter.push(lang);
      setLanguageFilter(languageFilter);
      setUpdate(!update);
    }
  }


    return (
      <div className="App">
        <h1>Welcome to UIUX's Library </h1>
        <div style={{display: "flex", flexDirection: "row"}}>
          <div style={{width: "70%"}}>
            <Row xs={1} md={2} className="g-4">
              {getDataItems()}
            </Row>
          </div>

          <div style={{width: "30%"}}>
            <h2>Reading List</h2>
            {
              getReadingListItems()
            }
            <div> Total Price of Reading List: {totalPrice().toFixed(2)} </div>
            <div>
              {/* This part here is for sorting features */}
              <label htmlFor="rating">Sort By Rating</label>
              <input type="checkbox" id="rating" name="rating" onChange={() => setSorting("rating")} checked={sorting === "rating"}/>
              <label htmlFor="rating">Sort By Price</label>
              <input type="checkbox" id="price" name="price" onChange={() => setSorting("price")} checked={sorting === "price"}/>
            </div>
            <div>
              {/* This part here is for filtering features by genre */}
              <div> Filter by Genre: </div>
              <Checkbox criteria={"fiction"} filterFunction={onChangeGenreList} filterList={genreFilter} />
              <Checkbox criteria={"non-fiction"} filterFunction={onChangeGenreList} filterList={genreFilter} />
              <Checkbox criteria={"poetry"} filterFunction={onChangeGenreList} filterList={genreFilter} />
            </div>
            <div>
              {/* This part here is for filtering features by language */}
              <div>  Filter by Language: </div>
              <Checkbox criteria={"Arabic"} filterFunction={onChangeLanguageList} filterList={languageFilter} />
              <Checkbox criteria={"English"} filterFunction={onChangeLanguageList} filterList={languageFilter} />
              <Checkbox criteria={"French"} filterFunction={onChangeLanguageList} filterList={languageFilter} />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;