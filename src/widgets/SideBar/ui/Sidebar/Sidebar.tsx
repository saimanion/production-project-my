import {ClassNames} from "shared/lib/ClassNames/ClassNames";
import cls from './Sidebar.module.scss'
import React, {FC, useState} from "react";
import {ThemeSwither} from "widgets/ThemeSwither";
import {LangSwither} from "widgets/LangSwitcher/ui/LangSwither";

interface SideBarProps {
    className?: string;
}


export const Sidebar:FC<SideBarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () =>{
        setCollapsed(prev => !prev)
    }




    return (
        <div className={ClassNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.swithers}>
                <ThemeSwither />
                <LangSwither className={cls.lang} />
            </div>
        </div>
    );
};

