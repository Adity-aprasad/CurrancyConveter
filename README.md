# Currency Converter

A simple React Native application that allows users to convert amounts in Indian Rupees (INR) to other currencies using predefined conversion rates. The app provides a clean and visually appealing interface with intuitive usability.

## Features
- Convert INR to various currencies such as Dollar, Dinar, Euro, Yen, Pound, Ruble, Real, Taka, and USD.
- Displays conversion results with accurate calculations up to two decimal places.
- User-friendly UI with an enhanced design.
- Displays error messages for invalid input or missing data.
- Interactive buttons with press feedback.

## Screenshots
Include relevant screenshots here to showcase the UI and functionality.

## Technologies Used
- **React Native**: For building the mobile application.
- **Expo**: For development, debugging, and building the app.

## How to Run the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   ```

2. **Install Dependencies**
   Ensure you have `npm` or `yarn` installed, then run:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Application**
   Use Expo to start the app:
   ```bash
   expo start
   ```
   This will open Expo DevTools in your browser. Scan the QR code with your mobile device (requires the Expo Go app) or use an emulator to view the app.

## Folder Structure
```
project-folder
├── App.js          # Main application file
├── package.json    # Project metadata and dependencies
├── node_modules    # Installed dependencies
└── assets          # Place for images or other static resources
```

## Usage
1. Open the app on your mobile device or emulator.
2. Enter the amount in INR in the input field.
3. Tap on any currency button to see the converted value.
4. The result will display in the format: `amount INR = converted_value TARGET_CURRENCY`.

## Customization
To add more currencies or modify the existing rates, update the `data` array in the `App.js` file:
```javascript
const data = [
  { id: '1', title: 'Dollar', value: 84 },
  { id: '2', title: 'Dinar', value: 103 },
  // Add more currencies here
];
```

## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

## Contributions
Contributions are welcome! Feel free to open an issue or submit a pull request to enhance the application.

## Contact
For any inquiries or feedback, please reach out at your-adityarajprasad882@gmail.com or open an issue in the repository.

---

Enjoy using the Currency Converter app! 🚀

