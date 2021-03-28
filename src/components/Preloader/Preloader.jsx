import React from 'react';
import './Preloader.css';

const Preloader = () => {
    return (
            <svg className='Preloader' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <g transform="rotate(0 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cba46a">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7407407407407407s" begin="-0.6790123456790123s" repeatCount="indefinite"></animate>
                    </rect>
                </g><g transform="rotate(30 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cba46a">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7407407407407407s" begin="-0.6172839506172838s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(60 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cba46a">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7407407407407407s" begin="-0.5555555555555555s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(90 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cba46a">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7407407407407407s" begin="-0.4938271604938271s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(120 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cba46a">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7407407407407407s" begin="-0.4320987654320987s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(150 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cba46a">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7407407407407407s" begin="-0.3703703703703703s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(180 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cba46a">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7407407407407407s" begin="-0.3086419753086419s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(210 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cba46a">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7407407407407407s" begin="-0.24691358024691354s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(240 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cba46a">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7407407407407407s" begin="-0.18518518518518515s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(270 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cba46a">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7407407407407407s" begin="-0.12345679012345677s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(300 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cba46a">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7407407407407407s" begin="-0.061728395061728385s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(330 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cba46a">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7407407407407407s" begin="0s" repeatCount="indefinite"></animate>
                </rect>
            </g>
            </svg>
    );
};

export default Preloader;