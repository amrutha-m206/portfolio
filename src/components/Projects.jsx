import "./Projects.css";

function Projects(){
    const projects=[
        {
        title: "AutoAssess: AI Powered Quiz Generation System",
        tech: "React • Spring Boot • Kafka • MySQL • JWT • REST APIs",
        desc: ["Developed AutoAssess, a full-stack AI-powered assessment platform using React, Spring Boot, Spring Security,JWT, JPA, MySQL, Apache Kafka, and REST APIs, enabling users to upload documents, automatically generate quizzes using LLM integration, attempt assessments, receive instant scoring, and review detailed performance history.",
               "Designed an event driven architecture with Apache Kafka, implementing asynchronous communication between modules through document upload and score publishing events. Built analytics and notification consumers, integrated JWT-based authentication and authorization, DTO-based API design, assessment analytics (average, best, worst scores),notification management, and secure user-specific data access using Spring Security Context."
        ]
        },

        {
        title: "Solar Flare Detection using Deep Learning",
        tech: "Python • TensorFlow • CNN • Deep Learning",
        desc: "Built a solar flare detection system on labeled solar image datasets using a CNN model with Conv2D, BatchNorm,MaxPooling, Dropout, and Dense layers, along with preprocessing, normalization, and augmentation. Achieved 96.2% accuracy, 84.2% precision, and 80.1% recall, validated using a confusion matrix and inference on unseen solar imagery."
        },

        {
        title: "MemoryGraph AI: Hybrid Knowledge Graph Framework",
        tech: "Neo4j • FAISS • Sentence Transformers • RAG • LLMs",
        desc: "Designed and implemented a Hybrid GraphRAG architecture using Neo4j AuraDB, SentenceTransformers (all-MiniLM-L6-v2), where LLM extracted entities and relationships are persisted as a multi-document knowledge graph and enriched with 384-dimensional vector embeddings for semantic retrieval.Developed a context-aware query engine that performs Neo4j vector index search, Cypher-based graph traversal,cross-document entity linking, and graph based LLM answer generation, enabling multi-hop reasoning, persistent knowledge memory, explainable graph evidence, and hybrid retrieval ."
        }
    ];

    return(
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project-container">
                {projects.map((project,index)=>(
                    <div className="project-card" key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <p className="tech">{project.tech}</p>

                    <div className="buttons">
                    <button>GitHub</button>
                    </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Projects
