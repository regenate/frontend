import { Alert } from "@mui/material";
import Slide, { SlideProps } from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import * as React from "react";

type TransitionProps = Omit<SlideProps, "direction">;

function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props: TransitionProps) {
  return <Slide {...props} direction="down" />;
}

export default function Notification({
  direction,
  notificationType,
  text,
  refresh,
}: {
  direction?: "left" | "right" | "top" | "bottom";
  notificationType?: "error" | "warning" | "info" | "success";
  text?: string;
  refresh: number;
}) {
  const [open, setOpen] = React.useState(false);

  const [severity, setSeverity] = React.useState<
    "error" | "warning" | "info" | "success"
  >(undefined);

  const [message, setMessage] = React.useState<string>(undefined);

  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleTransition = (
    Transition: React.ComponentType<TransitionProps>
  ) => {
    setTransition(() => Transition);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    const transitionDirection = () => {
      switch (direction) {
        case "left":
          return TransitionLeft;
        case "right":
          return TransitionRight;
        case "bottom":
          return TransitionDown;
        case "top":
          return TransitionUp;
        default:
          return TransitionRight;
      }
    };

    handleTransition(transitionDirection());
  }, [direction]);

  React.useEffect(() => {
    setSeverity(notificationType ? notificationType : "info");
  }, [notificationType]);

  React.useEffect(() => {
    setMessage(text ? text : "");
  }, [text]);

  React.useEffect(() => {
    if (refresh) {
      setOpen(true);
    }
  }, [refresh]);

  return (
    <div>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        autoHideDuration={12000}
        key={transition ? transition.name : ""}
      >
        <Alert severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
