import { Board } from './definition';

export const boards: Board[] = [
  {
    id: 1,
    name: 'Platform Launch',
    columns: [
      {
        id: 1,
        name: 'TODO',
        tasks: [
          {
            id: 1,
            name: 'Build UI for onboarding flow',
            description: '',
            status: 'TODO',
            subtasks: [
              {
                id: 1,
                name: 'Design wireframes',
                status: 'TODO',
              },
              {
                id: 2,
                name: 'Implement wireframes in HTML and CSS',
                status: 'TODO',
              },
              {
                id: 3,
                name: 'Test onboarding flow',
                status: 'TODO',
              },
            ],
          },
          {
            id: 2,
            name: 'Design settings and search pages',
            description: '',
            status: 'TODO',
            subtasks: [
              {
                id: 1,
                name: 'Test onboarding flow',
                status: 'TODO',
              },
            ],
          },
          {
            id: 3,
            name: 'Conduct 5 wireframe tests',
            description: '',
            status: 'TODO',
            subtasks: [],
          },
        ],
      },
      {
        id: 2,
        name: 'DOING',
        tasks: [
          {
            id: 4,
            name: 'Marketing Plan',
            description: '',
            status: 'DOING',
            subtasks: [
              {
                id: 1,
                name: 'Design wireframes',
                status: 'DOING',
              },
            ],
          },
          {
            id: 5,
            name: 'Roadmap',
            description: '',
            status: 'DOING',
            subtasks: [],
          },
        ],
      },
      {
        id: 3,
        name: 'DONE',
        tasks: [
          {
            id: 6,
            name: 'Create New Board',
            description: '',
            status: 'DONE',
            subtasks: [],
          },
          {
            id: 7,
            name: 'Build UI for search',
            description: '',
            status: 'DONE',
            subtasks: [],
          },
          {
            id: 8,
            name: 'Add account management',
            description: '',
            status: 'DONE',
            subtasks: [],
          },
          {
            id: 9,
            name: 'Create wireframe prototype',
            description: '',
            status: 'DONE',
            subtasks: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Feature Development',
    columns: [
      {
        id: 4,
        name: 'BACKLOG',
        tasks: [
          {
            id: 10,
            name: 'Feature 1: User Authentication',
            description: 'Implement user authentication feature',
            status: 'TODO',
            subtasks: [
              {
                id: 4,
                name: 'Design login page',
                status: 'TODO',
              },
              {
                id: 5,
                name: 'Implement backend authentication',
                status: 'TODO',
              },
            ],
          },
          {
            id: 11,
            name: 'Feature 2: Dashboard',
            description: 'Create a user dashboard',
            status: 'TODO',
            subtasks: [],
          },
        ],
      },
      {
        id: 5,
        name: 'IN PROGRESS',
        tasks: [
          {
            id: 12,
            name: 'Feature 3: Notifications',
            description: 'Implement notification system',
            status: 'DOING',
            subtasks: [],
          },
        ],
      },
      {
        id: 6,
        name: 'COMPLETED',
        tasks: [
          {
            id: 13,
            name: 'Feature 4: Analytics',
            description: 'Integrate analytics tools',
            status: 'DONE',
            subtasks: [],
          },
        ],
      },
    ],
  },
];
