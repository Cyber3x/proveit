import basketImage from '../assets/images/basket.jpg';
import footballImage from '../assets/images/football.jpg';
import tenisImage from '../assets/images/tenis.jpg';
import volleyballImage from '../assets/images/volleyball.jpg';
import handballImage from '../assets/images/handball.jpg';

import {
  BASKETBALL,
  FOOTBALL,
  TENIS,
  VOLLEYBALL,
  HANDBALL,
  BASKETBALL_NAME,
  FOOTBALL_NAME,
  TENIS_NAME,
  VOLLEYBAL_NAME,
  HANDBALL_NAME,
} from '../constants/sports';

export const getImage = sportName => {
  switch (sportName) {
    case BASKETBALL:
      return basketImage;
    case FOOTBALL:
      return footballImage;
    case TENIS:
      return tenisImage;
    case VOLLEYBALL:
      return volleyballImage;
    case HANDBALL:
      return handballImage;
    default:
      return 'error no image found';
  }
};

export const getName = sportName => {
  switch (sportName) {
    case BASKETBALL:
      return BASKETBALL_NAME;
    case FOOTBALL:
      return FOOTBALL_NAME;
    case TENIS:
      return TENIS_NAME;
    case VOLLEYBALL:
      return VOLLEYBAL_NAME;
    case HANDBALL:
      return HANDBALL_NAME;
    default:
      return 'this is not a supported sport';
  }
};
