import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { FaGripLines } from 'react-icons/fa'

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 1rem 2rem;
    margin-bottom: 8px;
    background-color: #fff;
    box-shadow: ${props => (props.isDragging ? '0 0 5px 0 rgba(0,0,0,.3)' : 'none')};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Handle = styled.div`
    display: inline-block;
`;

function Task(props) {
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}

                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    {props.task.content}
                    <Handle {...provided.dragHandleProps}>
                        <FaGripLines style={{ width: '20px', height: '25px', fill: '#222' }} />
                    </Handle>
                </Container>
            )}

        </Draggable>
    )
}

export default Task;