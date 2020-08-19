import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  flex-basis: 50%;
  margin: 2rem;
  background: white;
  padding: 3rem;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const PhotoWrapper = styled.div`
//   width: 200px;
//   height: 200px;
//   overflow: hidden;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

const Img = styled.img`
  height: 100%;
  width: 200px;
`;

const NickName = styled.span`
  color: #e62156;
  font-weight: bold;
  text-transform: capitalize;
  font-family: "Nanum Pen Script", cursive;
  font-size: 2.2rem;
  transform: rotate(6deg);
  text-shadow: 2px 2px 5px #f9f6f6;
`;

const Name = styled.p`
  text-transform: capitalize;
  font-family: "Nanum Pen Script", cursive;
  font-size: 2.2rem;
  margin: 0;
  display: inline;
`;

const KidsCards = ({ kids }) => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <CardsContainer>
      {kids.map((kid) => (
        <Link key={kid._id} href="/kid/[name]" as={`/kid/${kid.name}`}>
          <a>
            <Card>
              <CardWrapper>
                <Img src={kid.photo} alt={kid.name} />
                <div>
                  <NickName>{kid.description}</NickName>
                  <Name>{kid.name}</Name>
                </div>
              </CardWrapper>
            </Card>
          </a>
        </Link>
      ))}
    </CardsContainer>
  );
};

export default KidsCards;
