import styled from "styled-components";

export const ArticuleWrapper = styled.div`
  display: block
  width: 80%;
  height: auto;
  padding: 20px 5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
 
`;


export const Title = styled.p`
font-weight: bold;
color: ${({ theme }) => theme.colors.darkGrey};
font-size: ${({ theme }) => theme.fontSize.xl};
margin: 0;
@media (max-width: 768px) {
  font-size: ${({ theme }) => theme.fontSize.l};
}
`
export const Category = styled.p`
font-weight: light;
color: ${({ theme }) => theme.colors.yellow};
font-size: ${({ theme }) => theme.fontSize.l};
margin: 5px 0 15px 0;
`
export const Article = styled.div`
font-weight: regular;
color: ${({ theme }) => theme.colors.darkGrey};
font-size: ${({ theme }) => theme.fontSize.l};
position: relative;
margin-right: 20px;
@media (max-width: 768px) {
  font-size: ${({ theme }) => theme.fontSize.m};
}
`
export const Photo = styled.div`
max-width: 200px;
`
export const PhotoWrapper = styled.div`
display: flex;
justify-content: left;
align-items: center;
`



