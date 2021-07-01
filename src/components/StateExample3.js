import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";

export default class StateExample3 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      comments: [],
    };
    this.myRef = React.createRef();
  }

  handleClick = () => {
    let currentCount = this.state.count;
    currentCount++;
    this.setState({
      count: currentCount,
    });
  };

  addComment = () => {
    let comment = this.myRef.current.value;
    let comments = this.state.comments.slice();
    comments.push(comment);
    this.setState({
      comments: comments,
    });
    this.myRef.current.value = "";
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="h1">State</Typography>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClick}
          >
            This button change state
          </Button>
        </div>
        <div>
          <Typography variant="h6">
            {this.state.count % 2 === 0 ? "even" : "odd"}
          </Typography>
        </div>
        <div>
          <Typography variant="h6">{this.state.count}</Typography>
        </div>
        <div>
          <TextareaAutosize
            placeholder="Empty"
            rowsMin={6}
            cols={80}
            ref={this.myRef}
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.addComment}
          >
            Add comment
          </Button>
        </div>
        <div>
          <List dense={true}>
            {this.state.comments.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <Add />
                </ListItemIcon>
                <ListItemText>{item}</ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      </React.Fragment>
    );
  }
}
