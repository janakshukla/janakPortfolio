import { div } from "motion/react-client";

export default function Container({ children }) {

    return (
        <div className="  min-h-[80svh] w-[50dvw] ">
            {children}
        </div>
    )
}