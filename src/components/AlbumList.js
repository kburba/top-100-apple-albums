import React from "react";
import { connect } from "react-redux";
import selectedAlbums from "../selectors/albums";
import { List } from "@material-ui/core";
import PropTypes from "prop-types";
import AlbumItem from "./AlbumItem";

export const AlbumList = props => {
  return (
    <List dense>
      {props.albums.map((album, index) => (
        <AlbumItem
          key={index}
          index={index}
          album={album}
          totalLength={props.albums.length}
        />
      ))}
    </List>
  );
};

AlbumList.proptypes = {
  albums: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  albums: selectedAlbums(state.albums, state.filters)
});

export default connect(mapStateToProps)(AlbumList);
