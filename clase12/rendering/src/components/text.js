function Text({ variant, value, isDarkMode }) {

  if (variant === "title") {
    return (
      <h1 className={isDarkMode ? "text-dark" : "text-light"}>
        {value}
      </h1>
    )
  }

  return (
    <div className={isDarkMode ? "text-dark" : "text-light"}>
      {value}
    </div>
  )
}

export default Text;


  // function renderText() {
  //   switch (variant) {
  //     case "title":
  //       return (
  //         <h1 className={isDarkMode ? "text-dark" : "text-light"}>
  //           {value}
  //         </h1>  
  //       )
  //       break;

  //     default: 
  //       return (
  //         <div className={isDarkMode ? "text-dark" : "text-light"}>
  //           {value}
  //         </div>
  //       )
  //     } 
  //   }
