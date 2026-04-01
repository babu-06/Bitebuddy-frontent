const BITE_CATALOG = [
    {
        name: "Sudai Meen",
        category: "fish",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774416877/Suadi_Meen_bwyyo0.png",
        note: "Soft texture, ideal for curry and pan fry."
    },
    {
        name: "Kumula Meen",
        category: "fish",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774418155/Kumula_Meen_e51wst.png",
        note: "Mild flavor with quick clean and cut prep."
    },
    {
        name: "Paarai Meen",
        category: "fish",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774419764/Paarai_meen_lesarz.png",
        note: "Popular table fish with thick slices."
    },
    {
        name: "Nethili Meen",
        category: "fish",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774794223/nethili_meen_bnwnnb.png",
        note: "Best for fry, masala roast, and crispy sides."
    },
    {
        name: "Moralu Meen",
        category: "fish",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774423259/Moralu_meen_xprzvw.png",
        note: "Fresh coastal catch with balanced flavor."
    },
    {
        name: "Keluthi",
        category: "fish",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774425231/Keluthi_tvcxtx.png",
        note: "Rich and hearty, made for spicy gravies."
    },
    {
        name: "Vaala Meen",
        category: "fish",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774424446/vaala_meen_grne0s.png",
        note: "Lean texture, perfect for quick meals."
    },
    {
        name: "Thirukka",
        category: "fish",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774426086/thirukka_u9bepn.png",
        note: "A traditional pick for home-style curry."
    },
    {
        name: "Vaaval Meen",
        category: "fish",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774429282/vaaval_meen_uvwgra.png",
        note: "Clean taste and easy to cook in bulk."
    },
    {
        name: "Vanjaram Meen",
        category: "fish",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774449914/Vanjaram_z5msby.png",
        note: "Premium steaks for grill, fry, and tawa cuts."
    },
    {
        name: "Nagara",
        category: "fish",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774449921/Nagara_tfclhi.png",
        note: "Firm cuts for spicy masala and roasts."
    },
    {
        name: "Mavula Meen",
        category: "fish",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774449924/mavula_moegih.png",
        note: "Full-flavored fish with a soft finish."
    },
    {
        name: "Kili Meen",
        category: "fish",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774501625/kili_meen_qrfkrd.png",
        note: "Great for family curry bowls and meals."
    },
    {
        name: "Seraya",
        category: "fish",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774502440/seraya_s4hfsz.png",
        note: "Bright and clean, with everyday appeal."
    },
    {
        name: "Paala Meen",
        category: "fish",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774502710/paala_meen_tmbdcg.png",
        note: "Classic catch for comfort-style seafood meals."
    },
    {
        name: "Periya Raal (Prawn)",
        category: "prawns",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774455731/periya_Prawn_gsr7ry.png",
        note: "Large prawns with standout grill texture."
    },
    {
        name: "Chinna Raal (Prawn)",
        category: "prawns",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774500043/chinna_raal_aslvut.png",
        note: "Small prawns, perfect for masala and biryani."
    },
    {
        name: "Singi (Prawn)",
        category: "prawns",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774456012/singi_s4ncnd.png",
        note: "Juicy prawns for deep flavor and rich curry."
    },
    {
        name: "Nandu (Crab)",
        category: "crab",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774504484/nandu_xzcm8b.png",
        note: "Fresh crab, cleaned for bold home recipes."
    },
    {
        name: "Sembara (Crab)",
        category: "crab",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774503121/sembara_dmyqyp.png",
        note: "Meaty shellfish with robust flavor."
    },
    {
        name: "Olakka Nandu (Crab)",
        category: "crab",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774504176/chinna_nandu_bbr41h.png",
        note: "A spicy curry favorite with smaller shells."
    },
    {
        name: "Kanava (Squid)",
        category: "squid",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774455436/kanava_sxg2bk.png",
        note: "Tender squid rings for roast and fry."
    },
    {
        name: "Ottu Kanava (Squid)",
        category: "squid",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774454636/oottu_kanava_qkfi4b.png",
        note: "Thicker squid cuts for grill and stir fry."
    },
    {
        name: "Oosi Kanava (Squid)",
        category: "squid",
        image: "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774454375/oosi_kanava_toufm9.png",
        note: "Fast-cooking squid for snack plates and sides."
    }
];

const BITE_CATEGORY_COPY = {
    fish: "Daily catch, cleaned and ready for your kitchen.",
    prawns: "Juicy prawns for fry, curry, and biryani nights.",
    crab: "Bold shellfish picks with deep coastal flavor.",
    squid: "Tender squid cuts for grills, roasts, and fries."
};

function getCatalogPrice(index) {
    return 180 + (index * 20);
}

function getCatalogRating(index) {
    return (4.1 + ((index % 5) * 0.1)).toFixed(1);
}

function getCatalogEta(index) {
    const base = 18 + ((index % 4) * 4);
    return `${base}-${base + 6} mins`;
}

function getCatalogOffer(price) {
    const discount = price >= 320 ? Math.floor(price * 0.18) : Math.floor(price * 0.12);
    return `Save Rs.${discount}`;
}

function getCategoryCopy(category) {
    return BITE_CATEGORY_COPY[category] || "Fresh seafood selected for quick delivery.";
}

function findCatalogItemByName(name) {
    return BITE_CATALOG.find((item) => item.name === name) || null;
}
