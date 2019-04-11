import React, { Component } from "react";
import { connect } from "react-redux";
import { setFilter } from "../actions/filters";
import PriceFilters from "./PriceFilters";
import YearFilters from "./YearFilters";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

class Filters extends Component {
  constructor() {
    super();

    this.state = {
      filters: {
        price: [],
        year: []
      }
    };
  }

  handleSelect = (type, e) => {
    let filter = this.state.filters[type];
    if (e.target.checked) {
      // add new value
      filter.push(e.target.value);
    } else {
      // remove value
      filter.splice(filter.indexOf(e.target.value), 1);
    }
    this.props.setFilter(type, filter);
  };

  render() {
    return (
      <div>
        <Paper elevation={1} style={{ padding: "15px", marginBottom: "24px" }}>
          <Typography variant="h6">Price</Typography>
          <PriceFilters
            handleSelect={this.handleSelect}
            checked={this.state.filters.price}
          />
        </Paper>
        <Paper elevation={1} style={{ padding: "15px" }}>
          <Typography variant="h6">Year</Typography>
          <YearFilters
            handleSelect={this.handleSelect}
            checked={this.state.filters.year}
          />
        </Paper>
      </div>
    );
  }
}

Filters.propTypes = {
  setFilter: PropTypes.func.isRequired
};

export default connect(
  null,
  { setFilter }
)(Filters);
