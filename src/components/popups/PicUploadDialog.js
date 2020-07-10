
// libraries
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import AvatarEditor from 'react-avatar-edit'

// material-ui
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

// utils
import { envEndpoint } from '../../utils/firebase-service';
import { setUser } from '../../store/actions/index';

export default function PicUploadDialog(props){
    // local state
    const [ base64String, setBase64String ] = React.useState(null);

    // redux state and dispatch
    const auth = useSelector(state => state.firebase.auth);
    const dispatch = useDispatch();

    // reach out to backend
    const handleSaveImage = async () => {
        props.handleClosePicUploaderDialog()

        try{
            const response = await fetch(`${envEndpoint}user/uploadProfilePic`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    base64String,
                    uid: auth.uid,
                }),
            });
  
            // handle when request completed successfully
            if(response.ok && response.status === 200) { 
                // pull user data
                const result = await response.json();
                dispatch(setUser(result));
            }
            
        } catch(err){
            console.log(err);
        }
    }

    return (
        <Dialog onClose={props.handleClosePicUploaderDialog} aria-labelledby="simple-dialog-title" open={props.openPicUploaderDialog}>
            <br/>
            <DialogTitle id="simple-dialog-title">Upload New Picture</DialogTitle>
            <DialogContent>
                <AvatarEditor
                    width={390}
                    height={295}
                    onCrop={base64 => setBase64String(base64)}
                    onClose={() => setBase64String(null)}
                    />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClosePicUploaderDialog} color="secondary" variant="contained">
                    Cancel
                </Button>
                <Button onClick={handleSaveImage} disabled={base64String ? false : true } color="secondary" variant="contained">
                    Save
                </Button>
            </DialogActions>
            <br/>
        </Dialog>
    );
}