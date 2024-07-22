'use client'

import React, {useEffect, useRef, useState} from "react";

type Props = {
    label: string;
    name: string;
    onChange: (b: boolean) => void;

    className?: string;
}
export default function SelectYesNo({className, label, name, onChange}: Props) {
    const [s, setSelected] = useState<boolean>(true)

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
            setSelected(true)
        } else if (e.key === "ArrowRight") {
            setSelected(false)
        } else if (e.key === "Enter") {
            onChange(s)
        }
    }

    const form = useRef<HTMLFormElement>(null)


    useEffect(() => {

        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [onChange, s])

    return (
        <div className={`flex flex-row text-mercator-lightgreen ${className}`}>
            <label className="text-nowrap">{label}</label>
            <div className="flex ml-12 gap-2">
                <label className={`px-2 ${s && "bg-mercator-darkblue"}`}>
                    <input
                        radioGroup={name}
                        type="radio"
                        value="yes"
                        className="hidden"
                    />
                    <span>ja</span>
                </label>
                <label className={`px-2 ${!s && "bg-mercator-darkblue"}`}>
                    <input
                        type="radio"
                        radioGroup={name}
                        value="no"
                        className="hidden"
                    />
                    <span>nein</span>
                </label>
            </div>
        </div>
    )
}
