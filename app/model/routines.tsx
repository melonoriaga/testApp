const routines = [
    {
        id: 1,
        name: 'Funcional completa',
        difficulty: 'Intenso',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quasi soluta voluptatem, totam officiis iure maiores laborum, eum aspernatur obcaecati praesentium error cum labore sit mollitia accusamus nulla repudiandae sapiente?',
        time: '60min',
        image:
            'https://images.unsplash.com/photo-1550259979-ed79b48d2a30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1304&q=80',
        routines: [
            {
                id: 1,
                title: 'Lorem ipsum dolor, sit',
                duration: '10min',
                description:
                    'saltar la soga durante el tiempo determinado lorem ipsum dolor sit amet, consectetur saltar la soga durante el tiempo determinado lorem ipsum dolor sit amet, consectetur',
                image:
                    'https://www.parati.com.ar/wp-content/uploads/2020/07/SALTAR-SOGA.jpg',
                series: 1,
                repetitions: '2 minutos',
            },
            {
                id: 2,
                title: 'brazos',
                duration: '10min',
                description:
                    'Mover los brazos en alguna maquina saltar la soga durante el tiempo determinado lorem ipsum dolor sit amet, consectetur',
                image:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mancuernas-1559227736.jpg?resize=480:*',
                series: 3,
                repetitions: '10',
            },
            {
                id: 3,
                title: 'abdominales',
                duration: '10min',
                description: 'hacer algun tipo de ejercico abdominal',
                image:
                    'https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/07/24/150724095542_deportes_abdominales_fotos_624x351_thinkstock.jpg',
                series: 4,
                repetitions: '50',
            },
            {
                id: 4,
                title: 'trasero',
                duration: '10min',
                description:
                    'Mover los bote en alguna maquina saltar la soga durante el tiempo determinado lorem ipsum dolor sit amet, consectetur saltar la soga durante el tiempo determinado lorem ipsum dolor sit amet, consectetur',
                image:
                    'https://www.ictiva.com/blog/wp-content/uploads/2017/03/4-ejercicios-de-sentadillas-para-definir-los-gluteos.jpg',
                series: 3,
                repetitions: '50',
            },
            {
                id: 5,
                title: 'estirar',
                duration: '10min',
                description:
                    'estirar todos los musculos que usaste para los ejercicios de hoy saltar la soga durante el tiempo determinado lorem ipsum dolor sit amet, consectetur saltar la soga durante el tiempo determinado lorem ipsum dolor sit amet, consectetur',
                image:
                    'https://yoelijocuidarme.es/wp-content/uploads/2020/03/estirar-articulaciones-620x420.jpg',
                series: 1,
                repetitions: '5 minutos',
            },
        ],
    },
    {
        id: 2,
        name: 'Lorem ipsum dolor, sit',
        difficulty: 'Medio',
        description:
            'Rutina con cardio y un poco de musculacion, pero principalmente ejercicion aerobicos',
        time: '100min',
        routines: [
            {
                id: 1,
                title: 'saltar la soga',
                duration: '10min',
                description: 'saltar la soga durante el tiempo determinado',
                image:
                    'https://www.parati.com.ar/wp-content/uploads/2020/07/SALTAR-SOGA.jpg',
            },
            {
                id: 2,
                title: 'brazos',
                duration: '10min',
                description: 'Mover los brazos en alguna maquina',
                image:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mancuernas-1559227736.jpg?resize=480:*',
            },
            {
                id: 3,
                title: 'abdominales',
                duration: '10min',
                description: 'hacer algun tipo de ejercico abdominal',
                image:
                    'https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/07/24/150724095542_deportes_abdominales_fotos_624x351_thinkstock.jpg',
            },
            {
                id: 4,
                title: 'trasero',
                duration: '10min',
                description: 'Mover los bote en alguna maquina',
                image:
                    'https://www.ictiva.com/blog/wp-content/uploads/2017/03/4-ejercicios-de-sentadillas-para-definir-los-gluteos.jpg',
            },
            {
                id: 5,
                title: 'estirar',
                duration: '10min',
                description:
                    'estirar todos los musculos que usaste para los ejercicios de hoy',
                image:
                    'https://yoelijocuidarme.es/wp-content/uploads/2020/03/estirar-articulaciones-620x420.jpg',
            },
        ],
        image:
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUREhIVFRUVFRUVGBcVFRUXFxcYFRUXFxcXFxUYHSggGBolGxUVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGislHSUtLS0tKy0uKy0tLS0tLS0tLTctLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKIBNgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAQIDBQQGBwj/xAA+EAABAwEFBQcCBQIDCQAAAAABAAIRAwQSITFRBUFhcfATgZGhscHhItEGFDJS8UKSFSOCByRjcpOio7LC/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIhEBAQACAQUBAQEBAQAAAAAAAAECERIDEyFRYTFBMiIE/9oADAMBAAIRAxEAPwD6a0KxoSAVgC6OYAUwEAKQCigBSAQApQopJwmApQm1IBOEQmoAITRCihCcJoFCaaFFCEJoaKEJoRQiE0ICEIVNa2U2GH1GNJ3Oc0HwJQXISaQRIMg5EZKUIghEJoQJNCEAhNCBITQgSUKSSBQlClCEEIQpQhF2y2tVgCQCmAujmQCmAgBMKGgApAIAUoUUoTRCaKEBOE1AQhNAUUIThCGiTQiEUITQgEIhOENknCaERl7ftRp0oaYc83Qd4wkkcV8ztuz33zBvbyTh/JX0D8UvIuCcCHGI3iMZ5FeWqPvAxu3rh1ctV36eEsZ2ztq1mNvNq1AaZbDbxLLpJDpblmW+JX0vYu0RaKTagwJwcNHDMe/evnGztnv7K01XCGdmRJ3uNRhaBxkLc/2e2o3305wLb3eDHumOflnLHw90mkmu7kEIQgEIQgEIQgEIQgEIQgEITQZoCm0JAKbQtMiFKE0SooThMBNAgE00KKSaE0ChNCcIpJoQgEIThE2ScJoQCEIQCEIQcW1NmtrtDXFwgyC2J8wV47ali/LOLJkZg7yDlPW5e/XgNv2kVKzsZEkDkMArh0sc8t1eeWM1GZbLZUfQNFp+kOvkRieE+aPwlWLKzXC9GIN2JxwydgdyTGwVdsqk2naBei4fqE4DEHCTljPkp/6+nMdZ4tdC7uq+lUQ6PqieGA4YKahSdIB9581NGAhCEAhCEAhCEAhCEAhCEAmkmgzQ49b+I4KwOPD78BxVbaY0HOPJPsxoOGH6TqqiwOPD7c1jbfbeq2Uf8Wd84RitcMGg5a8Vh7aP+92NsDF1QzrDQY7kHoWuPW/knJ4dblAMGg4GP08FK6NO73UVKT1u5ovdaqN0afKd0cOfsgc9eyc9aKN0afHFO6NPlFO917ovcetEro+fZOOtEQXutE738e6I61RH8+yAvcetE73H4RHWiI61QF/j88UXuPWicdeyECvcfhF7j8p9c0dckCvcfTwTvcU1y7RtYo0zUIJiPEmMeCfiobXtXZ0XuBxiBzdh7z3L5xaHGZC9RtPbHbUywsu4gyDOXCF5+pTaMjJWun1cP8781b08p5VB04r0P4XuOfde0GWm7IB0kY6geSwQFufhuyudVa6IDfqM6D+V16mWNnGszGzy9dRptYIaIGgyHJWyhC4KJ4olNCIUoTQgEk0IBCEIBCEIBCaEHAD/AB7pjrikOuPBSHXDgqGOj7LB2tjbrGMsKx5fQt8dcOKwLdjtGzDSlVPOQQoleh6jXin1z4JdT7J9ckUR1on1HujrnxR18Io65px1okOuCfXPigOo90+uaOp9kdckB1yR1Hun1zR1PsgOuaOuSOuSOuaAQmhAdckdc0dc0dckAqLdZRVY6mcLw3btDhmuhCDwj61GlULQwvukgdo7DDVoA8Cs60UjJP6ZxgCBjjgNwXvf8Ho9o6qWAucZxxAOoGXHFeb/ABTTis4xm1p8o9lOjheV26Z5yyaY9Ng3r1f4TMB4jD6T34iOtF5RhlauyLX2dQHdkeIK9OWGo5ctvbIQDp/Ka84EIQgEIQgEIQgEIQgEIQgEIQg4wOtFB1oYMCRmBHE5FfM6/wDtErHBjWDE4kEyMcxuwWFV/EFdzy81DJ0O7ksXK/w3H22nUByM+/JeT25bCy3tc0407K4j+/Ec4XiLP+JbQ0th/wCnEd+H3WpYNpuq16lZ8T+XgwTj/msbPmpc7q7h+16/Z/4hdVqFkC7egFoJyxJJO4rdsdqFRt4ZSRzjBeQqWpzaDCxoa1sgwYL8pyxmZXVs+tUvMbduhmhwDTEA8cCpM2tPXdfCOuSGmRO7rFPrmuqDrmhCaISfXNCOuSAR18poQLrmn1yQOuCEUdfKEJoF1yR1zT65oQCEIJQC8X+NrUDUaxv6mD6j/wA0EN7s/wDUvX2quKbHVDk1pPgF8stVoL3Oe4yXEk8ypbr8XGbSbaHDcF0Ua7ic/BcAeu7ZjHOqNDRLiYHCd/uud6mV/rrMY+lWNkU2DRrfQK5Ra2AANwjwUl1cAhCEAhCQKBoSLgM1Wy0A8FLlIuqtQlfEwmqgQhCAQhNB+ZWv614q0O69lTZ6l05TIIkjcRBHPFTaVhF96Y6hbWxnxTrHeKbR/wCdhjngsJgPXqtzZUijWjSmBzNST6KZflWTy9Jsu3hmJZOENBODTqRvW4/aQaWOdjeaHREAuOg3jj9l4+x1RdN4knCZ34a8F3We1PaCwAEOA+pwktE3oaT+lebC68OtfQdh7RNRhvCC3zC0aVVrsj9xzC8hsS3uDwSRdf8ASJwAjK91vXpK9paGPdIyg/UBPIr0YZ+GLHehcWxXTSbiZxzjKTouartcNtApf0nDiHSt8vCaa3QTXK62sDnNcQLsT3qwWgX7m+7IV3DS5JzgBJwHos7adrAgCoG7+8EZnRUWnaV9hYLpcWz9Jkcjos3OLpsg9aprC2NaocKZBBdMDcABMrSp2oGq6noAc95VmWyx1oUTUExInScY5KmvbqbP1PaOE4+Cu4joXJb7TcGBHEbzyXPU25RDS4GY3ZE8lgWvaV94OW4TuHGM1jLPx4WRu2baQn9UiJM7uCtr2kOiMjuyIXl6toaTI8OM5+6l2p1xjXNc7nfxuYxofiy23bKWzi54aeIEuPm0LwRetP8AEdpwY3dJMeAWF2i3vcWeHVO9es/ArQajnHNrCfEgehK8dZsV6v8AD7uza57TmA3DiZ/+ViZarrcd4vcC1Mwxz1wRaK7WjEwvMutDiQcJEZcFdWthfE7svlXu1w4PSMeCJGRXHareBFyDO/RZtC2PAgYjeDx0UA4jHCTgl6ls8LMNVp2W2EmHEZZ5LobaGzmsVp39c1a0/KzOpYtwlatRwJjA4armBVDVa0qXLayadNJy6L4XG1ymHLeOembjt0hykucOUg9dJmxcVyFXfQryica/M7DgNFa2fuotoHdy8cl1Wayk4DDn6LNsjMiVM3sAtjZjSKdadxogj/qEehVDWtZF0guJgxjhC6tmOJp1jIB7SlBOgZVlct7ldJ4rtptOH078Feyt9UThuyzWa61C6GzO/vU7PXDfdZww/tXLJ6anbGhhGcxf4EDAtOada1l4iZj9OWXHivPOteEAcvlVttPn6rfFnk9t+GdqNYS177rZkTvO8cMVbUslF1V1X8wwQb5ukE57uOC8K+0HeotrfHytaOT6Fbq1OpL6b8WifqiXAQjZ226AdEQ39zjLr32XgWWo6nj8K/tT3+yaOT0O2NpB9VzmgAZDAZa80WrajeypXCLwnIQcsCV59tbLQZYZrqpWhv8AU3PPgnE5Otm1HA3mmCJk75UPzjr16TezmesUg4bgOGHqneHdy36Jo2PzZOJJOOZOM81J1oJ9/hJpx3Tvw3IqOnEZboGCml2Qqn7fKleEHHmqT/PwmJnju5KKvBM8fZW0z4blzh3h7qxjj37+SlWOXatC/B0wPsuGz7PBOK2i28I3HJYtCpUkg/TBgk4ZeqvL/l0wm646DSPTwWzs3aRYwsDQcSZx3gCPLzVZ2V2n1seMTBkYSACTI5hFj2c5wP1tF1104E4rOOS5+mrT2lhi0YaE/Kl/izf2Hjj8Lnp7KORqHjDQPUlXN2Oz9zzOWLfspuemfDss1uviWiDiBOXeo2C0kvcHmT18KDbGKYljj9M/qiJPIcVwWZzmPMj6hiZ3jescvOnSY/8ANseob5+ysafhcbbS26DOfwUWR2JcZxS5RjTQB+VYHLk7YZKwOGqu4jpD0765w5IPTY7A9Ta9cQqKy+rs06r6FyiomrtNPhNnpkP1GPKI39yde1XnG7lMDKY3ZclGzUnMmHNxBG/fI00Sp2ZwyLD4/ZeidO7289zhNeQQdFo0Xf5FSN9anhyZUw81yOsz3ZkcPFdTKEUbki9fnfBAbAPOSrwqcorpniFeXFVtsrpmQRv8OSmaDozbnhg5ONOUAqHj4KxhVZs9Q/1Dzn0U6Vme3GWnhJx8k45ejlFufWaAFW2g7OWjxUPyb8fqGPE/ZOOXo5R1tMbvJdDJIxHfC4WWeoMQR/cpihW14/qbHqpZl6WWO64etymwR1muJ9OqYB9QDzzUeyqDTT9Qx81PPpdtdjxr8cArmv5Tp7rBFBx3+amKTtfVNZek3G4QfmM02gncfss6k7ACSDPd4Lvs9taDifUkrN5eq3LPbpax2mWQjNSuDeOZxEcFyfnBmCZjQ4H7JC1wZEngcZ5qTlf4bnt2EcO7gj011XI61DXyU2WocY5Jcb6XlPbsYfHfw5LD23ZoeKmN12B5jf3j0WqLW3oZqFrqMqU3MmZGGGR3Y8wsyZem5lEtg1mlj2DcWu4wZBP/AKq2xPDTVJ3PmOH1YwsPYFmqMeSXAXmubGckj6ZnL6g09yn+ZJa7D6nEE44ZHfzKlwt3xatm916JlsYcjJw45ruvgCT38I0XlbNVgYOu5ZDPiStGrtDC60YRBnz5rncOp6OWLQrWpj2G6ZjrFcNtkgQIgSO+Fn0WmZJ+ea7HVZy881O3lv8AFxzkXMOWOEDkDCvFpO8+a4mg5nf5q1mG/LL7Eb04Zel5R3Ua+h710Ctv8ccjwWezy004hdDXaHHKdVOOXpdx2ttBniuhtWVmtMb1PtlOOSeGiDon2kLgFdWfmAtapp19ohcXbIV1V0+Qtc7RTa928HyWhTcrmv4r6Hc+PD2vrOY46eisDzp6fdabSrA7ind+J2frLFR3UfdSvnT0+62Gu4lWh2qd34vY+sVr3aeSkaj/ANp8FtXzqp3+Kd34dj6wu0d+096G1jot68phvBO98Ox9YHbHQ+CO1OhXoLo08gn2Y0HgE7s9J2L7YIrO0PgmKp0PgVuimNB4BS7MaDwCndnpexfbCFY6eRTFU/tK3OzGg/tCBTb+0f2p3Z6XsX2xBUOh8FIVDofArYNzeG+AR9H7f+z4hO78Oz9Y986HwUhVOh8FsCmP2DvAHpKZo8GD/RP2U7k9L2r7ZDKp0KmKh0PgtR1nYB9TgP8AS0DzC5qtek3KHHiDHokz3+RLhr9rnbU4eXrooG2sEwbzo/S3Hxjci0jtRdEAT/Sw/ZQZsQnGAON2PRTL66dPUu9bKz7WDSO0YRoRg7mWmPFWPf2hL2MgEkEaHOe8H1Vll/D4aZLh/YD5lbVks7WNiSebR6LnzmP46ZS5/rCbRf8At9Fc2m/Rb4azQf2hTDW9NCd5J02E1jtFNrHLebd6aFMEaeQWL1V4MMNdopgO09FuN5K1ruA8As9xrgwgHLopE9FbDHcB4BWMdwHgFLmvFlubIw9VSJ6K9BSdwHgFYx/LwCxyi+Xn2yp3XaL0TKx6hS7c9/cnKL5ebDXaFC9MLUdUJuG6+IsK6GnJCF7HlXNyUwcU0KNLgclaTgkhRU2qyn7pIQWsT0QhFSaeu9MHJCEDbkVOl7eyaFBz2l5AMEhc9h+r9WPPH1QhdJ/ljL/TRpgAwMFNiELi6jcFVanENww/hCFZ+xMvxiscS7Ek88Vu2ak0CQ0ZaBCF26rj0v1cxOmhC81eiJNzTp5oQoqxmfcVZv70IWVWb1N2aSFKLH+ymE0LKjcpsOCEKK6KWStORQhQSYpMSQgtaEIQqj//2Q==',
    },
    {
        id: 3,
        name: 'Lorem ipsum dolor, sit',
        difficulty: 'Principiante',
        description:
            'Rutina con cardio y un poco de musculacion, pero principalmente ejercicion aerobicos',
        time: '90min',
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6pwCh0oE4Ojcx9a7uoudbfANmLs_fJz6o2P-LRXA7TZg74e9Wt8TI-EtN3o89BFWeb4I&usqp=CAU',
        routines: [
            {
                id: 1,
                title: 'saltar la soga',
                duration: '10min',
                description: 'saltar la soga durante el tiempo determinado',
                image:
                    'https://www.parati.com.ar/wp-content/uploads/2020/07/SALTAR-SOGA.jpg',
            },
            {
                id: 2,
                title: 'brazos',
                duration: '10min',
                description: 'Mover los brazos en alguna maquina',
                image:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mancuernas-1559227736.jpg?resize=480:*',
            },
            {
                id: 3,
                title: 'abdominales',
                duration: '10min',
                description: 'hacer algun tipo de ejercico abdominal',
                image:
                    'https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/07/24/150724095542_deportes_abdominales_fotos_624x351_thinkstock.jpg',
            },
            {
                id: 4,
                title: 'trasero',
                duration: '10min',
                description: 'Mover los bote en alguna maquina',
                image:
                    'https://www.ictiva.com/blog/wp-content/uploads/2017/03/4-ejercicios-de-sentadillas-para-definir-los-gluteos.jpg',
            },
            {
                id: 5,
                title: 'estirar',
                duration: '10min',
                description:
                    'estirar todos los musculos que usaste para los ejercicios de hoy',
                image:
                    'https://yoelijocuidarme.es/wp-content/uploads/2020/03/estirar-articulaciones-620x420.jpg',
            },
        ],
    },
    {
        id: 4,
        name: 'Lorem ipsum dolor, sit',
        difficulty: 'Super intenso',
        description:
            'Rutina con cardio y un poco de musculacion, pero principalmente ejercicion aerobicos',
        time: '50min',
        image:
            'https://www.savalnet.cl/medios/mm/reportajes/2020/231060rg01.jpg',
        routines: [
            {
                id: 1,
                title: 'saltar la soga',
                duration: '10min',
                description: 'saltar la soga durante el tiempo determinado',
                image:
                    'https://www.parati.com.ar/wp-content/uploads/2020/07/SALTAR-SOGA.jpg',
            },
            {
                id: 2,
                title: 'brazos',
                duration: '10min',
                description: 'Mover los brazos en alguna maquina',
                image:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mancuernas-1559227736.jpg?resize=480:*',
            },
            {
                id: 3,
                title: 'abdominales',
                duration: '10min',
                description: 'hacer algun tipo de ejercico abdominal',
                image:
                    'https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/07/24/150724095542_deportes_abdominales_fotos_624x351_thinkstock.jpg',
            },
            {
                id: 4,
                title: 'trasero',
                duration: '10min',
                description: 'Mover los bote en alguna maquina',
                image:
                    'https://www.ictiva.com/blog/wp-content/uploads/2017/03/4-ejercicios-de-sentadillas-para-definir-los-gluteos.jpg',
            },
            {
                id: 5,
                title: 'estirar',
                duration: '10min',
                description:
                    'estirar todos los musculos que usaste para los ejercicios de hoy',
                image:
                    'https://yoelijocuidarme.es/wp-content/uploads/2020/03/estirar-articulaciones-620x420.jpg',
            },
        ],
    },
    {
        id: 5,
        name: 'Operacion popeye',
        difficulty: 'Intenso',
        description:
            'Rutina con cardio y un poco de musculacion, pero principalmente ejercicion aerobicos',
        time: '60min',
        routines: [
            {
                id: 1,
                title: 'saltar la soga',
                duration: '10min',
                description: 'saltar la soga durante el tiempo determinado',
                image:
                    'https://www.parati.com.ar/wp-content/uploads/2020/07/SALTAR-SOGA.jpg',
            },
            {
                id: 2,
                title: 'brazos',
                duration: '10min',
                description: 'Mover los brazos en alguna maquina',
                image:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mancuernas-1559227736.jpg?resize=480:*',
            },
            {
                id: 3,
                title: 'abdominales',
                duration: '10min',
                description: 'hacer algun tipo de ejercico abdominal',
                image:
                    'https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/07/24/150724095542_deportes_abdominales_fotos_624x351_thinkstock.jpg',
            },
            {
                id: 4,
                title: 'trasero',
                duration: '10min',
                description: 'Mover los bote en alguna maquina',
                image:
                    'https://www.ictiva.com/blog/wp-content/uploads/2017/03/4-ejercicios-de-sentadillas-para-definir-los-gluteos.jpg',
            },
            {
                id: 5,
                title: 'estirar',
                duration: '10min',
                description:
                    'estirar todos los musculos que usaste para los ejercicios de hoy',
                image:
                    'https://yoelijocuidarme.es/wp-content/uploads/2020/03/estirar-articulaciones-620x420.jpg',
            },
        ],
        image:
            'https://1.bp.blogspot.com/-Iq0IANxP9AQ/Xnvc47TxoVI/AAAAAAAA4DI/m4XwXRt2stgbbpdwDnMnv_gxawj8w1I0QCLcBGAsYHQ/s1600/madre-dibujos-animados-ninos-haciendo-ejercicio-estera_82574-9532.jpg',
    },
    {
        id: 6,
        name: 'Quemar el asado',
        difficulty: 'Intenso',
        description:
            'Rutina con cardio y un poco de musculacion, pero principalmente ejercicion aerobicos',
        time: '60min',
        image: 'https://uniandes.edu.co/sites/default/files/ejercicio-n.jpg',
        routines: [
            {
                id: 1,
                title: 'saltar la soga',
                duration: '10min',
                description: 'saltar la soga durante el tiempo determinado',
                image:
                    'https://www.parati.com.ar/wp-content/uploads/2020/07/SALTAR-SOGA.jpg',
            },
            {
                id: 2,
                title: 'brazos',
                duration: '10min',
                description: 'Mover los brazos en alguna maquina',
                image:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mancuernas-1559227736.jpg?resize=480:*',
            },
            {
                id: 3,
                title: 'abdominales',
                duration: '10min',
                description: 'hacer algun tipo de ejercico abdominal',
                image:
                    'https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/07/24/150724095542_deportes_abdominales_fotos_624x351_thinkstock.jpg',
            },
            {
                id: 4,
                title: 'trasero',
                duration: '10min',
                description: 'Mover los bote en alguna maquina',
                image:
                    'https://www.ictiva.com/blog/wp-content/uploads/2017/03/4-ejercicios-de-sentadillas-para-definir-los-gluteos.jpg',
            },
            {
                id: 5,
                title: 'estirar',
                duration: '10min',
                description:
                    'estirar todos los musculos que usaste para los ejercicios de hoy',
                image:
                    'https://yoelijocuidarme.es/wp-content/uploads/2020/03/estirar-articulaciones-620x420.jpg',
            },
        ],
    },
    {
        id: 7,
        name: 'Quemar el asado',
        difficulty: 'Intenso',
        description:
            'Rutina con cardio y un poco de musculacion, pero principalmente ejercicion aerobicos',
        time: '60min',
        routines: [
            {
                id: 1,
                title: 'saltar la soga',
                duration: '10min',
                description: 'saltar la soga durante el tiempo determinado',
                image:
                    'https://www.parati.com.ar/wp-content/uploads/2020/07/SALTAR-SOGA.jpg',
            },
            {
                id: 2,
                title: 'brazos',
                duration: '10min',
                description: 'Mover los brazos en alguna maquina',
                image:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mancuernas-1559227736.jpg?resize=480:*',
            },
            {
                id: 3,
                title: 'abdominales',
                duration: '10min',
                description: 'hacer algun tipo de ejercico abdominal',
                image:
                    'https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/07/24/150724095542_deportes_abdominales_fotos_624x351_thinkstock.jpg',
            },
            {
                id: 4,
                title: 'trasero',
                duration: '10min',
                description: 'Mover los bote en alguna maquina',
                image:
                    'https://www.ictiva.com/blog/wp-content/uploads/2017/03/4-ejercicios-de-sentadillas-para-definir-los-gluteos.jpg',
            },
            {
                id: 5,
                title: 'estirar',
                duration: '10min',
                description:
                    'estirar todos los musculos que usaste para los ejercicios de hoy',
                image:
                    'https://yoelijocuidarme.es/wp-content/uploads/2020/03/estirar-articulaciones-620x420.jpg',
            },
        ],
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhWRWvaN-nnK9vnUReBW0C_Op4PkvTqEaPM0_72ZYbHhQ-c5cC-VDIk5u-ZyVQWeCx6g&usqp=CAU',
    },
    {
        id: 8,
        name: 'Quemar el asado',
        difficulty: 'Intenso',
        description:
            'Rutina con cardio y un poco de musculacion, pero principalmente ejercicion aerobicos',
        time: '60min',
        routines: [
            {
                id: 1,
                title: 'saltar la soga',
                duration: '10min',
                description: 'saltar la soga durante el tiempo determinado',
                image:
                    'https://www.parati.com.ar/wp-content/uploads/2020/07/SALTAR-SOGA.jpg',
            },
            {
                id: 2,
                title: 'brazos',
                duration: '10min',
                description: 'Mover los brazos en alguna maquina',
                image:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mancuernas-1559227736.jpg?resize=480:*',
            },
            {
                id: 3,
                title: 'abdominales',
                duration: '10min',
                description: 'hacer algun tipo de ejercico abdominal',
                image:
                    'https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/07/24/150724095542_deportes_abdominales_fotos_624x351_thinkstock.jpg',
            },
            {
                id: 4,
                title: 'trasero',
                duration: '10min',
                description: 'Mover los bote en alguna maquina',
                image:
                    'https://www.ictiva.com/blog/wp-content/uploads/2017/03/4-ejercicios-de-sentadillas-para-definir-los-gluteos.jpg',
            },
            {
                id: 5,
                title: 'estirar',
                duration: '10min',
                description:
                    'estirar todos los musculos que usaste para los ejercicios de hoy',
                image:
                    'https://yoelijocuidarme.es/wp-content/uploads/2020/03/estirar-articulaciones-620x420.jpg',
            },
        ],
        image:
            'https://irutv.com/wp-content/uploads/2020/05/ejercicio-casa-768x432.jpg',
    },
    {
        id: 9,
        name: 'Corrre forest, corre!!',
        difficulty: 'Intenso',
        description:
            'Rutina con cardio y un poco de musculacion, pero principalmente ejercicion aerobicos',
        time: '60min',
        routines: [
            {
                id: 1,
                title: 'saltar la soga',
                duration: '10min',
                description: 'saltar la soga durante el tiempo determinado',
                image:
                    'https://www.parati.com.ar/wp-content/uploads/2020/07/SALTAR-SOGA.jpg',
            },
            {
                id: 2,
                title: 'brazos',
                duration: '10min',
                description: 'Mover los brazos en alguna maquina',
                image:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mancuernas-1559227736.jpg?resize=480:*',
            },
            {
                id: 3,
                title: 'abdominales',
                duration: '10min',
                description: 'hacer algun tipo de ejercico abdominal',
                image:
                    'https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/07/24/150724095542_deportes_abdominales_fotos_624x351_thinkstock.jpg',
            },
            {
                id: 4,
                title: 'trasero',
                duration: '10min',
                description: 'Mover los bote en alguna maquina',
                image:
                    'https://www.ictiva.com/blog/wp-content/uploads/2017/03/4-ejercicios-de-sentadillas-para-definir-los-gluteos.jpg',
            },
            {
                id: 5,
                title: 'estirar',
                duration: '10min',
                description:
                    'estirar todos los musculos que usaste para los ejercicios de hoy',
                image:
                    'https://yoelijocuidarme.es/wp-content/uploads/2020/03/estirar-articulaciones-620x420.jpg',
            },
        ],
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeLrsPOhaHP-acp84ix0LRKXyStBJzvCt0dw&usqp=CAU',
    },
    {
        id: 10,
        name: 'Quemar el asado',
        difficulty: 'Intenso',
        description:
            'Rutina con cardio y un poco de musculacion, pero principalmente ejercicion aerobicos',
        time: '60min',
        image:
            'https://www.parati.com.ar/wp-content/uploads/2020/05/GIMNASIA-EN-CASA-123RF-1024x756.jpg',
        routines: [
            {
                id: 1,
                title: 'saltar la soga',
                duration: '10min',
                description: 'saltar la soga durante el tiempo determinado',
                image:
                    'https://www.parati.com.ar/wp-content/uploads/2020/07/SALTAR-SOGA.jpg',
            },
            {
                id: 2,
                title: 'brazos',
                duration: '10min',
                description: 'Mover los brazos en alguna maquina',
                image:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mancuernas-1559227736.jpg?resize=480:*',
            },
            {
                id: 3,
                title: 'abdominales',
                duration: '10min',
                description: 'hacer algun tipo de ejercico abdominal',
                image:
                    'https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/07/24/150724095542_deportes_abdominales_fotos_624x351_thinkstock.jpg',
            },
            {
                id: 4,
                title: 'trasero',
                duration: '10min',
                description: 'Mover los bote en alguna maquina',
                image:
                    'https://www.ictiva.com/blog/wp-content/uploads/2017/03/4-ejercicios-de-sentadillas-para-definir-los-gluteos.jpg',
            },
            {
                id: 5,
                title: 'estirar',
                duration: '10min',
                description:
                    'estirar todos los musculos que usaste para los ejercicios de hoy',
                image:
                    'https://yoelijocuidarme.es/wp-content/uploads/2020/03/estirar-articulaciones-620x420.jpg',
            },
        ],
    },
]

export default routines
