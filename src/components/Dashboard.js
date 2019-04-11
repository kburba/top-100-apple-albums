import React, { Component } from "react";
import AlbumList from "./AlbumList";
import Filters from "./Filters";
import Grid from "@material-ui/core/Grid";
import { setAlbums } from "../actions/albums";
import axios from "axios";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
      .then(res => {
        this.props.setAlbums(res.data.feed.entry);
        this.setState({ loading: false });
      })
      .catch(err => {
        console.log("Error: ", err);
        this.setState({ loading: false });
      });
  }
  render() {
    const content = this.state.loading ? (
      <Spinner />
    ) : (
      <Grid
        container
        style={{ padding: "24px 0 24px 24px", backgroundColor: "#fafafa" }}
      >
        <Grid item xs={12} sm={3} style={{ padding: "0 24px 24px 0" }}>
          <Filters />
        </Grid>
        <Grid item xs={12} sm={9} style={{ paddingRight: "24px" }}>
          <AlbumList />
        </Grid>
      </Grid>
    );
    return content;
  }
}

Dashboard.propTypes = {
  setAlbums: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlbums }
)(Dashboard);
