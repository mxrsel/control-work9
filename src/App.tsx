import Layout from "./components/Layout/Layout.tsx";
import {Route, Routes} from "react-router-dom";
import NewCategory from "./containers/newCategory/newCategory.tsx";

const App = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/newCategory' element={<NewCategory /> } />
                </Routes>
            </Layout>
        </>
    );
};

export default App;