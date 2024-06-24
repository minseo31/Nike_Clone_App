import { useState } from "react";
import * as styles from '../../style/product/Category'; 

const categories = [
    {
      name: '신제품',
      subcategories: []
    },
    {
      name: '신발',
      subcategories: ['조던', '러닝', '농구', '축구', '트레이닝 및 짐', '스케이트보딩', '골프', '테니스', '샌들 & 슬리퍼']
    },
    {
      name: '의류',
      subcategories: ['탑 & 티셔츠', '후디 & 크루', '재킷 & 베스트', '팬츠& 타이즈', '트랙슈트', '서핑 & 수영복', '양말']
    },
    {
      name: '용품',
      subcategories: ['가방', '모자 & 헤어밴드', '양말', '장갑', '슬리브 & 암 밴드', '공', '보호대']
    }
  ];
  
  const commonFilters = ['성별', '가격대', '할인율', '색상', '사이즈', '정렬기준'];

const FilterSideBar = () => {

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  
    const handleCategoryClick = (category: string) => {
      setSelectedCategory(selectedCategory === category ? null : category);
      setSelectedSubcategory(null);
    };
  
    const handleSubcategoryClick = (subcategory: string) => {
      setSelectedSubcategory(subcategory);
    };

    return (
        <div style={styles.sidebar}>
          <h2 style={styles.title}>CATEGORY</h2>
          <ul style={styles.list}>
            {categories.map((category) => (
              <li key={category.name} style={styles.item}>
                <div onClick={() => handleCategoryClick(category.name)} style={styles.category}>
                  {category.name}
                </div>
                {selectedCategory === category.name && category.subcategories.length > 0 && (
                  <ul style={styles.sublist}>
                    {category.subcategories.map((subcategory) => (
                      <li
                        key={subcategory}
                        onClick={() => handleSubcategoryClick(subcategory)}
                        style={{
                          ...styles.subitem,
                          fontWeight: selectedSubcategory === subcategory ? 'bold' : 'normal',
                          color: selectedSubcategory === subcategory ? '#000' : '#aaa',
                        }}
                      >
                        {subcategory}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <h2 style={styles.title}>FILTERS</h2>
          <ul style={styles.list}>
            {commonFilters.map((filter) => (
              <li key={filter} style={styles.item}>
                {filter}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default FilterSideBar;