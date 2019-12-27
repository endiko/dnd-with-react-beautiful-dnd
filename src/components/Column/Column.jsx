import React from 'react'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import Task from '../Task/Task';

const Container = styled.div`
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    margin: 8px;
    border: 1px solid lightgrey;
    background-color: #fff;
    border-radius: 2px;
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    flex: 1;
    padding: 8px;
    background-color: ${props => (props.isDraggingOver ? '#eee' : 'inherit')};
    transition: background-color .2s ease;
    min-height: 100px;
`;

class InnerList extends React.Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.tasks === this.props.tasks) return false;
        return true;
    }
    render() {
        return this.props.tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
        ))
    }
}

function Column(props) {
    return (
        <Draggable draggableId={props.column.id} index={props.index}>
            {provided => (
                <Container {...provided.draggableProps} ref={provided.innerRef}>
                    <Title {...provided.dragHandleProps}>{props.column.title}</Title>
                    <Droppable droppableId={props.column.id} type="task">
                        {(provided, snapshot) => (
                            <TaskList ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
                                {/* {props.tasks.map((task, index) => <Task key={task.id} index={index} task={task} />)} */}
                                <InnerList tasks={props.tasks}></InnerList>
                                {provided.placeholder}
                            </TaskList>
                        )}
                    </Droppable>
                </Container>
            )}

        </Draggable>
    )
}

export default Column;