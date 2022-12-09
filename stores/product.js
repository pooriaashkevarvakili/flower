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
                    title: 'ویژه ولن تاین',
                    price: '36/000'
                },
                {
                    id: 2,
                    img: asset9,
                    title: 'گلدان 5',
                    price: '16/000'
                },
                {
                    id: 3,
                    img: asset8,
                    title: 'دسته گل 2',
                    price: '50/000'
                },
                {
                    id: 4,
                    img: asset7,
                    title: 'سبدگل2',
                    price: '130/000'
                },
                {
                    id: 5,
                    img: asset13,
                    title: 'گلدان شیشه ای 3',
                    price: '113/000'
                },
                {
                    id: 6,
                    img: asset7,
                    title: 'سبدگل',
                    price: '80/000'
                },
                {
                    id: 7,
                    img: asset12,
                    title: 'گلدان 4',
                    price: '95/000'
                },
                {
                    id: 8,
                    img: asset11,
                    title: 'دسته گل 1',
                    price: '46/000'
                },
                {
                    id: 9,
                    img: asset17,
                    title: 'سبدپاییز',
                    price: '50/000'
                },
                {
                    id: 10,
                    img: asset16,
                    title: 'هدیه ای عالی',
                    price: '40/000',
                },
                {
                    id: 11,
                    img: asset15,
                    title: 'گلدان شیشه ای',
                    price: '115/000'
                },
                {
                    id: 12,
                    img: asset14,
                    title: 'گلدان شیشه ای 2',
                    price: '140/000'
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