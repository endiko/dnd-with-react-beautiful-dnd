const InitialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'quis ut nam facilis et officia qui' },
        'task-2': { id: 'task-2', content: 'fugiat veniam minus' },
        'task-3': { id: 'task-3', content: 'laboriosam mollitia et enim quasi adipisci quia provident illum' },
        'task-4': { id: 'task-4', content: 'qui ullam ratione quibusdam voluptatem quia omnis' },
        'task-5': { id: 'task-5', content: 'A' },
        'task-6': { id: 'task-6', content: 'B' },
        'task-7': { id: 'task-7', content: 'C' },
        'task-8': { id: 'task-8', content: 'D' }
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'column-2': {
            id: 'column-2',
            title: 'In progress',
            taskIds: []
        },
        'column-3': {
            id: 'column-3',
            title: 'Done',
            taskIds: []
        },
        'column-4': {
            id: 'column-4',
            title: 'Boxes',
            taskIds: ['task-5', 'task-6', 'task-7', 'task-8']
        },
    },

    // Facilitate reordering of the columns

    columnOrder: ['column-1', 'column-2', 'column-3'],
    columnHorizontalOrder: ['column-4']
}

export default InitialData;