import { AppStackScreen } from "./interface";
import LaunchStackNavigator from "./launch/stack";
import DashBoardStackNavigator from "./dashboard/stack";

export const appStackRoutes: AppStackScreen[]=[
{
   name:'Launch',
   component :LaunchStackNavigator,
},
{
    name:'Dashboard',
   component :DashBoardStackNavigator, 
}
]
