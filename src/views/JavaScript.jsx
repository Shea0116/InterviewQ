
import { useState, useEffect } from 'react';
import data from '@/assets/Data/JavaScript.json'

const JavaScriptPage = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="container">
            {data.map((item, index) => (
                <div className="question-item" key={index}>
                    <dl>
                        <dt className="question-title">
                            {index+1 + '. ' + item.question}
                        </dt>
                        {item.children && item.children.map((child, childIndex) => (
                            <dd className="question-child" key={childIndex}>
                                {child.question || child}
                            </dd>
                        ))}
                    </dl>
                </div>
            ))}
            {showTopBtn && (
                <button className="back-to-top" onClick={goToTop}>
                    ↑
                </button>
            )}
        </div>
    )
}

export default JavaScriptPage