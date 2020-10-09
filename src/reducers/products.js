/**
 * Products Reducer
 */

const productsReducerDefaultState = [{
  	id: 'abc123',
  	avatar: 'J',
  	seller: 'John Doe',
  	image: 'staticAssets/beans_jgdn6y',
  	localImg: require('../assets/beans.jpg'),
  	imgUrl: 'https://res.cloudinary.com/zaobora/image/upload/v1600257745/staticAssets/beans_jgdn6y.jpg',
  	date: "September 14, 2016",
  	title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
  },{
  	id: 'abc124',
  	avatar: 'I',
  	seller: 'Irene Njeri',
  	image: 'staticAssets/carrots_k7k2ku',
  	localImg: require('../assets/carrots.jpg'),
  	imgUrl: 'https://res.cloudinary.com/zaobora/image/upload/v1600257765/staticAssets/carrots_k7k2ku.jpg',
  	date: "October 14, 2016",
  	title: 'Proin mattis dictum lacinia. Curabitur id enim sem. Nulla aliquam',
  	description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
  },{
  	id: 'abc125',
  	avatar: 'M',
  	seller: 'Mark Njenga',
  	image: 'staticAssets/peas_vkpymp',
  	localImg: require('../assets/peas.jpg'),
  	imgUrl: 'https://res.cloudinary.com/zaobora/image/upload/v1600257759/staticAssets/peas_vkpymp.jpg',
  	date: "January 3, 2020",
  	title: 'Nulla vel aliquet ligula. Duis consequat ex a feugiat tempus.',
  	description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
  },{
  	id: 'abc126',
  	avatar: 'T',
  	seller: 'Tobius Malombe',
  	image: 'staticAssets/tomatoes_arzns2',
  	localImg: require('../assets/tomatoes.jpg'),
  	imgUrl: 'https://res.cloudinary.com/zaobora/image/upload/v1600257757/staticAssets/tomatoes_arzns2.jpg',
  	date: "December 1, 2018",
  	title: 'Fusce maximus velit at ligula congue, sit amet vulputate felis tempus.',
  	description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
  },{
  	id: 'abc127',
  	avatar: 'K',
  	seller: 'Kevin Mutunga',
  	image: 'staticAssets/mangoes_ksuvfs',
  	localImg: require('../assets/mangoes.jpg'),
  	imgUrl: 'https://res.cloudinary.com/zaobora/image/upload/v1600257780/staticAssets/mangoes_ksuvfs.jpg',
  	date: "February 14, 2020",
  	title: 'Vivamus sit amet dolor tristique, faucibus nibh ac, auctor quam. Mauris',
  	description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
  },{
  	id: 'abc128',
  	avatar: 'P',
  	seller: 'Philip Otieno',
  	image: 'staticAssets/vegetables_bqz9sy',
  	localImg: require('../assets/vegetables.jpg'),
  	imgUrl: 'https://res.cloudinary.com/zaobora/image/upload/v1600257761/staticAssets/vegetables_bqz9sy.jpg',
  	date: "August 14, 2016",
  	title: 'rhoncus, nibh sit amet imperdiet elementum, velit diam pellentesque',
  	description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
  }]

export default (state = productsReducerDefaultState, action) => {
    switch (action.type) {
      case 'FETCH_ALL_PRODUCTS':
          return {
            ...state,
            products: action.payload
          }
      case 'FETCH_PRODUCT':
          return {
            ...state,
            products: action.payload
          }
        default:
          return state;
    }
};
