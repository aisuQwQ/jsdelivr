//export own function and use other module
import {nihao} from "./module.ts"
export function hello(): String{
    return nihao();
}