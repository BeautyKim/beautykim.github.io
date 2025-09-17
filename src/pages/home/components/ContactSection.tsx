
export function ContactSection() {
    const contactInfo = [
        { label: 'email', value: 'shadowbubobubo@gmail.com', icon: 'ri-mail-line' },
        { label: 'github', value: '/BeautyKim', icon: 'ri-github-line' },
    ];

    const handleSendMessage = () => {
        try {
            console.log('Send Message button clicked');
        } catch (error) {
            console.error('Failed to handle Send Message click:', error);
        }
    };

    return (
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                    <div className="text-[#007acc] dark:text-[#39FF14] text-lg mb-4">
                        <span>$ mail BeautyKim</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
                    <p className="text-lg leading-relaxed max-w-2xl mx-auto break-keep">
                        새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 언제든지 연락해주세요.
                        함께 멋진 것을 만들어봅시다!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {contactInfo.map((contact, index) => (
                        <div
                            key={index}
                            className="flex items-center p-4 bg-[#f8f9fa] dark:bg-[#2d2d2d] rounded-lg border border-[#007acc]/20 dark:border-[#39FF14]/20 hover:border-[#007acc]/40 dark:hover:border-[#39FF14]/40 transition-colors cursor-pointer"
                        >
                            <div className="w-12 h-12 flex items-center justify-center bg-[#007acc]/10 dark:bg-[#39FF14]/10 rounded-lg mr-4">
                                <i
                                    className={`${contact.icon} w-6 h-6 flex items-center justify-center text-[#007acc] dark:text-[#39FF14]`}
                                ></i>
                            </div>
                            <div>
                                <div className="text-sm text-[#007acc] dark:text-[#39FF14] font-semibold">
                                    {contact.label}:
                                </div>
                                <div className="text-lg">{contact.value}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button
                        onClick={handleSendMessage}
                        className="px-8 py-4 bg-[#007acc] dark:bg-[#39FF14] text-white dark:text-[#1e1e1e] rounded-md hover:opacity-90 transition-opacity text-lg whitespace-nowrap cursor-pointer"
                    >
                        {/* Use HTML entity for the leading ">" to avoid JSX parsing issues */}
                        &gt; Send Message
                    </button>
                </div>

                <div className="mt-16 pt-8 border-t border-[#007acc]/20 dark:border-[#39FF14]/20 text-center">
                    <div className="text-sm mb-4">
                        <span className="text-[#007acc] dark:text-[#39FF14]">$ whoami</span>
                    </div>
                    <p className="text-sm opacity-75">
                        © 2024 BeautyKim. Built with React, TypeScript, and lots of ☕
                    </p>
                </div>
            </div>
        </section>
    );
}
