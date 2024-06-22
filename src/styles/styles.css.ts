import { style } from "@vanilla-extract/css";

export const rootLayoutSection = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

export const rootLayoutChildrenSection = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  padding: "0 300px",
});

export const navigationBarSection = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "2rem 4rem",
  backdropFilter: "blur(20px)",
});

export const homeSection = style({
  display: "flex",
  flexDirection: "row",
  flex: "1 1 0",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "2rem 4rem",
});

export const downloadButton = style({
  fontWeight: "bold",
  padding: "0.75rem 1.5rem",
  textAlign: "center",
  borderRadius: "24px",
  width: "fit-content",
});

export const changelogsSection = style({
  display: "flex",
  flexDirection: "column",
  borderRadius: "24px",
  padding: "1.25rem",
  minHeight: "2.5rem",
});

export const footerSection = style({
  textAlign: "center",
  padding: "1rem 0",
});
