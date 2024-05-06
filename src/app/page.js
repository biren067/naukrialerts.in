
// import CardList from '@/components/cartList/CardList';
import CategoryList from '@/components/categoryList/CategoryList';
import Features from '@/components/features/Features';
// import PopularMenu from '@/components/popularMenu/PopularMenu';
import styles from '@/styles/globals.scss'
import '@/styles/cardcontainer.scss';
import CardContainer from '@/components/cardContainer/CardContainer';

export default function Home() {
  return (
    <div className={`${styles.container}`}>

      <Features/>
      <CategoryList/>
      <CardContainer/>             
    </div>
  );
}
