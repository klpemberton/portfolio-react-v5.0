export interface JobDetails {
  company: string;
  location: string;
  industry: string;
  accomplishments: string[];
}

export interface ResumeJobsData {
  title: string;
  dates: string;
  details: JobDetails[];
}

export type AdditionalResumeJob = Pick<ResumeJobsData, 'title' | 'dates'> &
  Pick<JobDetails, 'company' | 'location'>;

export interface SkillsData {
  categories?: {
    [category: string]: string[];
  };
  all?: string[]; 
}

export const skillsData: SkillsData = {
  all: [
    'Frontend Architecture & Component Libraries',
    'JavaScript, React & TypeScript',
    'Testing Strategy & Tooling',
    'Performance & Accessibility',
    'Build Tooling & Package Management',
    'Technical Leadership & Decision-Making',
    'Mentorship & Code Quality Standards',
    'AI-assisted Development (Cursor)',
  ],
};

export const resumeJobsData: ResumeJobsData[] = [
  {
    title: 'Senior Frontend Software Engineer',
    dates: '11/2023 - 08/2025',
    details: [
      {
        company: 'Anedot',
        location: 'Remote',
        industry: 'Fundraising',
        accomplishments: [
          'Delivered a React + TypeScript event ticketing platform, improving the fundraising experience for hundreds of thousands of active users.',
          'Migrated legacy Rails frontends to React + TypeScript, reducing technical debt and enabling faster feature development.',
        ],
      },
    ],
  },
  {
    title: 'Staff Frontend Software Engineer',
    dates: '04/2023 - 06/2023',
    details: [
      {
        company: 'The Pill Club',
        location: 'Remote',
        industry: 'Healthcare',
        accomplishments: [
          'Designed and implemented a React + TypeScript self-service patient renewal funnel, increasing engagement and reducing friction.',
          'Led key frontend initiatives, ensuring scalable architecture for patient-facing applications.',
        ],
      },
    ],
  },
  {
    title: 'Senior Frontend Software Engineer',
    dates: '10/2020 - 04/2023',
    details: [
      {
        company: 'The Pill Club',
        location: 'Remote',
        industry: 'Healthcare',
        accomplishments: [
          'Implemented Cypress e2e testing, increasing release reliability and reducing post-release defects.',
          'Delivered a modern React + TypeScript patient dashboard, improving usability and maintainability.',
          'Co-led React + WebRTC telemedicine platform, enabling scalable video interactions for patients and providers.',
        ],
      },
    ],
  },
  {
    title: 'Senior Frontend Software Engineer',
    dates: '07/2018 - 10/2020',
    details: [
      {
        company: 'TechStyleOS',
        location: 'Remote',
        industry: 'eCommerce / Fashion',
        accomplishments: [
          'Modernized frontends for high-traffic fashion brands JustFab and ShoeDazzle, migrating from ColdFusion to React and improving performance and maintainability.',
          'Designed and maintained shared component libraries and integrations, accelerating cross-brand feature development.',
          'Built user interfaces such as Vue.js product grid filters, improving the shopping experience for millions of active users.',
        ],
      },
    ],
  },
  {
    title: 'Senior Frontend Developer',
    dates: '11/2016 - 07/2018',
    details: [
      {
        company: 'TransUnion',
        location: 'San Luis Obispo, CA',
        industry: 'Financial Services',
        accomplishments: [
          'Delivered CreditView Dashboard feature, providing millions of American Express and Chase customers with access to their credit data.',
          'Delivered Multi-Bureau Credit Lock feature, providing consumers with greater control over their credit profiles and reducing customer support requests.',
          'Optimized build tooling and frontend processes, reducing maintenance overhead and improving team efficiency.',
        ],
      },
    ],
  },
  {
    title: 'Frontend Developer',
    dates: '03/2015 - 11/2016',
    details: [
      {
        company: 'TransUnion',
        location: 'San Luis Obispo, CA',
        industry: 'Financial Services',
        accomplishments: [
          'Developed high-traffic credit monitoring web applications, prioritizing performance, maintainability, and user experience.',
          'Built dynamic revenue-driving frontend features, including personalized ads and upsells.',
        ],
      },
    ],
  },
  {
    title: 'Frontend Developer',
    dates: '04/2013 - 03/2015',
    details: [
      {
        company: 'Cook Medical',
        location: 'Bloomington, IN',
        industry: 'Medical Devices',
        accomplishments: [
          'Contributed to total overhaul of cookmedical.com, modernizing the codebase and improving performance and accessibility.',
          'Modernized Physician Certification Inventory System frontend, reducing maintenance and improving usability.',
        ],
      },
    ],
  },
];

