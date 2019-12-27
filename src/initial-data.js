const InitialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'quis ut nam facilis et officia qui' },
        'task-2': { id: 'task-2', content: 'fugiat veniam minus' },
        'task-3': { id: 'task-3', content: 'laboriosam mollitia et enim quasi adipisci quia provident illum' },
        'task-4': { id: 'task-4', content: 'qui ullam ratione quibusdam voluptatem quia omnis' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        }
    },

    // Facilitate reordering of the columns

    columnOrder: ['column-1']
}

export default InitialData;