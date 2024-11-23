import Layout from "./components/Layout/Layout.tsx";
import {Route, Routes} from "react-router-dom";
import NewCategory from "./containers/newCategory/newCategory.tsx";
import CategoryListPage from "./containers/CategoryListPage/CategoryListPage.tsx";

const App = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/categories' element={<CategoryListPage />}/>
                    <Route path='/newCategory' element={<NewCategory /> } />
                </Routes>
            </Layout>
        </>
    );
};

export default App;