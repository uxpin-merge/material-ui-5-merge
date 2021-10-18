import React from "react";
import Button from "../../Button/Button";
import Dialog from "../Dialog";
import DialogActions from "../../DialogActions/DialogActions"
import DialogContent from "../../DialogContent/DialogContent";
import DialogContentText from "../../DialogContentText/DialogContentText";
import DialogTitle from "../../DialogTitle/DialogTitle";


export default (
    <div uxpId="1">
      <Button variant="outlined" uxpId="2">
        Open alert dialog
      </Button>
      <Dialog
        uxpID="3" 
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" uxpId="4">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent uxpId="5">
          <DialogContentText id="alert-dialog-description" uxpId="6">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions uxpId="7">
          <Button uxpId="8">Disagree</Button>
          <Button autoFocus uxpId="9">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );