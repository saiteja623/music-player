import React, { Component } from "react";
import {
  Slider,
  Button,
  Fab,
  Typography,
  Paper,
  Grid,
  Snackbar,
  Drawer,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  ClickAwayListener,
  Dialog,
  DialogContent,
  Slide,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import RepeatOneIcon from "@material-ui/icons/RepeatOne";
import Favorite from "@material-ui/icons/Favorite";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import "./css/home.css";
import Skeleton from "@material-ui/lab/Skeleton";

const obj = null;
class Home extends Component {
  state = {
    volume: 60,
    obj: null,
    play: false,
    songPosition: 0,
    img: null,
    infoObj: {
      album: "",
      genre: "",
      artist: "",
      year: null,
    },
    shuffle: false,
    repeatOne: false,
    snackBarOpen: false,
    slideOpen: false,
    list: [
      "inkaedo",
      "sanamre",
      "sorry",
      "galat",
      "preminche",
      "highrated",
      "yaanji",
      "bharat",
      "bomdiggy",
      "pachtaoge",
    ],
    activeSong: 0,
    loading: true,
    DialogOpen: false,
  };
  constructor(props) {
    super(props);
    this.audioref = new React.createRef();
    this.xref = new React.createRef();
  }
  componentDidMount = () => {
    this.setSongDetails(0);
  };

  //set the cover image and obj
  setSongDetails = (activeSong) => {
    var jsmediatags = require("jsmediatags");
    jsmediatags.read(
      `https://saiteja623.github.io/music-player${require(`./music/${this.state.list[activeSong]}.mp3`)}`,
      {
        onSuccess: (e) => {
          var image = e.tags.picture;
          var str = "";
          for (var i = 0; i < image.data.length; i++) {
            str += String.fromCharCode(image.data[i]);
          }
          var base64 = "data:" + image.format + ";base64," + window.btoa(str);
          this.setState({
            img: base64,
            infoObj: e.tags,
            play: true,
            loading: false,
          });
          this.audioref.current.play();
        },
      }
    );
  };

  //to handle the volume
  handleVolume = (e, newValue) => {
    this.audioref.current.volume = newValue / 100;
    this.setState({ volume: newValue });
  };

  //to handle the play/pause of the song
  playPause = () => {
    if (this.state.play) {
      this.audioref.current.pause();
    } else {
      this.audioref.current.play();
    }
    this.setState({ play: !this.state.play });
  };

  //call back when the music player slide has changed and to set the song time to the changed value
  handleSongPosition = (e, newValue) => {
    this.audioref.current.currentTime =
      this.audioref.current.duration * (newValue / 100);
    this.setState({ songPosition: newValue });
  };

  //change the music player  slide as song plays
  changeSlide = () => {
    setInterval(() => {
      var x =
        this.audioref.current.currentTime *
        (100 / this.audioref.current.duration);
      this.setState({ songPosition: x });
    }, 1000);
  };

  //action to be taken after song ended
  songEnded = () => {
    this.setState({ songPosition: 0 });
    this.audioref.current.currentTime = 0;
    this.setState({ play: false });
    if (this.state.repeatOne) {
      this.repeatSong();
    } else if (this.state.shuffle) {
      var random = Math.floor(Math.random() * this.state.list.length);
      this.setState({ activeSong: random, play: true });
      this.setSongDetails(random);
    } else {
      this.playNextSong();
    }
  };

  //repeat the song again
  repeatSong = () => {
    this.audioref.current.play();
    this.setState({ play: true });
  };
  //play next song
  playNextSong = () => {
    var activeSong = this.state.activeSong;
    if (this.state.activeSong === this.state.list.length - 1) {
      activeSong = 0;
    } else {
      activeSong = activeSong + 1;
    }
    this.setState({ activeSong, loading: true });
    this.setState({ songPosition: 0 });
    this.audioref.current.currentTime = 0;
    this.setSongDetails(activeSong);
  };

  //play the previous song
  playPrevSong = () => {
    var activeSong = this.state.activeSong;
    if (this.state.activeSong === 0) {
      activeSong = this.state.list.length - 1;
    } else {
      activeSong = activeSong - 1;
    }
    this.setState({ activeSong, loading: true });
    this.setState({ songPosition: 0 });
    this.audioref.current.currentTime = 0;
    this.setSongDetails(activeSong);
  };

  //handle the info  dialog
  handleDialog = () => {
    this.setState({ DialogOpen: !this.state.DialogOpen });
  };
  render() {
    return (
      <>
        <audio
          ref={this.audioref}
          src={require(`./music/${this.state.list[this.state.activeSong]}.mp3`)}
          type="audio/mp3"
          onEnded={this.songEnded}
          onPlaying={this.changeSlide}
        ></audio>

        <Paper
          className="music-player-paper"
          elevation={3}
          style={{ position: "relative" }}
        >
          <Typography
            variant="body1"
            align="center"
            style={{ fontWeight: "bold" }}
            className="album-title"
          >
            {this.state.infoObj.title}
          </Typography>
          <Typography variant="caption" align="left" className="album-artist">
            {this.state.infoObj.artist}
          </Typography>
          <div className="album-image">
            {this.state.loading ? (
              <Skeleton variant="circle" className="skeleton" />
            ) : (
              <img
                src={this.state.img}
                style={{ width: "100%", height: "100%" }}
              />
            )}
          </div>
          <div className="music-slider">
            <Slider
              onChange={this.handleSongPosition}
              value={this.state.songPosition}
              style={{ width: "100%" }}
              className="music-slider"
            />
          </div>
          <Grid container justify="center">
            <Grid item xs={2}>
              <Fab
                onClick={() => {
                  this.playPrevSong();
                }}
                style={{
                  color: "black",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
                size="small"
              >
                <SkipPreviousIcon size="small" />
              </Fab>
            </Grid>
            <Grid item xs={2}>
              <Fab
                onClick={() => {
                  this.playPause();
                }}
                style={{ color: "white", backgroundColor: "black" }}
                size="small"
              >
                {this.state.play ? (
                  <PauseIcon size="small" />
                ) : (
                  <PlayArrowIcon size="small" />
                )}
              </Fab>
            </Grid>
            <Grid item xs={2}>
              <Fab
                onClick={() => {
                  this.playNextSong();
                }}
                style={{
                  color: "black",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
                size="small"
              >
                <SkipNextIcon size="small" />
              </Fab>
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            alignItems="center"
            className="bottom-nav"
          >
            <Grid item xs>
              <Fab
                style={{
                  color: "black",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
                disableRipple
              >
                <Checkbox
                  icon={<RepeatIcon size="small" disableRipple />}
                  checkedIcon={<ShuffleIcon size="small" disableRipple />}
                  size="small"
                  checked={this.state.shuffle}
                  onChange={() => {
                    var x = this.state.shuffle;
                    if (x) {
                      this.setState({ snackBarMessage: "Repeat All" });
                    } else {
                      this.setState({ snackBarMessage: "Shuffle on" });
                    }
                    this.setState({ shuffle: !x, snackBarOpen: true });
                  }}
                />
              </Fab>
            </Grid>
            <Grid item xs>
              <Fab
                style={{
                  color: "black",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
                disableRipple
              >
                <Checkbox
                  icon={<FavoriteBorder size="small" disableRipple />}
                  checkedIcon={<Favorite size="small" dissbleRipple />}
                  size="small"
                />
              </Fab>
            </Grid>
            <Grid item xs>
              <ClickAwayListener
                onClickAway={() => {
                  this.setState({ slideOpen: false });
                }}
              >
                <Fab
                  style={{
                    color: "black",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                  disableRipple
                  onClick={() => {
                    this.setState({ slideOpen: !this.state.slideOpen });
                  }}
                >
                  {this.state.volume == 0 ? (
                    <VolumeOffIcon size="small" />
                  ) : (
                    <VolumeUpIcon size="small" />
                  )}
                </Fab>
              </ClickAwayListener>
            </Grid>
            <Grid item xs>
              <Fab
                style={{
                  color: "black",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
                disableRipple
              >
                <Checkbox
                  icon={<RepeatOneIcon size="small" />}
                  checkedIcon={
                    <RepeatOneIcon size="small" style={{ color: "red" }} />
                  }
                  size="small"
                  checked={this.state.repeatOne}
                  onChange={() => {
                    var x = this.state.repeatOne;
                    if (x) {
                      this.setState({
                        snackBarMessage: "Single repeat is off",
                      });
                    } else {
                      this.setState({ snackBarMessage: "Single repeat" });
                    }
                    this.setState({ repeatOne: !x, snackBarOpen: true });
                  }}
                />
              </Fab>
            </Grid>
          </Grid>
          <Snackbar
            open={this.state.snackBarOpen}
            message={this.state.snackBarMessage}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            autoHideDuration={1500}
            onClose={() => {
              this.setState({ snackBarOpen: false });
            }}
          />

          <Slide
            direction="up"
            in={this.state.slideOpen}
            style={{ position: "absolute", bottom: 0, left: 0 }}
            timeout={{
              enter: 600,
              exit: 1000,
            }}
          >
            <Paper
              className="volume-slider-paper"
              style={{ background: "whiteSmoke" }}
            >
              <div className="volume-slider">
                <div>
                  {this.state.volume == 0 ? (
                    <VolumeOffIcon size="small" />
                  ) : (
                    <VolumeDownIcon size="small" />
                  )}
                </div>
                <Slider
                  style={{ width: "60%" }}
                  onChange={this.handleVolume}
                  defaultValue={60}
                  onMouseUp={() => {
                    this.setState({ slideOpen: false });
                  }}
                />
                <div>
                  <VolumeUpIcon size="small" />
                </div>
              </div>
            </Paper>
          </Slide>
        </Paper>

        <Button onClick={this.handleDialog} color="primary">
          Info
        </Button>
        <Dialog open={this.state.DialogOpen} onClose={this.handleDialog}>
          <DialogContent style={{ padding: 0 }}>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography variant="body1">
                    Title : {this.state.infoObj.title}
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography variant="body1">
                    Album : {this.state.infoObj.album}
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography variant="body1">
                    Genre : {this.state.infoObj.genre}
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography variant="body1">
                    Artist : {this.state.infoObj.artist}
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography variant="body1">
                    Year released : {this.state.infoObj.year}
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}

export default Home;
