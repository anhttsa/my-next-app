import React, { useState } from 'react';
import {
  FormControl,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

interface IDialogProps {
  showDialog: boolean;
  setShowDialog: (value: boolean) => void;
}

const AppDialog = ({ showDialog, setShowDialog }: IDialogProps) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')

  const handleClose = () => {
    setTitle('')
    setContent('')
    setAuthor('')
    setShowDialog(false)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log({ title, content, author });
  };

  return (
    <Dialog open={showDialog} onClose={handleClose}>
      <DialogTitle>Add New Blogs</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            id="name"
            label="Title"
            fullWidth
            variant="standard"
            margin="dense"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            autoFocus
            id="name"
            label="Content"
            fullWidth
            variant="standard"
            margin="dense"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <TextField
            autoFocus
            id="name"
            label="Author"
            fullWidth
            variant="standard"
            margin="dense"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            type="submit"
            onClick={handleSubmit}
          >Create</Button>
        </DialogActions>
      </form>
    </Dialog >
  );
}

export default AppDialog