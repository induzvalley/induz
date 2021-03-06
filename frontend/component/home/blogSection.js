import { Grid , Typography, Button, useMediaQuery } from "@material-ui/core"

import { makeStyles } from "@material-ui/core"

import theme from "../../styles/theme"

import BlogCard from "../home/blogCard"

import Link from "next/link"

const useStyles = makeStyles({
    mainContainer : {
        backgroundColor : theme.palette.primary.main,
        height : "auto"
    },
    headingContainer: {
        paddingTop : "3rem"
    },
    headingText : {
        color : "#fff",
        fontSize : "2.5rem"
    },
    descriptionText : {
        color : "#fff",
        fontSize : "1.5rem"
    },

    readMorebtnText : {
        color: "#fff",
        textTransform: "none",
        fontSize : "1.3rem",
        textDecoration: "underline"
    },
    readmoreBtnContainer : {
        marginTop : "4rem",
        marginBottom: "2rem"
    }
})


const BlogSection = ({ blogData }) => {

    const classes = useStyles()

    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    if(!blogData) return null;

    return (
        <Grid container classes={{root: classes.mainContainer}}>
            <Grid item container direction="column" alignItems="center" classes={{root: classes.headingContainer}}>
                <Grid item>
                    <Typography align={matchesSM ? "center" : undefined} classes={{root: classes.headingText}}>
                       Digital Marketing Blog
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography align={matchesSM ? "center" : undefined} classes={{root: classes.descriptionText}}>
                        My tips & tools for Digital Marketing
                    </Typography>
                </Grid>
            </Grid>
                <Grid item container justifyContent="center">
                {blogData.map((blog, i) => (
                    <BlogCard isRelatedPost={false} key={i} blog={blog}/>
                ))}
                </Grid>
            <Grid item container justifyContent="center" classes={{root:classes.readmoreBtnContainer}}>
                <Grid item>
                    <Link href="/blog">
                    <Button>
                        <Typography classes={{root: classes.readMorebtnText}}>
                            Read More {">"}
                        </Typography>
                    </Button>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BlogSection

