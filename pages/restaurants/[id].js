import DetailsRestaurant from '../../components/DetailsRestaurant';

export default function Restaurant({restaurant}) {
  return <DetailsRestaurant restaurant={restaurant}/>
}

// export async function getServerSideProps(context) {
//   const { id } = context.query;

//   try {
//     const res = await fetch(`${process.env.apiUrl}/api/restaurants/${id}`);
//     const restaurant = await res.json();
//     const isError = res.ok ? false : true;
//     return { props: { restaurant, isError: isError}}
//   } catch (error) {
//     return { props: { isError: isError}}
//   }
// }

export async function getStaticPaths({params}) {
  const res = await fetch(`${process.env.apiUrl}/api/restaurants`);
  const restaurant = await res.json();

  const paths = restaurant.map((restaurant) => ({
    params: {id: restaurant.id.toString()}
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({params}) {
  const res = await fetch(`${process.env.apiUrl}/api/restaurants/${params.id}`);
  const restaurant = await res.json();

  return {
    props: { restaurant },
    revalidate: 120
  }
}
