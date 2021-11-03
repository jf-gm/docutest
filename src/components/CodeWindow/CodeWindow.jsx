import React, { useState, useEffect } from 'react';
import './style.css';

const CodeWindow = ({
  commandOptions,
  codeTextFiles,
  treeList,
  filenames,
  description
}) => {

  const [commandCounter, setCommandCounter] = useState(0);
  const [codeCounter, setCodeCounter] = useState(0);
  const [hideCode, setHideCode] = useState(false);

  const [started, setStarted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if(commandCounter < (commandOptions.length - 1)) {
        setHideCode(true);
        setCommandCounter(commandCounter + 1);
      } else {
        setHideCode(true);
        setCommandCounter(0);
      }
    }, 4000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  useEffect(() => {
    if(started) {
      setTimeout(()=>{
        setHideCode(false);
        if(codeCounter < (codeTextFiles.length - 1)) {
          setCodeCounter(codeCounter + 1);
        } else {
          setCodeCounter(0);
        }
      },1000)
    } else {
      setStarted(true);
    }
  }, [hideCode])

  return (
    <div className="component-code-window">
      <div className="visual-content">
        <div className="terminal-bar">
          {'>'} 
          <div
            className="command-options"
            style={{
              transform: `translateY(${commandCounter * 100}%)`
            }}
          >
            {commandOptions.map((option, idx) => (
              <span
                className="command-option"
                style={{
                  transform: `translateY(${(idx * 100 * -1)}%)`
                }}>
                {option}
              </span>
            ))}
          </div>
        </div>
        <div className="code-window">
          <div className="top-bar">
            <div className="options">
              <div className="b1"></div>
              <div className="b2"></div>
              <div className="b3"></div>
            </div>
            <div className="file-name">
              {filenames[codeCounter]}
            </div>
          </div>
          <pre className={hideCode ? 'hide' : ''}>
            <div className="hide-bar-side"></div>
            <div className="hide-bar-bottom"></div>
            <code>
            {codeTextFiles[codeCounter]}
            </code>
          </pre>
        </div>
        <div className={`project-tree ${hideCode ? 'hide' : ''}`}>
          {treeList[codeCounter].map((dir) => (
            <div className={`level level-${dir.level}`}>
              <div className={`${dir.type} ${dir.color}`}></div>
              <div className="name">{dir.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="description">
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default CodeWindow;