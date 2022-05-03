import Modal from "@mui/material/Modal";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import styles from "./SocialLogin.module.scss";

const SocialLogin = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useImperativeHandle(ref, () => ({
    handleOpen() {
      return setOpen(true);
    },
  }));

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.socialLogin}>
          I don't know if this is the best way to get users credentials, but I
          intend to use this modal to collect users login credentials
        </div>
      </Modal>
    </div>
  );
});
export default SocialLogin;
