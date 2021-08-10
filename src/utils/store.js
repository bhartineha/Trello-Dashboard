const cards = [
  {
    id: 'card-1',
    title: 'To do list 1',
  },
  {
    id: 'card-2',
    title: 'To do list 2',
  },
  {
    id: 'card-3',
    title: 'To do list 3',
  },
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Todo',
      cards,
    },
    'list-2': {
      id: 'list-2',
      title: 'Doing',
      cards: [],
    },
  },
  listIds: ['list-1', 'list-2'],
};

export default data;
