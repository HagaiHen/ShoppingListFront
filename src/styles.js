import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row; /* Change to row for side-by-side layout */
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

export const LeftBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  background-color: #ffffff;
`;

export const RightBar = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 80%;
  height: 40%;
  background-color: #ffffff;
  right: 0; /* Align to the right */
`;

export const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ProductListItem = styled.li`
  background-color: #f0f0f0;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  width: 30%;
  /* Add any other styling you need for list items */

  /* Add a border-bottom except for the last item */
  border-bottom: ${(props) => (props.isLast ? 'none' : '1px solid #ccc')};
`;

export const BottomBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  background-color: #ffffff;
  padding: 10px; /* Adjust padding as needed */
  margin-top: 20%;
  border-radius: 10px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 90%;
  background-color: #dddddd;
  margin-left: 20px;
  border-radius: 10px;
`;

export const CategoryButton = styled.button`
  height: 60px;
  background-color: transparent;
  color: black;
  display: flex;
  align-items: center;
  border: none;
  justify-content: center;
  border-bottom: 1px solid #aaaaaa; /* Adjust the color and thickness as needed */
`;

export const ProductButton = styled.button`
  height: 20px;
  background-color: transparent;
  color: black;
  align-items: center;
  border: none;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const CompleteButton = styled.button`
  height: '60px';
  marginRight: '20px';
  marginLeft: '10px';
`;
