import React, {PropsWithChildren} from 'react';
import Toolbar from "../Toolbar/Toolbar.tsx";

const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <header>
                <Toolbar />
            </header>

            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default Layout;