import { useDispatch } from 'react-redux';
import { pokedeskItemActions } from '../store/pokedesk-item-slice';
import { useCallback } from 'react';

export const useHTTP = () => {
  const dispatch = useDispatch();
  const sendRequest = useCallback(
    async (requestConfig) => {
      try {
        dispatch(pokedeskItemActions.isPending(true));
        dispatch(pokedeskItemActions.onError({ error: null }));
        const data = await fetch(requestConfig.input, requestConfig.init).then(
          (res) => {
            if (!res.ok) throw Error(`error: ${res.statusText || res.status}`);
            return res.json();
          }
        );
        switch (requestConfig.action) {
          case 'setItem': {
            dispatch(pokedeskItemActions.onResponseItem({ item: data }));
            break;
          }
          case 'setItems': {           
            dispatch(pokedeskItemActions.onResponseItems({ items: data }));
            break;
          }
          default: {
            console.warn(`unsupported action: ${requestConfig.action}`);
          }
        }
      } catch (err) {
        console.warn(err.message || err);
        dispatch(pokedeskItemActions.onError({ error: err.message }));
      } finally {
        dispatch(pokedeskItemActions.isPending({ isPending: false }));
      }
    },
    [dispatch]
  );
  return {
    sendRequest,
  };
};
