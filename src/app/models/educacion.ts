export class Educacion {
    id?: number;
    school: string;
    img: string;
    title: string;
    career: string;
    start: string;
    end: string;

    constructor(school: string, img:string, title:string,  career:string, start:string, end:string){
        this.school = school;
        this.img = img;
        this.title = title;
        this.career = career;
        this.start = start;
        this.end = end;
    }

}    