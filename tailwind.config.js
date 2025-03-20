 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      sm:"340px",
      md:"540px",
      lg:"768px",
      xl:"1180px"
    },
    extend: {
      keyframes:{
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },

        
        
      },
      animation: {
        slideLeft: "slideInLeft 2s ease-out",
        slideRight: "slideInRight 2s ease-out",
  
      }
    
    },
    fontFamily:{
      jost:["Jost", "sans-serif"],
      Loster:["Lobster", "sans-serif"]
      
    },
    container:{
      center:true,
      padding:{
        DEFAULT:"12px",
        md:"32px"

      }
    }
  },

  plugins: [],
}