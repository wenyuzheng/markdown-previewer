import { useState } from "react";
import "./App.css";

import { marked } from "marked";

const defaultState = `# Welcome to my React Markdown Previewer!
## This is a h2.

Find more about my projects [here](https://wenyuz.com/).

In a markdown, you can make text:
- **bold**
- _italic_
- or **_both!_**

You can include code in a line like this: \`<div></div>\`, or in a code block as below:
\`\`\`;
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == "\`\`\`" && lastLine == "\`\`\`") {
    return multiLineCode;
  }
}
\`\`\`


You can also embed a backquote:
> Block Quotes!

and a image:
![Doggie](https://aspengrovevet.com/uploads/SiteAssets/0/images/services/doggie-day-care-720.jpg)`;

function App() {
  const [input, setInput] = useState(defaultState);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  marked.setOptions({ breaks: true });

  return (
    <div className="App">
      <div id="editor-area">
        <h2 id="editor-title">Editor</h2>
        <textarea id="editor" value={input} onChange={handleInputChange} />
      </div>
      <div id="markdown">
        <h2 id="preview-title">Previewer</h2>
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(input) }} />
      </div>
    </div>
  );
}

export default App;
