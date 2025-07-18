"use client"

import { useState } from "react";

interface CopyBioBtnProps {
    textToCopy: string;
}

export function CopyBioBtn({ textToCopy }: CopyBioBtnProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="py-1.5 px-3 hover:bg-[#3a3a3a] hover:text-white duration-150 cursor-pointer flex items-center gap-2"
        >
            <svg
                version="1.1"
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 115.77 122.88"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02v73.27
            v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02
            c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02
            c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86
            c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96
            L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02
            v-0.02c-0.91,0-1.75,0.39-2.37,1.01c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37
            c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02
            h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01
            h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37
            c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92
            L105.18,108.92z"
                />
            </svg>
            {copied ? "Copied!" : "Copy bio"}
        </button>
    );
}
