// //Working code final one
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [recommendedImages, setRecommendedImages] = useState([]);

  // Function to handle image selection
  const selectImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage(pickerResult.uri);
    // Send image to server
    sendImageToServer(pickerResult);
  };

  // Function to send image to Flask server
  const sendImageToServer = async (image) => {
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: image.uri,
        type: 'image/jpeg',
        name: 'image.jpg',
      });

      const response = await axios.post('http://Your Flask Server/recommendation', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data && response.data.recommended_image_urls) {
        setRecommendedImages(response.data.recommended_image_urls);
        console.log(response.data)
      } else {
        console.error('Invalid response format:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={selectImage}>
        <View style={styles.imageContainer}>
          {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
          {!selectedImage && <Text>Select Image</Text>}
        </View>
      </TouchableOpacity>
      <View>
        <Text>Recommended Images:</Text>
        <View style={styles.recommendedImagesContainer}>
          {recommendedImages.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.recommendedImage} />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 200,
    height: 200,
    backgroundColor: 'gray',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  recommendedImagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  recommendedImage: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default Upload;




// // Import necessary libraries
// import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { COLORS } from "../constants";
// import * as ImagePicker from "expo-image-picker";
// import axios from 'axios';

// const Upload = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [recommendedImages, setRecommendedImages] = useState([]);

//   const decodeBase64Image = base64String => {
//   if (base64String) {
//     const base64Data = base64String.split(',')[1];
//     return { uri: `data:image/jpeg;base64,${base64Data}` };
//   } else {
//     // Handle the case where base64String is undefined
//     // You can return a default image or null, or handle it in any other way
//     return null;
//   }
// };

//   // Function to handle image selection
//   const selectImage = async () => {
//     let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (permissionResult.granted === false) {
//       alert('Permission to access camera roll is required!');
//       return;
//     }

//     let pickerResult = await ImagePicker.launchImageLibraryAsync();
//     if (pickerResult.canceled === true) {
//       return;
//     }

//     setSelectedImage(pickerResult.assets[0].uri);
//     // Send image to server
//     sendImageToServer(pickerResult);
//   };

//   // Function to send image to Flask server
//   const sendImageToServer = image => {
//     const data = new FormData();
//     data.append('image', {
//       uri: image.uri,
//       type: 'image/jpeg',
//       name: 'image.jpg',
//     });

//     fetch('http://10.7.224.204:5000/recommendation', {
//       method: 'POST',
//       body: data,
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data); // Log the response
//         if (data && data.recommended_images) {
//           setRecommendedImages(data.recommended_images);
//         } else {
//           console.error('Invalid response format:', data);
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <TouchableOpacity onPress={selectImage}>
//         <View style={{ width: 200, height: 200, backgroundColor: 'gray', marginBottom: 20 }}>
//           {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: '100%', height: '100%' }} />}
//           {!selectedImage && <Text>Select Image</Text>}
//         </View>
//       </TouchableOpacity>
//       <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
//   {recommendedImages.map((image, index) => (
//     <Image key={index} source={decodeBase64Image(image.bytes)} style={{ width: 100, height: 100, margin: 5 }} />
//   ))}
// </View>
//     </View>
//   );
// };

//get url

// /*This is the working code */
// import React, { useState } from 'react';
// import { View, Button, Image, StyleSheet } from 'react-native';

// const App = () => {
//   const [imageUri, setImageUri] = useState(null);

//   const handleGetImage = async () => {
//     try {
//       const response = await fetch('http://192.168.1.194:6000/get_image');
//       const data = await response.json();
//       setImageUri(data.image_url); // Corrected to use data.image_url
//       console.log(data)
//     } catch (error) {
//       console.error('Error fetching image:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
//       <Button title="Get Image" onPress={handleGetImage} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginVertical: 20,
//   },
// });

// export default App;

/*to get from csv */
// import React, { useState } from 'react';
// import { View, Button, Image, StyleSheet, Text } from 'react-native';

// const App = () => {
//   const [imageUri, setImageUri] = useState(null);
//   const [imageName, setImageName] = useState(null);

//   const handleGetImage = async () => {
//     try {
//       const response = await fetch('http://10.7.225.49:5000/get_image');
//       const data = await response.json();
//       setImageUri(data.image_url); // Use the received image URL
//       setImageName(data.image); // Use the received image name
//       console.log(data)
//     } catch (error) {
//       console.error('Error fetching image:', error);
//     }
//   };
//   return (
//     <View style={styles.container}>
//       {imageUri && (
//         <>
//           <Image source={{ uri: imageUri }} style={styles.image} />
//        <Text>{imageName}</Text>
//         </>
//       )}
//       <Button title="Get Image" onPress={handleGetImage} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginVertical: 20,
//   },
// });

// export default App;

// import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { COLORS } from "../constants";
// import * as ImagePicker from "expo-image-picker";
// import { ScrollView } from "react-native-gesture-handler";

// const Upload = () => {
//   const [image, setImage] = useState(null);
//     // Product data is defined inside the Upload function
//   const products = [
//     {
//       id: 42419,
//       Category: "Apparel",
//       Gender: "Men",
//       Title: "Dark Fur Hoodie",
//       image: require("../assets/0500362002.jpg"),
//       price: "250",
//       description: "Stylish and comfortable girl's apparel designed to showcase individuality and express personal fashion preferences, offering a blend of trendy patterns, vibrant colors, and quality materials",
//     },
//     {
//       id: 12345,
//       Category: "Apparel",
//       Gender: "Men",
//       Title: "Green Zipper Hoodie",
//       image: require("../assets/0500362001.jpg"),
//       price: "300",
//       description: "Adorable and fashionable girl's dress featuring a cute floral print, perfect for special occasions and everyday wear. Made with high-quality fabric for comfort and style.",
//     },
//     {
//       id: 34009,
//       Category: "Apparel",
//       Gender: "Men",
//       Title: "Warm Black Zipper",
//       image: require("../assets/0500363001.jpg"),
//       price: "200",
//       description: "Stylish and comfortable Warm apparel designed to showcase individuality and express personal fashion preferences, offering a blend of trendy patterns, vibrant colors, and quality materials",
//     }
//   ];


//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Upload Image</Text>

//       {!image ? (
//         // Display a placeholder image if no image has been uploaded
//         <Image source={require("../assets/upload.png")} style={styles.placeholderImage} />
//       ) : (
//         // Display the uploaded image
//         <Image source={{ uri: image }} style={styles.uploadedImage} />
//       )}
//         <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
//         <Text style={styles.uploadButtonText}>Upload Image</Text>
//       </TouchableOpacity>

//       {image && (
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
//           <View style={styles.cardContainer}>
//             {products.map((product) => (
//               <View key={product.id} style={styles.card}>
//                 <Image source={product.image} style={styles.cardImage} />
//                 <Text style={styles.cardTitle}>{product.Title}</Text>
                
//               </View>
//             ))}
//           </View>
//         </ScrollView>
//       )}
//     </SafeAreaView>
//   );
// };

// export default Upload;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     paddingTop: 20,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: COLORS.black,
//     marginBottom: 20,
//   },
//   uploadedImage: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   placeholderImage: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//     resizeMode: 'contain',
//   },
//   uploadButton: {
//     backgroundColor: COLORS.primary,
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     marginBottom: 20,
//   },
//   uploadButtonText: {
//     color: COLORS.white,
//     fontSize: 18,
//   },
//   scrollView: {
//     paddingHorizontal: 20,  // Horizontal padding for the scroll view
//   },
//   cardContainer: {
//     flexDirection: 'row',
//     flexWrap: 'nowrap',
//     justifyContent: 'center',
//   },
//   card: {
//     width: 120,
//     height: 170,
//     borderRadius: 10,
//     backgroundColor: COLORS.lightWhite,
//     alignItems: 'center',
//     padding: 10,
//     marginHorizontal: 5,  // Space between cards
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//     elevation: 3,
//   },
//   cardImage: {
//     width: '100%',
//     height: 100,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   cardTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   cardPrice: {
//     fontSize: 12,
//   },
// });
