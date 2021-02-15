import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import '../Style/Pagination.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }))

const PaginationItem = (props) => {

    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++ ){
        pageNumbers.push(i)
    }

    const classes = useStyles()

    function changePage(event) {
        const pageNumber = Number(event.target.textContent)
        props.changePage(pageNumber)
    }

    return (
        <>
            <div className={classes.root}>
                <Pagination 
                count={Math.ceil(props.totalPosts / props.postsPerPage)} 
                onChange={changePage} 
                hidePrevButton 
                hideNextButton />
            </div>
        </>
    )
}
export default PaginationItem