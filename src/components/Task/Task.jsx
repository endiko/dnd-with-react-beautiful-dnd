import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: #fff;
    box-shadow: ${props => (props.isDragging ? '0 0 5px 0 rgba(0,0,0,.3)' : 'none')};
`;

function Task(props) {
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    {props.task.content}
                </Container>
            )}

        </Draggable>
    )
}

export default Task;