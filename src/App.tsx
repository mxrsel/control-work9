import Layout from "./components/Layout/Layout.tsx";
import {Route, Routes} from "react-router-dom";
import NewCategory from "./containers/newCategory/newCategory.tsx";
import CategoryListPage from "./containers/CategoryListPage/CategoryListPage.tsx";
import EditCategoryItem from "./containers/EditCategoryItem/EditCategoryItem.tsx";
import NewTransaction from "./containers/newTransaction/newTransaction.tsx";

const App = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/categories' element={<CategoryListPage />}/>
                    <Route path='/editCategory/:categoryId' element={<EditCategoryItem />}/>
                    <Route path='/newCategory' element={<NewCategory /> } />
                    <Route path='/newTransaction' element={<NewTransaction />}/>
                </Routes>
            </Layout>
        </>
    );
};

export default App;