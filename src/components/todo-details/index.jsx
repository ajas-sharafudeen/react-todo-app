import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

export default function TodoDetails({
  setTodoDetails,
  setOpenDialog,
  todoDetails,
  openDialog,
}) {
  return (
    <>
      <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
        <DialogTitle>{todoDetails?.todo}</DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenDialog(false);
              setTodoDetails(null);
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
