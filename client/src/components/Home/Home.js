import React,{useEffect,useState} from "react";
import { useDispatch } from "react-redux";
import { Grow, Grid } from '@material-ui/core'
import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from '../../styles'
const Home = () =>{
    const[currentId,setCurrentId] = useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getPosts())
    },[dispatch])

    return(
        <Grow in>
            <Grid container className={classes.mainContainer}  justifyContent="space-between" alignItems="stretch" spacing={3} >
                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
            </Grid>
        </Grow>
    )
}

export default Home;