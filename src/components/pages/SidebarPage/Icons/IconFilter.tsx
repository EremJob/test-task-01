import { FC } from "react";

const IconFilter: FC<{ isActive?: boolean }> = ({ isActive }) => {
    const fillColor = isActive ? "#B9BBC2" : "#D64686";
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.5 7H19.5M7 12H17M10 17H14"
                stroke={fillColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IconFilter;
