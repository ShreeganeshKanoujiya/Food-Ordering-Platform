import React, { useState } from 'react'
import style from './card.module.css'
import Card from './Card'
import { dosa, idly, vada, rawa, mesur, set, masalaUttapam, onionUttapam, MysoreMasalaDosa, Pesarattu, Pongal, RagiDosa, RavMasalaDosa, SetDosa, Uttapam, Upma, rawaIdli } from '../assets/assets'

const Webpage = ({ cart, setCart }) => {

    let [search, setSearch] = useState("")
    let cardData = [
        {
            id: 1,
            name: "Masla Dosa",
            img: dosa,
            price: 80,
            des: "Dosa is a thin pancake originating from the Indian subcontinent, made from a fermented batter of ground rice and black lentils."
        },
        {
            id: 2,
            name: "Idly",
            img: idly,
            price: 50,
            des: "Idly is a soft, spongy cake made from fermented rice and lentil batter. It is a popular breakfast item in South India and is often served with sambar and chutney."
        },
        {
            id: 3,
            name: "Vada",
            img: vada,
            price: 40,
            des: "Vada is a deep-fried snack made from lentil batter. It is a popular breakfast item in South India and is often served with sambar and chutney."
        },
        {
            id: 4,
            name: "Rawa Dosa",
            img: rawa,
            price: 90,
            des: "Rawa Dosa is a variant of Dosa made from semolina (rawa) instead of rice flour. It has a distinct texture and is often served with various chutneys and sambar."
        },
        {
            id: 5,
            name: "Mesur Dosa",
            img: mesur,
            price: 100,
            des: "Mysore Masala Dosa is a popular South Indian breakfast from Karnataka, featuring a thick, crispy-on-the-outside, soft-within crepe."
        },
        {
            id: 6,
            name: "Pesarattu",
            img: Pesarattu,
            price: 85,
            des: "Pesarattu is a traditional South Indian crepe made from green gram (moong dal) batter. It is often served with ginger chutney and upma."
        },
        {
            id: 7,
            name: "Uttapam",
            img: Uttapam,
            price: 95,
            des: "Uttapam is a thick, savory pancake made from fermented rice and lentil batter. It is typically topped with chopped vegetables and served with chutney and sambar."
        },
        {
            id: 8,
            name: "Rava Idli",
            img: rawaIdli,
            price: 70,
            des: "Rava Idli is a variation of the traditional idli, made from semolina (rava) instead of rice flour. It is a quick and easy breakfast option, often served with chutney and sambar."
        },
        {
            id: 9,
            name: "Onion Uttapam",
            img: onionUttapam,
            price: 105,
            des: "Onion Uttapam is a variation of the traditional uttapam, topped with finely chopped onions. It is a popular breakfast dish in South India, served with chutney and sambar."
        },
        {
            id: 10,
            name: "Ragi Dosa",
            img: RagiDosa,
            price: 95,
            des: "Ragi Dosa is a nutritious variation of the traditional dosa, made from ragi (finger millet) flour. It is a healthy breakfast option, often served with chutney and sambar."
        },
        {
            id: 11,
            name: "Pongal",
            img: Pongal,
            price: 75,
            des: "Pongal is a comforting South Indian dish made from rice and moong dal, cooked together with spices. It is often served as a breakfast item or during festivals."
        },
        {
            id: 12,
            name: "Upma",
            img: Upma,
            price: 60,
            des: "Upma is a popular South Indian breakfast dish made from semolina (rava) and cooked in a tempering of mustard seeds, curry leaves, and other spices."
        },
        {
            id: 13,
            name: "Masala Uttapam",
            img: masalaUttapam,
            price: 110,
            des: "Masala Uttapam is a flavorful variation of the traditional uttapam, topped with a spicy potato filling. It is a popular breakfast dish in South India, served with chutney and sambar."
        },
        {
            id: 14,
            name: "Rava Masala Dosa",
            img: RavMasalaDosa,
            price: 120,
            des: "Rava Masala Dosa is a delicious variation of the traditional dosa, made from semolina (rava) and filled with a spicy potato mixture. It is a popular breakfast dish in South India."
        },
        {
            id: 15,
            name: "Mysore Masala Dosa",
            img: MysoreMasalaDosa,
            price: 130,
            des: "Mysore Masala Dosa is a popular South Indian breakfast from Karnataka, featuring a thick, crispy-on-the-outside, soft-within crepe filled with a spicy potato mixture."
        },
        {
            id: 16,
            name: "Set Dosa",
            img: SetDosa,
            price: 100,
            des: "Set Dosa is a soft, fluffy variation of the traditional dosa, typically served in a set of three. It is often accompanied by chutney and sambar."
        }
    ]

    let filterData = cardData.filter((i) => {
        return i.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className={style.main}>
            <input type="text"
                placeholder='Search food'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    padding: "10px",
                    margin: "20px",
                    width: "95vw",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    textAlign: "center"
                }}
            />
            <Card cardData={filterData} cart={cart} setCart={setCart} />
        </div>
    )
}

export default Webpage 