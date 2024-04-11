import React from 'react'
import { Toaster } from "react-hot-toast"
type props = {
    children: React.ReactNode;
}
const Toasts: React.FC<props> = ({ children }) => {
    return (
        <>
            {children}
            <Toaster />
        </>
    )
}

export default Toasts