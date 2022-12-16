import {TitleSection}  from "./Title.styled"

export const Title = ({ title, children }) => {
    return <div>
            <TitleSection>{title}</TitleSection>
            {children}
        </div>
}