import { productsMainsStyle, sectionItemsStyle, sectionNewtStyle } from "../../style/product/Products";
import FilterSideBar from "./FilterSideBar";
import Product from "./Product";



const Products: React.FC = () => {

    // 사이드바(필터), 신제품, 신발, 의류, 용품
    return (
        <main style={productsMainsStyle}>
            <FilterSideBar />
            <section style={sectionNewtStyle}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
             </section>
             <section style={sectionItemsStyle}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
             </section>
        </main>

    );
}

export default Products;