export type WorkExperience = {
    title: string;
    company: string;
    from: string;
    to: string;
    city: string;
    country: string;
    description: string[];
    duties: string[];
    jobs?: {
        title: string;
        data: Job[];
    };
};

type techsTools = {
    title: string;
    data: string[][];
};

type Job = {
    title: string;
    description: string;
    technologies: techsTools;
    tools?: techsTools;
    roles: {
        title: string;
        data: string[];
    };
};