import { DivContentS, H2SD, H3SD} from 'styles/index.style';
import skills from 'data/skills.json';
import inProject from 'services/inProjects';
import { IProject } from 'interfaces/iProject';
import { useEffect, useState } from 'react';
import { ButtonFillterS, DivBtnfillter, DivContentFillter } from './Projects.style';
import { colors } from 'styles/vars.style';
import { ISkill } from 'interfaces/iSkill';
import { ProjectCard } from 'components/ProjectCard';

export default function Projects() {
    const [filters, setFilters] = useState<string[]>([]);
    const [listProjects, setListProjects] = useState<IProject[]>(inProject);

    useEffect(() => {
        if (filters.length === 0) return setListProjects(inProject);
        const filteredProjects = inProject.filter(project => project.category.some(category => filters.includes(category)));
        setListProjects(filteredProjects);
    }, [filters]);

    function selectFilter(filterClicked: string) {
        if (!filters.includes(filterClicked)) {
            setFilters([...filters, filterClicked]);
        } else {
            setFilters(filters.filter(category => category !== filterClicked));
        }
    }

    return (
        <DivContentS>
            <H2SD>Projetos</H2SD>
            <DivContentFillter>
                <H3SD color={colors.white} >Filtros</H3SD>
                <DivBtnfillter>
                    {skills.map((category: ISkill) => (
                        <ButtonFillterS
                            key={category._id}
                            onClick={() => selectFilter(category.category)}
                            isFilter={filters.includes(category.category)}
                            color={category.color}
                        >
                            {category.tecTitle}
                        </ButtonFillterS>
                    ))}
                </DivBtnfillter>
            </DivContentFillter>
            <div style={{
                display: 'flex',
                gap: '1.1em',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}>
                <ProjectCard projects={listProjects} />
            </div>


        </DivContentS>
    );
}