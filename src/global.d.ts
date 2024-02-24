declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg' {
    import type React from 'react';
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
declare module '*.module.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}


declare const __PLATFORM__: 'mobile' | 'desktop'
