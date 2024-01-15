import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import DevicePage from "./pages/DevicePages"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]


export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTER_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    }

]