import * as Yup from 'yup';
export declare const ProductsSchema: Yup.ArraySchema<{
    id?: string;
    name?: string;
}[], Yup.AnyObject, "", "">;
export declare const ProductSchema: Yup.ObjectSchema<{
    name: string;
}, Yup.AnyObject, {
    name: undefined;
}, "">;
