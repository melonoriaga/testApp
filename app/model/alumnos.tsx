const alumnos = [
    {
        id: 1,
        username: 'melonoriaga',
        gimansio: 'olympo',
        tiempo_entrenamiento: '30min',
        estado: 'entrenando',
        ejercicio: 'sentadillas',
        picture:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
        lastPost: {
            ejercicio: 'sentadillas',
            tiempo_entrenamiento: '30min',
            pie_picture: 'Entranado duro en casa',
            tevi: 343,
            start: 4.5,
            type: 'ejercicio',
            picture:
                'https://www.hola.com/imagenes/estar-bien/20201019177451/ejercicios-cardio-adelgazar-casa/0-879-238/cardio-m.jpg',
        },
        redes: [
            {
                id: 1,
                name: '@melonoriaga',
                link: 'https://www.instagram.com/mel_onoriaga/',
                type: 'instagram',
            },
            {
                id: 2,
                name: 'Mel Onoriaga',
                link: 'https://www.facebook.com/mel.onoriaga/',
                type: 'facebook',
            },
            {
                id: 3,
                name: 'Mel Onoriaga',
                link: 'https://twitter.com/MelOnoriaga',
                type: 'twitter',
            },
        ],
        post: [
            {
                id: 1,
                picture:
                    'https://www.hola.com/imagenes/estar-bien/20201019177451/ejercicios-cardio-adelgazar-casa/0-879-238/cardio-m.jpg',
                time: '16/11/2020',
                title: 'titulo',
                description: 'Entranado duro en casa Entranado duro en casa',
                tevi: 45,
                comment: 5,
            },
            {
                id: 2,
                picture:
                    'https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
                time: '16/11/2020',
                title: 'titulo',
                description: 'Entranado duro en casa Entranado duro en casa',
                tevi: 485,
                comment: 10,
            },
            {
                id: 3,
                picture:
                    'https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1253&q=80',
                time: '16/11/2020',
                title: 'titulo',
                description: 'Entranado duro en casa Entranado duro en casa',
                tevi: 4,
                comment: 54,
            },
            {
                id: 4,
                picture:
                    'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1245&q=80',
                time: '16/11/2020',
                title: 'titulo',
                description: 'Entranado duro en casa Entranado duro en casa',
                tevi: 59,
                comment: 5,
            },
            {
                id: 5,
                picture:
                    'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80',
                time: '16/11/2020',
                title: 'titulo',
                description: 'Entranado duro en casa Entranado duro en casa',
                tevi: 45,
                comment: 5,
            },
            {
                id: 6,
                picture:
                    'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3184&q=80',
                time: '16/11/2020',
                title: 'titulo',
                description: 'Entranado duro en casa Entranado duro en casa',
                tevi: 45,
                comment: 5,
            },
            {
                id: 7,
                picture:
                    'https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1234&q=80',
                time: '16/11/2020',
                title: 'titulo',
                description: 'Entranado duro en casa Entranado duro en casa',
                tevi: 45,
                comment: 5,
            },
            {
                id: 8,
                picture:
                    'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80',
                time: '16/11/2020',
                title: 'titulo',
                description: 'Entranado duro en casa Entranado duro en casa',
                tevi: 45,
                comment: 5,
            },
            {
                id: 9,
                picture:
                    'https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3184&q=80',
                time: '16/11/2020',
                title: 'titulo',
                description: 'Entranado duro en casa Entranado duro en casa',
                tevi: 45,
                comment: 5,
            },
            {
                id: 10,
                picture:
                    'https://images.unsplash.com/photo-1526401485004-46910ecc8e51?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80',
                time: '16/11/2020',
                title: 'titulo',
                description: 'Entranado duro en casa Entranado duro en casa',
                tevi: 45,
                comment: 5,
            },
            {
                id: 11,
                picture:
                    'https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
                time: '16/11/2020',
                title: 'titulo',
                description: 'Entranado duro en casa Entranado duro en casa',
                tevi: 45,
                comment: 5,
            },
        ],
    },
    {
        id: 2,
        username: 'devin_paredes',
        gimansio: 'Poly feldman',
        tiempo_entrenamiento: '40min',
        estado: 'entrenando',
        ejercicio: 'plancha',
        picture:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
        lastPost: {
            ejercicio: 'saltar',
            tiempo_entrenamiento: '30min',
            pie_picture: 'Hay que quemar el asado',
            tevi: 343,
            start: 4.5,
            type: 'ejercicio',
            picture:
                'https://as.com/deporteyvida/imagenes/2018/08/10/portada/1533890451_370383_1533890580_noticia_normal.jpg',
        },
    },
    {
        id: 3,
        username: 'dana_nodan',
        gimansio: 'Osfatum',
        tiempo_entrenamiento: '40min',
        estado: 'conectado',
        ejercicio: 'plancha',
        picture:
            'https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
        lastPost: {
            ejercicio: 'sentadillas',
            tiempo_entrenamiento: '10min',
            pie_picture: 'Hay que quemar el asado',
            tevi: 343,
            start: 4.5,
            type: 'ejercicio',
            picture:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/balance-exercise-royalty-free-image-1604567786.?crop=1.00xw:1.00xh;0,0&resize=640:*',
        },
    },
    {
        id: 4,
        username: 'dominicLujan',
        gimansio: 'kaisen',
        tiempo_entrenamiento: '20min',
        estado: 'entrenando',
        ejercicio: 'peso muerto',
        picture:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
        lastPost: {
            ejercicio: 'saltar',
            tiempo_entrenamiento: '30min',
            pie_picture: 'Hay que quemar el asado',
            tevi: 343,
            start: 4.5,
            type: 'ejercicio',
            picture:
                'https://as.com/deporteyvida/imagenes/2018/08/10/portada/1533890451_370383_1533890580_noticia_normal.jpg',
        },
    },
    {
        id: 5,
        username: 'mariaTorrez',
        gimansio: 'olympo',
        tiempo_entrenamiento: '10min',
        estado: 'entrenando',
        ejercicio: 'burpies',
        picture:
            'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        lastPost: {
            ejercicio: 'saltar',
            tiempo_entrenamiento: '30min',
            pie_picture: 'Hay que quemar el asado',
            tevi: 343,
            start: 4.5,
            type: 'ejercicio',
            picture:
                'https://as.com/deporteyvida/imagenes/2018/08/10/portada/1533890451_370383_1533890580_noticia_normal.jpg',
        },
    },
    {
        id: 6,
        username: 'jamesPerez',
        gimansio: 'olympo',
        tiempo_entrenamiento: '70min',
        estado: 'conectado',
        ejercicio: 'salto en la soga',
        picture:
            'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2231&q=80',
        lastPost: {
            ejercicio: 'saltar',
            tiempo_entrenamiento: '30min',
            pie_picture: 'Hay que quemar el asado',
            tevi: 343,
            start: 4.5,
            type: 'ejercicio',
            picture:
                'https://as.com/deporteyvida/imagenes/2018/08/10/portada/1533890451_370383_1533890580_noticia_normal.jpg',
        },
    },
    {
        id: 7,
        username: 'tamaraGonzales',
        gimansio: 'olympo',
        tiempo_entrenamiento: '70min',
        estado: 'entrenando',
        ejercicio: 'mancuernas',
        picture:
            'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
        lastPost: {
            ejercicio: 'saltar',
            tiempo_entrenamiento: '30min',
            pie_picture: 'Hay que quemar el asado',
            tevi: 343,
            start: 4.5,
            type: 'ejercicio',
            picture:
                'https://as.com/deporteyvida/imagenes/2018/08/10/portada/1533890451_370383_1533890580_noticia_normal.jpg',
        },
    },
    {
        id: 8,
        username: 'joel_apellido',
        gimansio: 'olympo',
        tiempo_entrenamiento: '70min',
        ejercicio: 'maquinas',
        estado: '',
        picture:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        lastPost: {
            ejercicio: 'saltar',
            tiempo_entrenamiento: '30min',
            pie_picture: 'Hay que quemar el asado',
            tevi: 343,
            start: 4.5,
            type: 'ejercicio',
            picture:
                'https://as.com/deporteyvida/imagenes/2018/08/10/portada/1533890451_370383_1533890580_noticia_normal.jpg',
        },
    },
    {
        id: 9,
        username: 'ariel_sirenita',
        gimansio: 'gym del barrio',
        tiempo_entrenamiento: '40min',
        estado: 'entrenando',
        ejercicio: 'cinta de correr',
        picture:
            'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
        lastPost: {
            ejercicio: 'saltar',
            tiempo_entrenamiento: '30min',
            pie_picture: 'Hay que quemar el asado',
            tevi: 343,
            start: 4.5,
            type: 'ejercicio',
            picture:
                'https://as.com/deporteyvida/imagenes/2018/08/10/portada/1533890451_370383_1533890580_noticia_normal.jpg',
        },
    },
    {
        id: 10,
        username: 'juliana_manchas',
        gimansio: 'gym del barrio',
        tiempo_entrenamiento: '20min',
        estado: 'entrenando',
        ejercicio: 'bici fija',
        picture:
            'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=933&q=80',
        lastPost: {
            ejercicio: 'saltar',
            tiempo_entrenamiento: '30min',
            pie_picture: 'Hay que quemar el asado',
            tevi: 343,
            start: 4.5,
            type: 'ejercicio',
            picture:
                'https://as.com/deporteyvida/imagenes/2018/08/10/portada/1533890451_370383_1533890580_noticia_normal.jpg',
        },
    },
    {
        id: 11,
        username: 'marta_sanchez',
        gimansio: 'gym del barrio',
        tiempo_entrenamiento: '20min',
        estado: '',
        ejercicio: 'caminar',
        picture:
            'https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2349&q=80',
        lastPost: {
            ejercicio: 'saltar',
            tiempo_entrenamiento: '30min',
            pie_picture: 'Hay que quemar el asado',
            tevi: 343,
            start: 4.5,
            type: 'ejercicio',
            picture:
                'https://as.com/deporteyvida/imagenes/2018/08/10/portada/1533890451_370383_1533890580_noticia_normal.jpg',
        },
    },
    {
        id: 13,
        username: 'mateo_dominguez',
        gimansio: 'gym del barrio',
        tiempo_entrenamiento: '20min',
        estado: 'entrenando',
        ejercicio: 'caminar',
        picture:
            'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=896&q=80',
        lastPost: {
            ejercicio: 'saltar',
            tiempo_entrenamiento: '30min',
            pie_picture: 'Hay que quemar el asado',
            tevi: 343,
            start: 4.5,
            type: 'ejercicio',
            picture:
                'https://as.com/deporteyvida/imagenes/2018/08/10/portada/1533890451_370383_1533890580_noticia_normal.jpg',
        },
    },
    {
        id: 14,
        username: 'refaelQue',
        gimansio: 'gym del barrio',
        tiempo_entrenamiento: '20min',
        estado: 'entrenando',
        ejercicio: 'caminar',
        picture:
            'https://images.unsplash.com/photo-1504199367641-aba8151af406?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
        lastPost: {
            ejercicio: 'saltar',
            tiempo_entrenamiento: '30min',
            pie_picture: 'Hay que quemar el asado',
            tevi: 343,
            start: 4.5,
            type: 'ejercicio',
            picture:
                'https://as.com/deporteyvida/imagenes/2018/08/10/portada/1533890451_370383_1533890580_noticia_normal.jpg',
        },
    },
    {
        id: 15,
        username: 'janeSinapellido',
        gimansio: 'gym del barrio',
        tiempo_entrenamiento: '20min',
        estado: '',
        ejercicio: 'caminar',
        picture:
            'https://images.unsplash.com/photo-1545594262-ded8a9096085?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
        lastPost: {
            ejercicio: 'saltar',
            tiempo_entrenamiento: '30min',
            pie_picture: 'Hay que quemar el asado',
            tevi: 343,
            start: 4.5,
            type: 'ejercicio',
            picture:
                'https://as.com/deporteyvida/imagenes/2018/08/10/portada/1533890451_370383_1533890580_noticia_normal.jpg',
        },
    },
    {
        id: 16,
        username: 'gunterPug',
        gimansio: 'gym del barrio',
        tiempo_entrenamiento: '20min',
        estado: 'entrenando',
        ejercicio: 'caminar',
        picture:
            'https://images.unsplash.com/photo-1549913772-820279f909b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2247&q=80',
        lastPost: {
            ejercicio: 'saltar',
            tiempo_entrenamiento: '30min',
            pie_picture: 'Hay que quemar el asado',
            tevi: 343,
            start: 4.5,
            type: 'ejercicio',
            picture:
                'https://as.com/deporteyvida/imagenes/2018/08/10/portada/1533890451_370383_1533890580_noticia_normal.jpg',
        },
    },
]

export default alumnos
