import create from 'zustand';
import {devtools, persist} from 'zustand/middleware';

const storeItem = (set)=>({
    items: [],
    addItem: (item)=>{
        set(state=>({
            items: [item, ...state.items]
        }))
    },
  removeItem: (itemId)=>{
            set(state=>({
                items: state.items.filter((item)=>item.id !== itemId)
            }))
        }
    
     
});
const useStoreItem = create(devtools(persist(storeItem, {name: 'store-item'})));

export default useStoreItem;