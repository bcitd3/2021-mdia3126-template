import styled from 'styled-components';

const CardCont = styled.div`
  min-width:100px;
  display:flex;
  flex-direction:column;
`;

const HeaderCont = styled.div`
  background-color:#eeeeee;
  position:relative;
  min-height:200px;
`

const HeaderImg = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  position:absolute;
  left:0;
  top:0;
  z-index:0;
`;

const CardHeader = styled.span`
  font-size:24px;
  z-index:999;
  position:relative;
  padding:10px;
  background-color:#FFFFFF;
`

const CardBody = styled.div`
  font-size:18px;
  padding:10px;
`;

const Card = ({}) => {

  return <CardCont>
    <HeaderCont>
      <HeaderImg src="https://placekitten.com/500/500" />
      <CardHeader>Title</CardHeader>
    </HeaderCont>
    <CardBody>
      lorum ipsum
    </CardBody>
  </CardCont>
}

export default Card;