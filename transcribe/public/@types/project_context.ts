import { createContext } from "react";
import { Book } from "./book";
import { File, Folder, Project } from "./project";

const ProjectContext = createContext<{ 
    project: Project,
    projectCallback: Function,
    editor: File | Folder,
    editorCallback: Function
}>(null);

export default ProjectContext