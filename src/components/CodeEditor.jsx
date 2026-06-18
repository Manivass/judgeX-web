import Editor from "@monaco-editor/react";

function CodeEditor() {
  return (
    <Editor
      height="90vh"
      defaultLanguage="java"
      defaultValue="// Start Coding Here"
      theme="vs-dark"
    />
  );
}

export default CodeEditor;
