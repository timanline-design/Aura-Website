import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Velvet Dew Serum',
    type: 'Hydration + Glow',
    price: 72,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXeR0qBjs9TqGMaGbEwYRaQMPZL8zwcQsrnj9_DldjsVpvipwfEmxusNLc41TrZh2KWZE99YeKOoMY32HfV8SUziRutvNJ-Kq7vwUfRQ5exHX2v4gy7TlzObooQtus8BhnDgm0w-Z-zlEReEbtxUkOsh_IlnhqbI5dXcmYayo2t4vgNimqpqdW-o4RTSaU5HPOtlqfWTIuKPWtyYui6s-sIYoPzHt6qcuu7WO8ScFbnEFafbnI7WrbGixNZPbBR1OaZl4sqcWEoN2Q',
    description: 'A luxurious hydration serum for a natural glow.',
    rating: 5,
    reviews: 48,
    skinType: ['Normal to Dry', 'Sensitive'],
    concern: ['Hydration', 'Brightness'],
    productType: 'Serums'
  },
  {
    id: '2',
    name: 'Cleansing Balm',
    type: 'Melt + Purify',
    price: 58,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_16CeS6PFejr1WxgffszidFVSjLQZ480hp59DlpCWNEHadjgXMv3GVlzWptsR1ZQdjWGHVv3OhbDkkW1EjK7fdhNvqxdvmKRsMpbugihY5zdurwcMcZfOWNEsRftaVMM19YQd2PIE70-Yp_spNnFzixyx2eE0ToUoMI4aTZnx_ESKVeVRK-Fm5YxJ8mctSsbYu7hqvmEe-k64LOy88M9nNYZI6FnFxNLeUuc9GZN9SAVzfmY8FHzbl4DMxaH8DIZwKzgH4TVJPi4J',
    description: 'Organic cleansing balm that melts into the skin.',
    rating: 4,
    reviews: 124,
    skinType: ['Combination', 'Normal to Dry'],
    concern: ['Hydration'],
    productType: 'Cleansers'
  },
  {
    id: '3',
    name: 'Luminous Oil',
    type: 'Repair + Radiance',
    price: 84,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9lQE8YJ1YycPnWZFlGk6lPwthrHpY1h1SsV0wofWhJHt3CL-rWdFdjKEWSNiBI4r8nb_O7nbXWTNCDqu4Z2muypFNqJcB6k1i46w8GvBBms0-9F7ClcJpNJSK7EQCo2TmlUWdkfkND9a-CNJ0sGca-w_mAEIeea6O8MwpA63wBgroimPQmNL1zw7H7-pnllr3_NePho4j1OQDjSB1-0uRjyhqpHEzXIoXQM1O0XaJo68rKZPNgzWWhsp4dsEQ1oGM1FjF4QKd-Pb3',
    description: 'High-potency botanical repair oil.',
    rating: 5,
    reviews: 92,
    skinType: ['Normal to Dry'],
    concern: ['Anti-Aging', 'Brightness'],
    productType: 'Serums'
  },
  {
    id: '4',
    name: 'Algae Mask',
    type: 'Detox + Mineralize',
    price: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLFzUo4bVhqpNgLCzT1Ms-LFojyVEX6SXJbmyqMW5Z1rURl7mATpfzsmWzkZA94kFfoPlhd7uwqD6ZDyq5D1JwJVJmcBGHi5xdAFdQqd6iwhR9w06wxPpoumubjRCMuDgnR9jyiJxDeM2ZTwsmO80OlP7obQe6B8AH56aoBcUakdaOD1-JeRv_KIF0wzg00lEiKMxBD8N5VNKN0uAIksle7qID51nkzn1q9XtbA-7q0gUJo2WJvLmi4hgFzvzzbuHL6v48zr0iI_FZ',
    description: 'Mineral-rich detox mask with sea kelp.',
    rating: 4,
    reviews: 31,
    skinType: ['Oily', 'Combination'],
    concern: ['Brightness', 'Hydration'],
    productType: 'Masks'
  },
  {
    id: '5',
    name: 'Rosehip Essence',
    type: 'Refresh + Tone',
    price: 42,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8KI3SNtr70LFRLfbcQI9WYXL8hafCQeNe85VMuE5DPGPiVbqkFUcijqUdpFpQd9la1zgnjQNfAg4btSVnofvotuE2yBneNZIdczM25V_YpCZ0yHmMYpIVuFcfIKHY-ZiOLDFqaMaMI5vsvnQRr2QMtinqo2BQEGoyOdijZ6cC3yek0uxxqS2P_v8R3C5ib9AEmpfjfdQ-1BMrUF-a8dXHNTzHC4tn3XQkSdkPWUgG02fCKq11NL6Jt9Ul309jKIeFgN7UYM4To3cq',
    description: 'Refreshing floral-based hydration toner.',
    rating: 5,
    reviews: 56,
    skinType: ['Normal to Dry', 'Sensitive'],
    concern: ['Hydration'],
    productType: 'Serums'
  },
  {
    id: '6',
    name: 'Whipped Butter',
    type: 'Deep Nourishment',
    price: 64,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV5TilDiGZEr9-gLuuMLLfT1INvQSvsADPw0Wwtx6YME-0ei5-Og8A-cavflKFk-iDL8LV3GJpf1IirY2AMnZ5NwBzB4ma24lx74frBOpCu8dLSfbW-vRQynQJAuiUW36MsWoKA9yYAULUuMy-aOR4KUfnIO2DVdNPwyeu3WFBLhLxsDTaWDFOb92SEFDCn_TRI9LwHgub3mk1x_367h6aCmMKgNybCoXgWGdHTU_fu5pr0du7bV7vIhhMaj39YGN9n9Uu4-kd_fXZ',
    description: 'Thick, buttery moisturizer with ceramide protection.',
    rating: 4,
    reviews: 88,
    skinType: ['Normal to Dry'],
    concern: ['Hydration'],
    productType: 'Moisturizers'
  }
];

export const BESTSELLERS = PRODUCTS.slice(0, 4);
