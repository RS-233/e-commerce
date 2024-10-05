import { createContext, useEffect, useState  } from "react";
import axios from "axios"
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);
    const url = 'http://localhost:4000';
    const [token,setToken] = useState("")
    const [itemlist,setItemList] = useState([])
    const[reviewlist, setReviewlist] = useState([])
    const [target, setTarget] = useState()
    
    



    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
            setTarget((prev) => ({[itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }

        if(token){
            await axios.post(url+"/cart/addcart",{itemId},{headers:{token}})
        }

    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if(token){
            await axios.post(url+"/cart/removecart",{itemId},{headers:{token}})
        }
    }
   

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = itemlist.find((product) => product._id === item)
                totalAmount += itemInfo.offerprice * cartItems[item];
                
                
            }

        }
        return totalAmount;
    }
    const getSingleProduct = async (itemId) => {
        let response = itemlist.find((product) => product._id === itemId)
        setTarget(response)

    }
    const reviewList = async () => {
        const response = await axios.get(url+`/review/reviewlist`)
        setReviewlist(response.data.data)
    }

    const fetchProductList = async () => {
        const response = await axios.get(url+"/product/list");

        setItemList(response.data.data)
    }
    const loadCartData = async (token) => {
        const response = await axios.post(url+`/cart/getcart`,{},{headers:{token}});
        setCartItems(response.data.cartData);
    }

    useEffect(()=>{
        
        async function loadData(){
            await fetchProductList();
            await reviewList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    })
    const contexValue = {
        itemlist,
        target,
        cartItems,
        reviewlist,
        addToCart,
        setCartItems,
        removeFromCart,
        getTotalCartAmount,
        getSingleProduct,
        url,
        token,setToken

    }

    return (
        <StoreContext.Provider value={contexValue}>
            {props.children}
        </StoreContext.Provider>
    )


}

export default StoreContextProvider;