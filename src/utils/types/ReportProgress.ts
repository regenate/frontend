export type ReportProgressType = "done" | "inProgress" | "failed" | "none";

export type SetReportProgressType = React.Dispatch<
  React.SetStateAction<ReportProgressType>
>;
