import { CREATE_HERO,UPDATE_HERO,DELETE_HERO} from '../constant/type';
import{REHYDRATE} from 'redux-persist';
const intialState = {
  heroData: [],
  messages: [],
}
export const HeroesReducer = (state = intialState, action) => {
   
    switch (action.type) {
        case CREATE_HERO:
    
          state.heroData.push({
            name: action.payload,
            _id: Math.round(Math.random() * 1000000 + 1),
          });
          return state;

          case DELETE_HERO:
          return {
            ...state,
            heroData: state.heroData.filter(
              (_) => _._id !== action.payload
            ),
          };
          case UPDATE_HERO:
         
          const updateHero = state.heroData.map((_) => {
            if (_._id === +action.payload.id) _.name = action.payload.hero;
            return _;
          });
          state.heroData.splice(0, state.heroData.length, ...updateHero);
          return state;

      case REHYDRATE:
      return{
        ...state,
        
      }
        default: return state;
}
}
