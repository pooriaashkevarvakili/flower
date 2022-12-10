import {
    defineStore
} from "pinia"
import asset10 from "@/assets/img/asset 10.jpeg"
import asset9 from "@/assets/img/asset 9.jpeg"
import asset8 from "@/assets/img/asset 8.jpeg"
import asset7 from "@/assets/img/asset 7.jpeg"
import asset13 from "@/assets/img/asset 13.jpeg"
import asset12 from "@/assets/img/asset 12.jpeg"
import asset11 from "@/assets/img/asset 11.jpeg"
import asset17 from "@/assets/img/asset 17.jpeg"
import asset16 from "@/assets/img/asset 16.jpeg"
import asset15 from "@/assets/img/asset 15.jpeg"
import asset14 from "@/assets/img/asset 14.jpeg"
export const useProductStore = defineStore('counter', {
    state: () => {
        return {
            product: [{
                    id: 1,
                    img: asset10,
                    name: 'ویژه ولن تاین',
                    price: 36000
                },
                {
                    id: 2,
                    img: asset9,
                    name: 'گلدان 5',
                    price: 16000
                },
                {
                    id: 3,
                    img: asset8,
                    name: 'دسته گل 2',
                    price: 50000
                },
                {
                    id: 4,
                    img: asset7,
                    name: 'سبدگل2',
                    price: 130000
                },
                {
                    id: 5,
                    img: asset13,
                    name: 'گلدان شیشه ای 3',
                    price: 113000
                },
                {
                    id: 6,
                    img: asset7,
                    name: 'سبدگل',
                    price: 80000
                },
                {
                    id: 7,
                    img: asset12,
                    name: 'گلدان 4',
                    price: 95000
                },
                {
                    id: 8,
                    img: asset11,
                    name: 'دسته گل 1',
                    price: 46000
                },
                {
                    id: 9,
                    img: asset17,
                    name: 'سبدپاییز',
                    price: 50000
                },
                {
                    id: 10,
                    img: asset16,
                    name: 'هدیه ای عالی',
                    price: 40000,
                },
                {
                    id: 11,
                    img: asset15,
                    name: 'گلدان شیشه ای',
                    price: 115000
                },
                {
                    id: 12,
                    img: asset14,
                    name: 'گلدان شیشه ای 2',
                    price: 140000
                }
            ]
        }
    },
    getters: {
        allProducts() {
            return this.product
        }
    },
    actions: {

    }
})