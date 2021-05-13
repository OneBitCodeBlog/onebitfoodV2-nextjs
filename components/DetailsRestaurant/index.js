import Details from './Details';
import CategoryProducts from './CategoryProducts';

export default function DetailsRestaurant(props) {

  return(
    <>
      <Details {...props.restaurant} />
      {props.restaurant.product_categories.map((product_category, i) =>
        <CategoryProducts restaurant={props.restaurant} {...product_category} key={i} />
      )}
    </>
  )
}