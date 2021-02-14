import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Posts from './Components/Posts';
import PaginationItem from './Components/PaginationItem';


function App() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(30)

    useEffect(()=> {
        const fetchPosts = async () => {
            setLoading(true)
            const response = await axios.get('https://www.ag-grid.com/example-assets/olympic-winners.json')
            setPosts(response.data)
            setLoading(false)
        }
        fetchPosts()
    },[])

    //console.log(posts)

    //Get current post
    const lastPage = currentPage * postsPerPage
    const firstPage = lastPage - postsPerPage
    const getCurrentPage = posts.slice(firstPage, lastPage)

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className="App">
            <h2>Olympic Winners</h2>

            <Posts posts={getCurrentPage} loading={loading} />
            <PaginationItem postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
    )
}

export default App
