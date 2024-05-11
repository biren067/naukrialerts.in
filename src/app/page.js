
// import CardList from '@/components/cartList/CardList';
import CategoryList from '@/components/categoryList/CategoryList';
// import Features from '@/components/features/Features';
// import PopularMenu from '@/components/popularMenu/PopularMenu';
import '@/styles/globals.scss'
// import '@/styles/cardcontainer.scss';
import CardContainer from '@/components/cardContainer/CardContainer';
import FilterArea from '@/components/filterarea/FilterArea';

export default function Home() {
  return (
    <div>

      {/* <Features/> */}
      {/* <CategoryList/> */}
      <FilterArea pagesize={5} pagenumber={1}/>
      <CardContainer/>             
    </div>
  );
}
