import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Project } from '../types';

const PROJECTS_PATH = join('src', 'projects.json');

export const getProjects = async () => {
    const source = await readFile(PROJECTS_PATH, 'utf-8');
    const projects = JSON.parse(source);
    const projectsWithId = projects.map((project: Project) => ({
        ...project,
        id: crypto.randomUUID(),
    }));
    return projectsWithId;
};
