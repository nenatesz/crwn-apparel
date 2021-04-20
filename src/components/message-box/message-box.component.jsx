import React from 'react';

import './message-box.styles.scss';

const MessageBox = ({children, variant}) => (
    <div className={`alert alert-${variant} message-box`}>
        {children}
    </div>
);

export default MessageBox;