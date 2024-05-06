import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: 174,
    height: 240,
    marginHorizontal: SIZES.medium / 2,  // Adding space uniformly around the card
    borderRadius: 12,                    // Using a moderate border radius
    backgroundColor: COLORS.lightWhite,
    overflow: 'hidden',                 // Ensuring nothing spills out of the card boundaries
    elevation: 1,                      
    shadowOpacity: 0.22,
    shadowRadius: 2.22, 
                  
  },
  imagecontainer: {
    height: 140,                     
    width: '100%',                     
    alignItems: 'center',             
    justifyContent: 'center',          
    overflow: 'hidden',                
  },
  image: {
    width: '80%',                      // Image takes full width of its container
    height: '100%',                     // Image takes full height of its container
    resizeMode: 'cover',                // Ensures the image covers the available space without distortion
  },
  details: {
    padding: 10,                        // Padding inside the details container
    alignItems: 'center',               // Centers the text elements horizontally
  },
  title: {
    fontFamily: "bold",
    fontSize: 16,                       // Slightly larger font for better legibility
    color: COLORS.darkGray,             // Ensuring text color contrasts well with background
  },
  supplier: {
    fontFamily: "regular",
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 5,                    // Space between supplier text and price
  },
  price: {
    fontFamily: "bold",
    fontSize: 15,                       // Uniform font size for price
    color: COLORS.black,                // Bold color for price to stand out
  },
  btn: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: COLORS.transparent, // Optional: Make background transparent if needed
  }
});

export default styles;
