tailwind.config = {
    theme:{
        extend:{
        gridTemplateColumns:{
            'auto':'repeat(auto-fit, minmax(200px, 1fr))'
        },
        fontfamily:{
            Outfit:[ "Outfit", "sans-serif"],
            Ovo: ["Ovo", "serif"]
        },
        animation:{
            spin_slow:'spin 6s linear infinite'
        },
        colors:{
            lightHover:'#FCF4FF',
            darkHover:'#2A004A',
            darkTheme:'#11001F'
        },
        boxshadow:{
            'black':'4px 4px 0 #000',
            'white':'4px 4px 0 #fff',
        }
    }
},

       darkMode:'selector'

}