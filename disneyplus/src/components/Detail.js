import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
            </Background>
            <ImageTitle>
                <img src=" https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
            </ImageTitle>
            <Controls>

                <PlayButton>
                    <img src = "/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>

                <TrailerButton>
                    <img src = "/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>

                <AddButton>
                <img src = "/images/watchlist-icon.svg" />
                </AddButton>

                <GroupButton>
                <img src = "/images/group-icon.png" />
                </GroupButton>
            
            </Controls>
            <SubTitle>
                2018 - 7m - Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
            Bao is a 2018 American computer-animated short film written and directed by Domee Shi and produced by Pixar Animation Studios. It was released with Incredibles 2 on June 15, 2018. The film is about an aging and lonely Chinese-Canadian mother, suffering from empty nest syndrome, who receives an unexpected second chance at motherhood when she makes a steamed bun (baozi) that comes to life. The film won the Oscar for the Best Animated Short Film at the 91st Academy Awards.
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    margin-top: 40px;
    height: 50vh:
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    
    img {
        
        width: 25%;
        height: 50%;
        object-fit: contain;
    }


`
const Controls = styled.div`
    display: flex;
    align-items: center;
    


`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb( 249,249,249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    &:hover {
        background: rgb( 198,198,198);
    }

`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0,0, 0.3);
    border: 3px solid rgb(249,249,249);
    color: rgb(249,249,249);
    text-transform: uppercase;
    


`
const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(0, 0,0, 0.5);
    border: 2px solid rgb(249,249,249);
    cursor: pointer;
    span {
        font-size: 30px;
        color: white;
    }
    &:hover {
        background: rgb( 150,150,150);
    }

`
const GroupButton = styled(AddButton)`
background: rgba(0, 0,0, 0.6);

`

const SubTitle = styled.div`
    color: rgb( 249, 249, 249);
    font-size: 20px;
    min-height: 25px;
    margin-top: 26px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 18px;
    margin-top: 20px;
    color: rgb(249, 249, 249);
    max-width: 760px;
    `