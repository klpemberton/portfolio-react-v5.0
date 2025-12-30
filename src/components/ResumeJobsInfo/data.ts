export interface JobDetails {
  company: string;
  location: string;
  industry: string;
  summary: string;
  accomplishments: string[];
}

export interface ResumeData {
  title: string;
  dates: string;
  details: JobDetails[];
}

export type AdditionalJob = Pick<ResumeData, 'title' | 'dates'> &
  Pick<JobDetails, 'company' | 'location'>;

// Skills section
export interface SkillsData {
  categories?: {
    [category: string]: string[];
  };
  all?: string[];
}

export const Skills: SkillsData = {
  all: [
    'Frontend Architecture & Design Systems',
    'React & TypeScript',
    'Testing Strategy & Tooling',
    'Performance & Accessibility',
    'Build Tooling & Package Management',
    'Technical Leadership & Decision-Making',
    'Mentorship & Code Quality Standards',
    'AI-assisted Development (Cursor)',
  ],
};

export const JobsDataFeatured: ResumeData[] = [
  {
    title: 'Senior Frontend Software Engineer',
    dates: '11/2023 - 08/2025',
    details: [
      {
        company: 'Anedot',
        location: 'Remote',
        industry: 'Fundraising',
        summary:
          'Implemented React + TypeScript tools for fundraising and reporting, optimizing performance and user experience.',
        accomplishments: [
          'Delivered a new event ticketing platform, providing an improved interface for managing fundraisers.',
          'Led migration of legacy Rails frontend code to a modern React + TypeScript stack, reducing technical debt and streamlining future development.',
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
        summary:
          'Led technical design and execution of key frontend initiatives in a staff-level capacity. Partnered with product, design, and backend teams to deliver high-impact features and scalable frontend systems.',
        accomplishments: [
          'Delivered a React + TypeScript self-service patient renewal funnel, improving engagement and reducing renewal friction.',
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
        summary:
          'Owned technical direction and frontend delivery as Tech Lead, driving architecture, planning, and implementation for patient-facing and internal applications. Improved retention and conversion by owning and iterating on the patient-facing React experience.',
        accomplishments: [
          'Spearheaded Cypress e2e testing implementation, improving reliability and confidence in releases.',
          'Delivered a modern React + TypeScript patient dashboard, improving usability and maintainability.',
          'Co-led the development of a React + WebRTC telemedicine platform, enabling scalable video interactions for patients and providers.',
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
        summary:
          'Owned design and implementation of React + Redux frontends across multiple high-traffic fashion brands, ensuring scalable and maintainable systems. Built high-impact interfaces and optimized application performance, enhancing the experience for millions of active users.',
        accomplishments: [
          'Drove frontend modernization efforts, including migrating JustFab and ShoeDazzle from ColdFusion to React, improving performance, maintainability, and developer efficiency.',
          'Contributed to shared component libraries and backend integrations, streamlining cross-brand feature development.',
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
        summary:
          'Owned frontend architecture and delivery as Project Lead, collaborating cross-functionally to ensure scalable, maintainable solutions.',
        accomplishments: [
          'Led design and development of Multi-Bureau Credit Lock, a high-impact feature enhancing user control and engagement.',
          'Improved build tooling and frontend processes, increasing team efficiency and reducing long-term maintenance overhead.',
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
        summary:
          'Built performant high-traffic credit monitoring web applications viewed by millions, with a focus on maintainability, performance, and user experience.',
        accomplishments: [
          'Played a key role in multiple website and feature launches, including trueidentity.com.',
          'Delivered revenue-driving frontend features, including dynamic ads and upsells, contributing to increased monetization.',
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
        summary:
          "Played a key role in the redesign and relaunch of cookmedical.com, the company's flagship public website.",
        accomplishments: [
          'Led frontend modernization of the Physician Certification Inventory System, improving usability and reducing ongoing maintenance overhead.',
        ],
      },
    ],
  },
];
