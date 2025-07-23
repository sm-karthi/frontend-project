
export interface FormValues {
    name: string,
    comments: string,
    captcha?: string
}


export interface FormErrors {
    name?: string,
    comments?: string,
    captcha?: string
}


export interface CopyBioBtnProps {
    textToCopy: string;
}


export interface Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    vx: number;
    vy: number;
    color: string;
    size: number;
    ease: number;
    friction: number;
};


export interface Blog {
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    fileName: string
}