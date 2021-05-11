import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slickSettings from './slick_settings';
import { Card } from 'react-bootstrap';
import Category from './Category';


export default function Categories() {
  const categories = [{
      'id': 1,
      'title': 'Italiana',
      'image_url': '/category.jpeg'
    },{
      'id': 1,
      'title': 'Italiana',
      'image_url': '/category.jpeg'
    },{
      'id': 1,
      'title': 'Italiana',
      'image_url': '/category.jpeg'
    },{
      'id': 1,
      'title': 'Italiana',
      'image_url': '/category.jpeg'
    },{
      'id': 1,
      'title': 'Italiana',
      'image_url': '/category.jpeg'
    }
  ]

  return(
    <>
      <h3 className='fw-bold'>Categorias</h3>
      <Card className='mt-2'>
        <Slider {...slickSettings} className='px-4 pt-4 text-center'>
          {categories.map((category, i) => <Category {...category} key={i}/>)}
        </Slider>
      </Card>
    </>
  )
}