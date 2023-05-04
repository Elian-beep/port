import { DivContentS, H2SD, H3SD, PSD } from 'styles/index.style';
import categories from 'data/categories.json';
import inProject from 'services/inProjects';
import { IProject } from 'interfaces/iProject';
import { useEffect, useState } from 'react';
import { ICategory } from 'interfaces/iCategory';

export default function Projects() {
    const [filters, setFilters] = useState<string[]>([]);
    const [listProjects, setListProjects] = useState<IProject[]>(inProject);

    useEffect(() => {
        if (filters.length === 0) return setListProjects(inProject);
        const filteredProjects = inProject.filter(project => project.category.some(category => filters.includes(category)));
        setListProjects(filteredProjects);
    }, [filters]);

    function selectFilter(filterClicked: string) {
        return !filters.includes(filterClicked) ? setFilters([...filters, filterClicked]) :  setFilters(filters.filter(category => category !== filterClicked));
    }

    return (
        <DivContentS>
            <H2SD>Projects</H2SD>
            <div>
                {categories.map((category: ICategory) => (
                    <div key={category._id}>
                        <button onClick={() => selectFilter(category.title)} >{category.title}</button>
                    </div>
                ))}
            </div>
            <div>
                {
                    listProjects.map(project => (
                        <div key={project.name}>
                            <H2SD>
                                {project.name} -
                            </H2SD>
                            <PSD>{project.category.map(category => `${category} - `)}</PSD>
                        </div>
                    ))
                }
            </div>


        </DivContentS>
    );
}