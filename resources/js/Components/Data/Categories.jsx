import IMG1 from '../../../../public/img/hair-styling.jpg';
import IMG2 from '../../../../public/img/hair-color-highlights.jpg';
import IMG3 from '../../../../public/img/hair-treatments.jpg';
import IMG4 from '../../../../public/img/manicure-acrylic-nails.jpg';
import IMG5 from '../../../../public/img/pedicure-foot-care.jpg';
import IMG6 from '../../../../public/img/body-waxing.jpg';
import IMG7 from '../../../../public/img/facials-wellness.jpg';


export const categories = [
    {
        id: 1,
        name: {
            es: "Cabello y Peinados",
            en: "Hair & Styling"
        },
        icon: 'fa-solid fa-scissors',
        img: IMG1,
        imgAlt: 'Professional hairstylist cutting and styling beautiful hair at Heavenly Hair Salon',
        services: [
            { es: "Lavado y peinado estándar", en: "Standard Wash & Style", price: 35 },
            { es: "Lavado y peinado con extensiones", en: "Wash & Style with Extensions", price: 45 },
            { es: "Lavado y peinado con secadora", en: "Wash & Style with Blower", price: 35 },
            { es: "Solo secado", en: "Blow Dry Only", price: 25 },
            { es: "Corte para mujer", en: "Women's Haircut", price: 30 },
            { es: "Corte de flequillo", en: "Bangs Trim", price: 10 }
        ]
    },
    {
        id: 2,
        name: {
            es: "Coloración y reflejos",
            en: "Hair Color & Highlights"
        },
        icon: 'fa-solid fa-palette',
        img: IMG2,
        imgAlt: 'Professional hair coloring and highlights treatment at Heavenly Hair Salon',
        services: [
            { es: "Retoque de color permanente", en: "Permanent Root Touch-Up", price: 45 },
            { es: "Color semipermanente", en: "Semi-Permanent Color", price: 45 },
            { es: "Baño de color", en: "Gloss / Color Bath", price: 30 },
            { es: "Corrección de color", en: "Color Correction", price: 150 },
            { es: "Matizador", en: "Toner", price: 35 },
            { es: "Reflejos con papel aluminio - Media cabeza", en: "Foil Highlights - Half Head", price: 90 },
            { es: "Reflejos con papel aluminio - Cabeza completa", en: "Foil Highlights - Full Head", price: 150 },
            { es: "Ondulación permanente", en: "Permanent Wave", price: 70 },
            { es: "Alisado permanente", en: "Permanent Straightening", price: 120 }
        ]
    },
    {
        id: 3,
        name: {
            es: "Tratamientos capilares",
            en: "Hair Treatments"
        },
        icon: 'fa-solid fa-pump-soap',
        img: IMG3,
        imgAlt: 'Luxury hair care and deep conditioning treatment at Heavenly Hair Salon',
        services: [
            { es: "Acondicionamiento profundo - Corto", en: "Deep Conditioning - Short", price: 15 },
            { es: "Acondicionamiento profundo - Medio", en: "Deep Conditioning - Medium", price: 20 },
            { es: "Acondicionamiento profundo - Largo", en: "Deep Conditioning - Long", price: 30 },
            { es: "Tratamiento hidratante / reparador", en: "Hydrating / Repairing Treatment", price: 30 },
            { es: "Tratamiento de keratina express", en: "Express Keratin Treatment", price: 65 }
        ]
    },
    {
        id: 4,
        name: {
            es: "Manicura y uñas acrílicas",
            en: "Manicure & Acrylic Nails"
        },
        icon: 'fa-solid fa-hand-sparkles',
        img: IMG4,
        imgAlt: 'Professional manicure and acrylic nail services at Heavenly Hair Salon',
        services: [
            { es: "Manicura regular", en: "Regular Manicure", price: 30 },
            { es: "Manicura en gel", en: "Gel Manicure", price: 40 },
            { es: "Dar forma a las uñas", en: "Nail Shaping", price: 10 },
            { es: "Agregar francés", en: "Add French Finish", price: 8 },
            { es: "Manicura para niñas", en: "Kids Manicure", price: 30 },
            { es: "Capa de acrílico", en: "Acrylic Overlay", price: 40 },
            { es: "Set completo con esmalte regular", en: "Full Set with Regular Polish", price: 35 },
            { es: "Set completo con esmalte en gel", en: "Full Set with Gel Polish", price: 45 },
            { es: "Rosa y blanco", en: "Pink & White", price: 55 },
            { es: "Set completo ombré", en: "Full Set Ombré", price: 55 },
            { es: "Set completo francés", en: "Full Set French", price: 50 },
            { es: "Gel duro", en: "Hard Gel", price: 45 },
            { es: "Uñas Apres", en: "Apres Nails", price: 45 },
            { es: "Relleno con gel", en: "Gel Fill", price: 35 },
            { es: "Relleno ombré", en: "Ombré Fill", price: 40 },
            { es: "Relleno francés", en: "French Fill", price: 40 }
        ]
    },
    {
        id: 5,
        name: {
            es: "Pedicura",
            en: "Pedicure"
        },
        icon: 'fa-solid fa-shoe-prints',
        img: IMG5,
        imgAlt: 'Relaxing pedicure and professional foot care services at Heavenly Hair Salon',
        services: [
            { es: "Pedicura estándar", en: "Standard Pedicure", price: 30 },
            { es: "Pedicura con gel", en: "Gel Pedicure", price: 40 },
            { es: "Acrílico en uñas de los pies", en: "Acrylic Toes", price: 20 },
            { es: "Retiro de gel", en: "Gel Removal", price: 7 },
            { es: "Acabado francés", en: "French Finish", price: 10 },
            { es: "Forma especial", en: "Special Shape", price: 5 },
            { es: "Largo de uñas", en: "Nail Length", price: [5, 10, 15] },
            { es: "Polvo de color", en: "Color Powder", price: 5 },
            { es: "Francés / Francés profundo", en: "French / Deep French", price: [5, 15] },
            { es: "Diseño", en: "Nail Design", price: 10 },
            { es: "Retiro de acrílico", en: "Acrylic Removal", price: 15 }
        ]
    },
    {
        id: 6,
        name: {
            es: "Depilación Corporal",
            en: "Body Waxing"
        },
        icon: 'fa-solid fa-spa',
        img: IMG6,
        imgAlt: 'Professional body waxing and hair removal treatment at Heavenly Hair Salon',
        services: [
            { es: "Axilas", en: "Underarms", price: 20 },
            { es: "Medios brazos", en: "Half Arms", price: 30 },
            { es: "Brazos completos", en: "Full Arms", price: 45 },
            { es: "Medias piernas", en: "Half Legs", price: 40 },
            { es: "Piernas completas", en: "Full Legs", price: 70 },
            { es: "Espalda completa", en: "Full Back", price: 55 },
            { es: "Línea de bikini", en: "Bikini Line", price: 35 }
        ]
    },
    {
        id: 7,
        name: {
            es: "Faciales y Bienestar",
            en: "Facial & Wellness"
        },
        icon: 'fa-solid fa-leaf',
        img: IMG7,
        imgAlt: 'Relaxing facial skincare and wellness treatment at Heavenly Hair Salon',
        services: [
            { es: "Limpieza facial básica", en: "Basic Facial Cleansing", price: 50, duration: 45 },
            { es: "Hidratación facial", en: "Hydrating Facial", price: 60, duration: 50 },
            { es: "Drenaje postoperatorio", en: "Post-Operative Lymphatic Drainage", price: 80, duration: "45-50" },
            { es: "Drenaje linfático de bienestar", en: "Wellness Lymphatic Drainage", price: 70, duration: 45 },
            { es: "Masaje relajante", en: "Relaxing Massage", price: 65, duration: 45 }
        ]
    }
];
