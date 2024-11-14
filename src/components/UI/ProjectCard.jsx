import styles from './style.module.css';

function ProjectCard() {
    return (
        <div className={styles.projectCard}>
            {/* Image Section */}
            <div className={styles.cardImage}>
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                    alt="Project"
                />
             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
  {/* View Project Icon */}
  <a
    href="/"
    className="m-1 p-2 bg-gray-800 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110"
  >
    <img
      src="https://img.icons8.com/ios/24/globe--v1.png"
      alt="View Project"
      className="w-5 h-5 filter brightness-125"
    />
  </a>
  
  {/* GitHub Icon */}
  <a
    href="/"
    className="m-1 p-2 bg-gray-800 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110"
  >
    <img
      src="https://img.icons8.com/fluency/24/github.png"
      alt="GitHub"
      className="w-5 h-5 filter brightness-125"
    />
  </a>
</div>

            </div>

            {/* Content Section */}
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Project Title</h3>
                <p className={styles.cardDescription}>
                    This is a brief description of the project. It highlights the main features and technology used in a concise way.
                </p>
                <a href="/" className={styles.cardButton}>View Project</a>
            </div>
        </div>
    );
}

export default ProjectCard;
