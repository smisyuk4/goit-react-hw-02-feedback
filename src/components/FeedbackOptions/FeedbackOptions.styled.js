import styled from '@emotion/styled'

export const ContainerOptions = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 10px;
`

export const OptionBtn = styled.button`
    display: inline-block;
    width: 100px;
    padding: 5px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 20px;
    box-shadow: rgb(255, 255, 255) 0px 10px 20px -10px;

    &:hover {
        background-color: grey;
        color: white;
    }
`