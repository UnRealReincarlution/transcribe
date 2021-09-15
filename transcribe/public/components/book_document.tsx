import { File } from "@public/@types/project";
import ProjectContext from "@public/@types/project_context";

import { useContext, useEffect } from "react";
import { useRef, useState } from "react";

import styles from '../../styles/Home.module.css'
import Editor from "./editor";

const BookDocument: React.FC<{ content: File }> = ({ content }) => {
    const { editor, editorCallback } = useContext(ProjectContext);
    const [ editingTitle, setEditingTitle ] = useState(false);
    const [ bookTitle, setBookTitle ] = useState(content?.name);

    const input_field = useRef(null);

    useEffect(() => {
        setBookTitle(content?.name);

        input_field.current.value = content?.name;
    }, [content?.name])

    return (
        <div className={styles.page} key={editor.id}> 
            <input 
                type="text"
                ref={input_field}
                defaultValue={bookTitle}
                onChange={(e) => {
                    content.name = input_field.current?.value;
                }}
                onKeyPress={(e) => {
                    if(e.key == "Enter") {
                        setEditingTitle(!editingTitle);
                    }
                }}
            />

            <Editor 
            //@ts-expect-error
            content={editor} 
            />
        </div>
    )
}

export default BookDocument;