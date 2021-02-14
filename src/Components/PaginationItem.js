import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }))

const PaginationItem = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++ ){
        pageNumbers.push(i)
    }

    const classes = useStyles()

    return (
        <>
            <div className={classes.root}>
                <Pagination onClick={()=> paginate()} count={totalPosts} />
            </div>
        </>
    )
}
export default PaginationItem