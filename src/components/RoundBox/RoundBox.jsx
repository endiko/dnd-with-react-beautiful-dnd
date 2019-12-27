import React from 'react'
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  text-shadow: 1px 1px 3px #fff;
  font-size: 2rem;
  font-weight: 700;
  background: #fff;
  background-image: linear-gradient(90deg, rgba(200, 0, 0, .4) 50%, transparent 0),
                    linear-gradient(rgba(200, 0, 0, .4) 50%, transparent 0);
  background-size: 10px 10px;
  transition: opacity .3s ease;

  &:hover {
      opacity: .85;
  }
  
  &:focus,
  &:active {
      outline: dotted;
  }
`;

const RoundBox = (props) => {
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided) => (
                <Container
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                >
                    {props.task.content[0].toUpperCase()}
                </Container>
            )}
        </Draggable>)

}

export default RoundBox;