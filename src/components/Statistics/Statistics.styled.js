// Щоб зробити підкреслювання між словами і заповнити всю ширину знадобилось:
// створити флекс контейнер - лі
// створити псевдоелемент
// змінити порядок елементів у флекс конейнері - order: -1
// присвоїти всевдолементу приорітет заповнення ширини - flex-grow: 1; (за змовчуванням у всіх 0)

// https://developer.mozilla.org/en-US/docs/Web/CSS/order
// https://developer.mozilla.org/ru/docs/Web/CSS/flex-grow


import styled from '@emotion/styled'

export const Feedback = styled.li`
    display: flex;
    align-items: baseline;
    gap: 10px;

    font-weight: 500;
    margin-bottom: 10px;
    letter-spacing: 2px;    

    &::after{
        content: '';
        height: 1px;
        display: inline-block;
        flex-grow: 1;
        background-color: rgba(255,255,255);
    }
`

export const Count = styled.span`
    font-weight: 600; 
    order: 2;   
`