import { IconButton } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { Close } from '@material-ui/icons';

const styles = {
    modalContainer: {
        height: "100vh", 
        overflowY: "auto", 
        paddingBottom: "100px"
    },
    closeBtn : {
        marginTop: "18px",
        marginRight: "18px",
        cursor: "pointer"
    }
}
 
function ModalLayout({openModal, onClose, children, bgColor = "#ffffff", showCloseBtn = true }) {
    return (
        <Modal
          disableBackdropClick={true}
          open={openModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
            <div className="container-fluid Container-div">
                <div className="row h-100">
                    <div className="col-md-10 offset-md-1 p-md-5"  style={{ ...styles.modalContainer, background: bgColor}}>
                      <IconButton onClick={onClose} style={{ ...styles.closeBtn, position: "absolute", top: "0px", right: "0px", zIndex: 10000 }}>
                        <Close/>
                      </IconButton>
                      {children}
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ModalLayout;