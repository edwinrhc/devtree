import * as React from "react";

export default function ErrorMessage({children}:{children: React.ReactNode}) {
    return (
        <p className="bg-red-50 text-red-60 p-3 uppercase text-sm font-bold">{children}</p>
    )
}