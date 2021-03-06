import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SearchShelf from '../components/AppSearchShelf';

// Creating and exporting search route component class
class RouteSearch extends Component{

    render(){
        return(
            <div className="search-books">
                      <div className="search-books-bar">
                        {/* Use router 'LINK' to go to homepage instead of button */}
                        <Link className="close-search" to='/' >Close</Link>
                        <div className="search-books-input-wrapper">
                          {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
          
                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                          */}
                          {/* Calling props 'queryFunc' on changing text to start update the shelf results */}
                          <input type="text" placeholder="Search by title or author" onChange={this.props.queryFunc}/>
                        </div>
                      </div>
                      <div className="search-books-results">
                        {/* Pass props to 'serchShelf' component */}
                        <ol className="books-grid"><SearchShelf  searchBooks={this.props.searchBooks} 
                                                                  func={this.props.func}/></ol>
                      </div>
                    </div>
        )
    }
}
export default RouteSearch;