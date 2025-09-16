
import { useEffect, useState } from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string;
    liveUrl: string;
    githubUrl: string;
    details: string;
    features: string[];
}

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

/**
 * ProjectModal displays detailed information about a project.
 * It traps focus inside the modal and disables page scrolling while open.
 * The modal can be dismissed by clicking the overlay, pressing the close
 * button, or hitting the Escape key.
 */
export function ProjectModal({ project, onClose }: ProjectModalProps) {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 200);
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };

        // Add key listener and prevent background scrolling
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        // Cleanup on unmount
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay – clicking it closes the modal */}
            <div
                className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-200 ${
                    isClosing ? 'opacity-0' : 'opacity-100'
                }`}
                onClick={handleClose}
                aria-label="Close modal"
            ></div>

            <div className={`relative bg-white dark:bg-[#1e1e1e] border-2 border-[#007acc] dark:border-[#39FF14] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden transition-all duration-300 ${
                isClosing ? 'animate-modal-out' : 'animate-modal-in'
            }`}>
                <header className="flex items-center justify-between p-4 border-b border-[#007acc]/20 dark:border-[#39FF14]/20">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-4 text-sm text-[#007acc] dark:text-[#39FF14]">
              project/{project.title.toLowerCase().replace(/\s+/g, '-')}
            </span>
                    </div>

                    <button
                        onClick={handleClose}
                        className="w-8 h-8 flex items-center justify-center hover:bg-[#007acc]/10 dark:hover:bg-[#39FF14]/10 rounded transition-colors cursor-pointer"
                        aria-label="Close modal"
                    >
                        <i className="ri-close-line w-5 h-5 flex items-center justify-center"></i>
                    </button>
                </header>

                <section className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] custom-scrollbar">
                    {/* Project Image */}
                    <div className="mb-6">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full aspect-video object-cover object-top rounded-lg"
                        />
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#007acc] dark:text-[#39FF14]">
                        {project.title}
                    </h2>

                    {/* Detailed description */}
                    <p className="text-lg mb-6 leading-relaxed">{project.details}</p>

                    {/* Features list */}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-3">주요 기능</h3>
                        <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    {/* Use HTML entity for ">" to avoid JSX parsing issues */}
                                    <span className="text-[#007acc] dark:text-[#39FF14] mr-2">&gt;</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech stack */}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-3">기술 스택</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-[#007acc]/10 dark:bg-[#39FF14]/10 text-[#007acc] dark:text-[#39FF14] rounded-full text-sm"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-6 py-3 bg-[#007acc] dark:bg-[#39FF14] text-white dark:text-[#1e1e1e] rounded-md hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer"
                        >
                            <i className="ri-external-link-line w-4 h-4 flex items-center justify-center mr-2"></i>
                            Live Demo
                        </a>

                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-6 py-3 border-2 border-[#007acc] dark:border-[#39FF14] text-[#007acc] dark:text-[#39FF14] rounded-md hover:bg-[#007acc]/10 dark:hover:bg-[#39FF14]/10 transition-colors whitespace-nowrap cursor-pointer"
                        >
                            <i className="ri-github-line w-4 h-4 flex items-center justify-center mr-2"></i>
                            View Code
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}