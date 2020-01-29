import React from 'react';
import XamlEditor from './XamlEditor';
import ContextEditor from './ContextEditor';
import ViewPort from './ViewPort';

export default function EditorWindow(props) {
    return (
        <div id="editorSkeleton">
            <div className="editorBox" id="editorBoxLeft">
                <div className="splitter horizontalSplitter" id="topSplitter"></div>
                <XamlEditor
                    value={props.xaml} 
                    hash={props.hash} 
                    updateData={props.updateData}
                    runCode={props.runCode} 
                />
                <div className="horizontalSplitter" id="dataContextSplitter"></div>
                <ContextEditor
                    value={props.context} 
                    updateData={props.updateData} 
                    runCode={props.runCode} 
                />
            </div>
            <div className="splitter verticalSplitter" id="verticalSplitter"></div>
            <div className="editorBox" id="editorBoxRight">
                < ViewPort />
                <div className="errorLog" id="errorLog"></div>
            </div>
        </div>
    );
}
