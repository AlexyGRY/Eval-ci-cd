import { useMemo, useState } from 'react';
import projects from '../data/projects';

const CATEGORIES = ['Tous', ...new Set(projects.map((project) => project.category))];

function Projects() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Tous') {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="section projects">
      <h2>Projets</h2>

      <div className="filters" role="group" aria-label="Filtrer les projets par catégorie">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            className={category === activeCategory ? 'filter active' : 'filter'}
            onClick={() => setActiveCategory(category)}
            aria-pressed={category === activeCategory}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="project-list">
        {filteredProjects.map((project) => (
          <li key={project.id} className="project-row">
            <h3>{project.title}</h3>
            <span className="project-category">{project.category}</span>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
