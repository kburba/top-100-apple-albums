import React from "react";
import {
  Typography,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Paper
} from "@material-ui/core";

export default function AlbumItem(props) {
  const { index, album, totalLength } = props;
  return (
    <Paper elevation={1} style={{ marginBottom: "15px" }}>
      <ListItem key={index} divider={index !== totalLength - 1}>
        <img alt={album["title"].label} src={album["im:image"][0].label} />
        <ListItemText>
          <Typography>
            {album["title"].label} {album["im:releaseDate"].attributes.label}
          </Typography>
        </ListItemText>
        <ListItemSecondaryAction>
          <Typography align="right">{album["im:price"].label}</Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </Paper>
  );
}
