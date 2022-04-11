import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import video1 from "../data/videos/video-1.mp4"
import video2 from "../data/videos/video-2.mp4"
import video3 from "../data/videos/video-3.mp4"
import video4 from "../data/videos/video-4.mp4"
import video5 from "../data/videos/video-5.mp4";
import HoverVideoPlayer from "react-hover-video-player";
import PausedOverlay from "./PausedOverlay";
import "../styles/App.css"

const useStyles = makeStyles({
    root: {
        backgroundColor: "transparent",
        border: 0,
        borderRadius: 3,
        padding: '0 30px',
        minHeight: "800px",
        height: "100vh"
    },
    borderRadius: {
        borderRadius: "20px"
    },
    list: {
        width: '100%',
        paddingTop: "4px",
        paddingBottom: "3px",
    },
    lists: {
        fontFamily: "Nunito",
        padding: "5px 2px",
        backgroundColor: "#183ac7",
        borderRadius: "5px",
        boxShadow: "0px 0px 6px gray",
        '&:hover': {
            backgroundColor: "transparent",
        },
    }
});

const Component = (props) => {
    const classes = useStyles()
    const videos = [video1, video2, video3, video4, video5];
    return (
        <>
            <div className={` py-3 ${classes.root} `}>
                <h1 className='text-center text-dak'>{props.allData.title}</h1>
                <h3>this is subtitle</h3>
                <div className="row">
                    <div className="col-md-6" style={{ position: 'relative' }}>
                        <HoverVideoPlayer className="video"
                            onHoverStart={() => {
                               return true
                            }}
                            loop={true}
                            videoSrc={videos[props.allData.id - 1]}
                            pausedOverlay={<PausedOverlay />}
                        />
                        {console.log(window.screen.width)}
                    </div>
                    <div className="col-md-6">
                        {
                            props.allData.items.map((item, index) => {
                                return (
                                    <List component="nav" aria-label="main mailbox folders" key={index} className={`${classes.list} `}>
                                        <ListItem button className={`${classes.lists}`} >
                                            <ListItemText primary={item} className="text-center text-white font" />
                                        </ListItem>
                                    </List>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Component