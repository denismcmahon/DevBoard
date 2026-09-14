import { ProjectCard } from "./components/ProjectCard";

function App() {
  return (
    <main>
      <h1>DevBoard</h1>

      <ProjectCard 
        name="Website Redesign"
        openIssues={12}
      />

      <ProjectCard 
        name="Mobile App"
        openIssues={7}
      />

      <ProjectCard 
        name="Internal Tools"
        openIssues={4}
      />
    </main>
  );
}

export default App;