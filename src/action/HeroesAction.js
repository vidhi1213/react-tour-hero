import{CREATE_HERO,FEATCH_MESSAGE,UPDATE_HERO,DELETE_HERO} from '../constant/type';
export const creatHeros=(hero)=>({
    type:CREATE_HERO,
    payload:hero
});
export const updateHero=(hero,id)=>({
    type:UPDATE_HERO,
    payload:{hero,id},
})
export const featchMessage=(msg)=>({
    type:FEATCH_MESSAGE,
    payload:msg
});
export const deleteHero=(id)=>({
    type:DELETE_HERO,
    payload:id,
})