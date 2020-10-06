import image from './assets/image.png';
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

export const model = [
  new TitleBlock('Сделай свой сайт, с помощью чистого JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center'
    }
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto',
    },
    alt: 'Картинка для портфолио'
  }),
  new ColumnsBlock([
    'Создание приложений на Javascript с нуля до заливки на хостинг (можно даже самому его и настроить)',
    'Сборка с использованием современных технологий - Parcel или WebPack. И конечно же перед сборкой - обязательное тестирование!',
    'Использование всех последних трендов проектирования (шаблоны, принципы, концепты) - такие как SOLID, DRY, TDD',
  ], {
    styles: {
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold'
    }
  }),
  new TextBlock('То, что Вы видите, сделано на чистом JavaScript - без использования каких-либо фреймворков.',
    {
      styles: {
        background: 'linear-gradient(to left, #f2994a, #f2c94c)',
        padding: '1rem',
        'font-weight': 'bold'
      }
    }),
];