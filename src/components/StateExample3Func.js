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
import React, { useState } from "react";

export default function StateExample3Func() {
  const [count, setCount] = useState(0);
  const [comments, setComments] = useState([]);

  let myRef = React.createRef();

  let handleClick = () => {
    let currentCount = count;
    currentCount++;
    setCount(currentCount);
  };

  let addComment = () => {
    let comment = myRef.current.value;
    let newComments = comments.slice();
    newComments.push(comment);
    setComments(newComments);
    myRef.current.value = "";
  };

  return (
    <React.Fragment>
      <Typography variant="h1">State</Typography>
      <div>
        <Button variant="contained" color="primary" onClick={handleClick}>
          This button change state
        </Button>
      </div>
      <div>
        <Typography variant="h6">{count % 2 === 0 ? "even" : "odd"}</Typography>
      </div>
      <div>
        <Typography variant="h6">{count}</Typography>
      </div>
      <div>
        <TextareaAutosize
          placeholder="Empty"
          rowsMin={6}
          cols={80}
          ref={myRef}
        />
      </div>
      <div>
        <Button variant="contained" color="secondary" onClick={addComment}>
          Add comment
        </Button>
      </div>
      <div>
        <List dense={true}>
          {comments.map((item, index) => (
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
