import React from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import RoundBox from '../RoundBox/RoundBox'


const Container = styled.div`
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;

const Title = styled.h3`
    padding: 8px;
`;

const RoundBoxContainer = styled.div`
  max-width: 100%;
  min-height: 170px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
//   margin-top: 3rem;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : '#fff')};
//   border: 1px solid lightgrey;
`;

const RoundBoxColumn = (props) => {
    return (<Container>
        <Title>{props.column.title}</Title>
        <Droppable droppableId={props.column.id} direction="horizontal">
            {(provided, snapshot) => (
                <RoundBoxContainer ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
                    {props.tasks.map((task, index) => <RoundBox key={task.id} index={index} task={task} />)}
                    {provided.placeholder}
                </RoundBoxContainer>
            )}
        </Droppable>
    </Container>)
}


export default RoundBoxColumn;