import React from "react";
import clsx from "clsx";

function Button(props: React.PropsWithChildren<{id?: string}>) {
  const classes = clsx(
    "px-4 py-2 rounded",
    "bg-slate-500 hover:bg-slate-600 active:bg-slate-700",
  );

  return <button className={classes} {...props} />;
}

export default Button;
