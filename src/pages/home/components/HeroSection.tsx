
import { useState, useEffect } from 'react';

export function HeroSection() {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = "Interactive Web Experience Developer";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setDisplayText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => clearInterval(cursorTimer);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center pt-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8 text-[#007acc] dark:text-[#39FF14] text-lg">
                    <span>[BeautyKim/Portfolio] &gt; </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    BeautyKim
                </h1>

                <div className="text-xl md:text-2xl mb-8 h-8 flex items-center justify-center">
                    <span>{displayText}</span>
                    <span className={`ml-1 w-3 h-6 bg-[#007acc] dark:bg-[#39FF14] ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
          </span>
                </div>

                <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                    프론트엔드 기술과 창의적 사고를 결합하여 사용자 중심의 인터랙티브 웹 경험을 만들어내는 개발자입니다.
                    현대적인 기술 스택과 미적 감각으로 비즈니스 목표를 달성하는 솔루션을 제공합니다.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <button className="px-8 py-3 bg-[#007acc] dark:bg-[#39FF14] text-white dark:text-[#1e1e1e] rounded-md hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer">
                        &gt; View Projects
                    </button>
                    <button className="px-8 py-3 border-2 border-[#007acc] dark:border-[#39FF14] text-[#007acc] dark:text-[#39FF14] rounded-md hover:bg-[#007acc]/10 dark:hover:bg-[#39FF14]/10 transition-colors whitespace-nowrap cursor-pointer">
                        &gt; Download Resume
                    </button>
                </div>
            </div>
        </section>
    );
}
