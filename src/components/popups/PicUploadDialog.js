
// libraries
import React from "react";
import AvatarEditor from 'react-avatar-edit'

// material-ui
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

export default function PicUploadDialog(props){
    const [ image, setImage ] = React.useState(null)
    
    const handleSaveImage = () => {
        console.log(image)
    }

    return (
        <Dialog onClose={props.handleClosePicUploaderDialog} aria-labelledby="simple-dialog-title" open={props.openPicUploaderDialog}>
            <br/>
            <DialogTitle id="simple-dialog-title">Upload New Picture</DialogTitle>
            <DialogContent>
                <AvatarEditor
                    width={390}
                    height={295}
                    onCrop={image => setImage(image)}
                    onClose={() => setImage(null)}
                    />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClosePicUploaderDialog} color="secondary" variant="contained">
                    Cancel
                </Button>
                <Button onClick={handleSaveImage} color="secondary" variant="contained">
                    Save
                </Button>
            </DialogActions>
            <br/>
        </Dialog>
    );
}