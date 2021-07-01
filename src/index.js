import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers'

const initialState = {
  "videos": [
    {
      id: 1,
      title: "Los BEATS MITICOS de ZONE",
      image: "https://i.ibb.co/k0THxGR/thumbnail-1.png",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi illum earum ipsa recusandae corrupti tenetur aliquid deserunt dolorum ipsum repellendus sit ducimus itaque eum cupiditate exercitationem hic, repellat voluptatem facere.",
    },
    {
      id: 2,
      title: "Los MEJORES MOMENTOS de COLOSO",
      image: "https://i.ibb.co/hMSryd8/thumbnail-2.png",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi illum earum ipsa recusandae corrupti tenetur aliquid deserunt dolorum ipsum repellendus sit ducimus itaque eum cupiditate exercitationem hic, repellat voluptatem facere.",
    },
    {
      id: 3,
      title: "FILOSOFO: La PROMESA colombiana",
      image: "https://i.ibb.co/kGSwSKm/thumbnail-3.png",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi illum earum ipsa recusandae corrupti tenetur aliquid deserunt dolorum ipsum repellendus sit ducimus itaque eum cupiditate exercitationem hic, repellat voluptatem facere.",
    },
    {
      id: 4,
      title: "GAZIR: Ingenio prestigioso",
      image: "https://i.ibb.co/9tCGKmr/thumbnail-4.png",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi illum earum ipsa recusandae corrupti tenetur aliquid deserunt dolorum ipsum repellendus sit ducimus itaque eum cupiditate exercitationem hic, repellat voluptatem facere.",
    },
    {
      id: 5,
      title: "Los MINUTAZOS que MARCARON el 2020",
      image: "https://i.ibb.co/MNpcYGb/thumbnail-5.png",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi illum earum ipsa recusandae corrupti tenetur aliquid deserunt dolorum ipsum repellendus sit ducimus itaque eum cupiditate exercitationem hic, repellat voluptatem facere.",
    },
    {
      id: 6,
      title: "ZASKO: Métrica y Punchline",
      image: "https://i.ibb.co/wR90tQs/thumbnail-6.png",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi illum earum ipsa recusandae corrupti tenetur aliquid deserunt dolorum ipsum repellendus sit ducimus itaque eum cupiditate exercitationem hic, repellat voluptatem facere.",
    },
  ]
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

