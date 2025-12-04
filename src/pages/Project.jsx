import React, { useState, useEffect } from 'react';
import '../Styles/Project.css';

export default function Project() {
  const [repos, setRepos] = useState([]);
  const [pinnedRepoNames, setPinnedRepoNames] = useState([]);

  useEffect(() => {
    const fetchPinnedNames = async () => {
      try {
        const res = await fetch('https://raw.githubusercontent.com/snk-git-hub/meh/main/README.md');
        const text = await res.text();

        const match = text.match(/<!-- pinned-start -->([\s\S]*?)<!-- pinned-end -->/);
        if (match) {
          const repoList = match[1]
            .split('\n')
            .map((line) => line.trim())
            .filter((line) => line.length > 0);
          setPinnedRepoNames(repoList);
        }
      } catch (error) {
        console.error('Error fetching pinned list:', error);
      }
    };

    fetchPinnedNames();
  }, []);

  useEffect(() => {
    if (pinnedRepoNames.length === 0) return;

    fetch('https://api.github.com/users/snk-git-hub/repos')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo) =>
          pinnedRepoNames.includes(repo.name)
        );
        const sorted = pinnedRepoNames.map(name =>
          filtered.find(repo => repo.name === name)
        ).filter(Boolean); 
        setRepos(sorted);
      })
      .catch((err) => console.error('Error fetching repos:', err));
  }, [pinnedRepoNames]);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  return (
    <>
      <header className="project-header">
        <h1>Projects on GitHub</h1>
        <p>This page lists some of my personal projects.</p>
      </header>
      <section className="project-section">
        {repos.length === 0 ? (
          <p className="loading-text">Loading...</p>
        ) : (
          <ul className="repo-list">
            {repos.map((repo) => (
              <li key={repo.id} className="repo-item">
                <span className="repo-date">{formatDate(repo.created_at)}</span>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-link"
                >
                  {repo.name}
                </a>
                <p className="repo-description">{repo.description || 'No description available.'}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
