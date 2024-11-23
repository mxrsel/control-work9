import Layout from "./components/Layout/Layout.tsx";
import {Route, Routes} from "react-router-dom";
import NewCategory from "./containers/newCategory/newCategory.tsx";
import CategoryListPage from "./containers/CategoryListPage/CategoryListPage.tsx";
import EditCategoryItem from "./containers/EditCategoryItem/EditCategoryItem.tsx";
import NewTransaction from "./containers/newTransaction/newTransaction.tsx";
import MainPage from "./containers/MainPage/MainPage.tsx";
import EditTransaction from "./containers/EditTransaction/EditTransaction.tsx";

const App = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/' element={<MainPage />}/>
                    <Route path='/categories' element={<CategoryListPage />}/>
                    <Route path='/editCategory/:categoryId' element={<EditCategoryItem />}/>
                    <Route path='/newCategory' element={<NewCategory /> } />
                    <Route path='/newTransaction' element={<NewTransaction />}/>
                    <Route path='/editTransaction/:transactionId' element={<EditTransaction/>}/>
                    <Route path='*' element={<h1>Not found</h1>}/>
                </Routes>
            </Layout>
        </>
    );
};

export default App;