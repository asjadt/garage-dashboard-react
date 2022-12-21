import {combineReducers} from 'redux'
import Todoapp from './todo/reducer'
import Ecommerce from './ecommerce/Product/reducer'
import Common from '../redux/common/common'
import Filters from './ecommerce/Filter/reducer'
import Wishlist from './ecommerce/Wishlist/reducer'
import Cart from './ecommerce/cart/reducer'
import ChatApp from './chap-app/reducer'
import EmailApp from './email/reducer'
import Customizer from './customizer/reducer'
const reducers = combineReducers({
    Todoapp,
    data:Ecommerce,
    Common,
    filters:Filters,
    Wishlistdata:Wishlist,
    Cartdata:Cart,
    ChatApp,
    EmailApp,
    Customizer
});

export default reducers;