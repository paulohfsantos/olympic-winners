import React from 'react'
import '../Style/Posts.css'

const Posts = ({ posts, loading }) => {
    if(loading){
        return <h2>Loading...</h2>
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Age</th>
                        <th>Athlete</th>
                        <th>Bronze</th>
                        <th>Country</th>
                        <th>Date</th>
                        <th>Gold</th>
                        <th>Silver</th>
                        <th>Sport</th>
                        <th>Total</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr>
                            <td>{post.age}</td>
                            <td>{post.athlete}</td>
                            <td>{post.bronze}</td>
                            <td>{post.country}</td>
                            <td>{post.date}</td>
                            <td>{post.gold}</td>
                            <td>{post.silver}</td>
                            <td>{post.sport}</td>
                            <td>{post.total}</td>
                            <td>{post.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Posts