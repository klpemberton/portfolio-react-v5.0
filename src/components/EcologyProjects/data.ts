export interface InstagramLink {
  url: string;
  date: string;
}

export interface EcologyProject {
  title: string;
  titleUrl?: string;
  instagramLinks?: InstagramLink[];
  description: string;
}

export const ecologyProjects: EcologyProject[] = [
  {
    title: 'Steigerwald National Wildlife Refuge - Washougal, WA',
    titleUrl:
      'https://storymaps.arcgis.com/stories/aee7fb7fbdd74407bf447101ae7d76c0',
    instagramLinks: [
      { url: 'https://www.instagram.com/p/Cl39Nmtp689/', date: 'Dec 3, 2022' },
      { url: 'https://www.instagram.com/p/CoF5h9CvTvQ/', date: 'Jan 28, 2023' },
      { url: 'https://www.instagram.com/p/CpwAdSoNBoY/', date: 'Mar 11, 2023' },
      { url: 'https://www.instagram.com/p/Cz4tAdOxlWm/', date: 'Nov 18, 2023' },
      { url: 'https://www.instagram.com/p/C31H2YRtNwm/', date: 'Feb 24, 2024' },
      { url: 'https://www.instagram.com/p/C31H2YRtNwm/', date: 'Mar 8, 2025' },
    ],
    description:
      'Volunteered with The Lower Columbia Estuary Partnership to plant native trees and shrubs as part of the largest ever restoration project on the lower Columbia River. This project was completed in 2025.',
  },
  {
    title: 'Mable Kerr Park - Washougal, WA',
    titleUrl: 'https://www.instagram.com/p/Cc4CxLbBF-A/',
    instagramLinks: [
      { url: 'https://www.instagram.com/p/C31H2YRtNwm/', date: 'Oct 18, 2023' },
      { url: 'https://www.instagram.com/p/C31H2YRtNwm/', date: 'Dec 6, 2025' },
    ],
    description:
      'Volunteered with the Lower Columbia Estuary Partnership for installation of native plants and removal of Himalayan blackberry, English ivy, and other invasives along Campen Creek.',
  },
  {
    title: 'Skamania County, WA',
    titleUrl: 'https://www.instagram.com/skamanianativeplants/',
    instagramLinks: [
      {
        url: 'https://www.instagram.com/skamanianativeplants/',
        date: '2020 - Present',
      },
    ],
    description:
      "Ongoing removal of Himalayan blackberry, English ivy, herb robert, tansy, thistle, and other invasives on 3+ acre personal property on unceded Stl'pulmsh (Cowlitz) land. This removal is allowing existing native plants to thrive and repopulate. Includes monitoring and preservation of 2+ acres of mature forest and restoration of 1+ acre of second-growth forest.",
  },
  {
    title: 'Beaver Marsh Park - Vancouver, WA',
    titleUrl: 'https://www.instagram.com/p/CfeVFc3hxyl/',
    instagramLinks: [
      { url: 'https://www.instagram.com/p/CfeVFc3hxyl/', date: 'Jun 25, 2022' },
    ],
    description:
      'Volunteered with The Watershed Alliance for removal of English ivy and holly along Burnt Bridge Creek.',
  },
];
