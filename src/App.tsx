import Editor from "@monaco-editor/react";
import clsx from "clsx";
import React from "react";
import { Button } from "course-lib";

function App() {
  const [editorCollapsed, setEditorCollapsed] = React.useState(false);

  const editorContainerClasses = clsx(
    editorCollapsed ? "w-0" : "w-full",
    "h-dvh transition-width duration-300"
  );

  return (
    <div className="flex ">
      <div className={editorContainerClasses}>
        <Editor defaultLanguage="javascript" defaultValue="// code" />
      </div>
      <button
        className="px-2 self-stretch bg-slate-100"
        onClick={() => {
          setEditorCollapsed(!editorCollapsed);
        }}
      >
        {editorCollapsed ? ">>" : "<<"}
      </button>
      <Button>Hello</Button>
    </div>
  );
}

export default App;
