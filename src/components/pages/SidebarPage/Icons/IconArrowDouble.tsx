import { FC } from "react";

const IconArrowDouble: FC<{ isActive?: boolean }> = ({ isActive }) => {
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
                d="M15.4685 13.9385H7.53146C7.2934 13.9385 7.16047 14.1898 7.3079 14.3614L11.2764 18.9632C11.39 19.0949 11.6088 19.0949 11.7236 18.9632L15.6921 14.3614C15.8395 14.1898 15.7066 13.9385 15.4685 13.9385Z"
                fill={fillColor}
            />
            <path
                d="M15.6921 10.639L11.7236 6.03727C11.61 5.90555 11.3912 5.90555 11.2764 6.03727L7.3079 10.639C7.16047 10.8106 7.2934 11.062 7.53146 11.062H15.4685C15.7066 11.062 15.8395 10.8106 15.6921 10.639Z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconArrowDouble;
