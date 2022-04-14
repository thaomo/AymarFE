import styled from 'styled-components'

export const Container = styled.div`
    padding: 80px 60px;
    background: radial-gradient(circle, rgba(240, 240, 240, 1) 0%, rgba(240, 240, 240, 1) 100%);
    margin-top: 50px;
`


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`

export const Link = styled.a`
    color: rgba( 73, 73, 71);
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
`

export const Title = styled.p`
    font-size: 24px;
    color: rgba( 73, 73, 71);
    margin-bottom: 40px;
    font-weight: bold;
    text-align: left;
`