import { IconType } from 'react-icons';
import { HiAcademicCap } from 'react-icons/hi2'

type mapper = {
    [key: string]: IconType
};

const LearnForFunIcons: mapper = {
    HiAcademicCap: HiAcademicCap

};


function ReactIconsClientMapper(key: string): IconType | undefined {
    return LearnForFunIcons[key]
}

export { ReactIconsClientMapper };
