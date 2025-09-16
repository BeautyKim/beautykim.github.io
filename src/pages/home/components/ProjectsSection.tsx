
import { useState } from 'react';
import { ProjectModal } from './ProjectModal';

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

export function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            title: 'E-commerce Platform',
            description: '현대적인 UI/UX와 실시간 결제 시스템을 갖춘 전자상거래 플랫폼',
            tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
            image:
                'https://readdy.ai/api/search-image?query=modern%20minimalist%20e-commerce%20website%20interface%20with%20clean%20product%20grid%20layout%2C%20shopping%20cart%20functionality%2C%20professional%20corporate%20design%2C%20light%20background%20with%20subtle%20shadows%2C%20desktop%20view%2C%20contemporary%20web%20design%20aesthetics&width=600&height=400&seq=ecommerce1&orientation=landscape',
            liveUrl: 'https://demo.example.com',
            githubUrl: 'https://github.com/beautykim/ecommerce',
            details:
                '사용자 경험을 최우선으로 한 전자상거래 플랫폼입니다. 직관적인 상품 검색, 실시간 재고 관리, 안전한 결제 시스템을 구현했습니다.',
            features: [
                '반응형 디자인',
                '실시간 검색',
                '장바구니 기능',
                '결제 시스템',
                '관리자 대시보드',
            ],
        },
        {
            id: 2,
            title: 'Task Management App',
            description: '팀 협업을 위한 인터랙티브 태스크 관리 애플리케이션',
            tech: ['React', 'Redux', 'Express', 'MongoDB', 'Socket.io'],
            image:
                'https://readdy.ai/api/search-image?query=clean%20task%20management%20dashboard%20interface%20with%20kanban%20board%20layout%2C%20project%20cards%2C%20team%20collaboration%20features%2C%20modern%20productivity%20app%20design%2C%20organized%20workspace%20with%20minimal%20aesthetic%2C%20professional%20blue%20color%20scheme&width=600&height=400&seq=taskapp2&orientation=landscape',
            liveUrl: 'https://tasks.example.com',
            githubUrl: 'https://github.com/beautykim/taskmanager',
            details:
                '효율적인 팀 협업을 위한 태스크 관리 도구입니다. 드래그 앤 드롭, 실시간 업데이트, 팀원 간 소통 기능을 제공합니다.',
            features: [
                '칸반 보드',
                '실시간 협업',
                '진행률 추적',
                '팀 채팅',
                '파일 공유',
            ],
        },
        {
            id: 3,
            title: 'Creative Portfolio',
            description:
                '인터랙티브 애니메이션과 3D 요소를 활용한 크리에이티브 포트폴리오',
            tech: ['Next.js', 'Three.js', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
            image:
                'https://readdy.ai/api/search-image?query=creative%20interactive%20portfolio%20website%20with%203D%20elements%2C%20modern%20animations%2C%20artistic%20layout%20design%2C%20professional%20creative%20showcase%2C%20contemporary%20web%20design%20with%20smooth%20transitions%2C%20elegant%20typography%20and%20visual%20hierarchy&width=600&height=400&seq=portfolio3&orientation=landscape',
            liveUrl: 'https://creative.example.com',
            githubUrl: 'https://github.com/beautykim/creative-portfolio',
            details:
                '창의적인 비주얼과 인터랙티브 요소가 돋보이는 포트폴리오 사이트입니다. 3D 애니메이션과 스크롤 기반 스토리텔링을 구현했습니다.',
            features: [
                '3D 애니메이션',
                '스크롤 인터랙션',
                '반응형 디자인',
                '성능 최적화',
                '접근성 준수',
            ],
        },
    ];

    // Optional: simple error handling for image loading failures
    const handleImageError = (
        e: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        (e.currentTarget as HTMLImageElement).src =
            'https://via.placeholder.com/600x400?text=Image+Unavailable';
    };

    return (
        <>
            <section className="py-20 px-6 bg-[#f8f9fa] dark:bg-[#252525]">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12">
                        <div className="text-[#007acc] dark:text-[#39FF14] text-lg mb-4">
                            <span>$ cat ./projects</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white dark:bg-[#2d2d2d] rounded-lg overflow-hidden border border-[#007acc]/20 dark:border-[#39FF14]/20 hover:border-[#007acc]/40 dark:hover:border-[#39FF14]/40 transition-all hover:transform hover:scale-105 cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="aspect-video bg-[#f1f5f9] dark:bg-[#1a1a1a] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top"
                                        onError={handleImageError}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-[#007acc] dark:text-[#39FF14]">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 text-xs bg-[#007acc]/10 dark:bg-[#39FF14]/10 text-[#007acc] dark:text-[#39FF14] rounded"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4">
                                        <button className="text-sm text-[#007acc] dark:text-[#39FF14] hover:underline whitespace-nowrap cursor-pointer">
                                            {'> View Details'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </>
    );
}
