import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';

// import './custom-button.styles.scss';

const CustomButton = ({children, ...otherProps}) => (
    <CustomButtonContainer {...otherProps}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;








// const CustomButton = ({children, isGoogleSignin, inverted, ...otherProps}) => (
//     <button className={`${inverted ? 'inverted' : '' } ${isGoogleSignin ? 'google-sign-in' : '' } custom-button`} {...otherProps}>
//         {children}
//     </button>
// );