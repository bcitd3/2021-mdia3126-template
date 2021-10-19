import styled from 'styled-components';

const DetailsCont = styled.div`
  display:flex;
`;

const LeftCont = styled.div`
  flex:1;
  padding:10px;
`;

const MovieImg = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  border-radius:10px;
`;

const RightCont = styled.div`
  flex:2;
  display:flex;
  flex-direction:column;
`;

const TextCont = styled.div`
  display:flex;
  flex-direction:column;
  margin:10px;
`;

const Header = styled.span`
  font-size:24px;
`;

const SubHeader = styled.span`
  font-size:18px;
`;

const Details = ({}) => {

  return <DetailsCont>
    <LeftCont>
      <MovieImg src="https://placekitten.com/500/500" />
    </LeftCont>
    <RightCont>
      <TextCont>
        <Header>Title</Header>
        <SubHeader>Actual Move Title</SubHeader>
      </TextCont>
      <TextCont>
        <Header>Description</Header>
        <SubHeader>Actual Move Description</SubHeader>
      </TextCont>
    </RightCont>
  </DetailsCont>
}

export default Details;