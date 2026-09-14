type ProjectCardProps = {
    name: string;
    openIssues: number;
};

export function ProjectCard({
    name, 
    openIssues
}: ProjectCardProps) {
    return(
        <article>
            <h2>{name}</h2>
            <p>{openIssues} open issues</p>
        </article>
    );
}