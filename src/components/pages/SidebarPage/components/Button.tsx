import { FC, HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";

const Button: FC<PropsWithChildren & HTMLAttributes<HTMLButtonElement>> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <button type={"button"} className={cn("button", className)} {...rest}>
            {children}
        </button>
    );
};

export default Button;
