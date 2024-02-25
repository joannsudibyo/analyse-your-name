# Name Analyser

Welcome to Name Analyser! This application predicts the origin country, gender, and age associated with a given name. It's built using Next.js and Tailwind CSS.

## Overview

This project was inspired by a YouTube tutorial which provided the initial idea and guidance. 

Name Analyser utilises various APIs to provide accurate predictions regarding the origin, gender, and age of a given name. The main features include:

- Prediction of the country of origin based on the given name.
- Prediction of the gender associated with the name.
- Estimation of the age group typically associated with the name.

## Getting Started

To run this application locally, follow these steps:

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/your-username/name-analyser.git
   ```

2. Navigate to the project directory.
   ```bash
   cd my-app
   ```

3. Install the dependencies.
   ```bash
   npm install
   ```

4. Start the development server.
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## APIs Used

This application relies on the following APIs:

- **Name Origin API**: This API predicts the country of origin based on the provided name.
  - [Link to API](https://nationalize.io/)

- **Gender Prediction API**: This API predicts the gender associated with the provided name.
  - [Link to API](https://genderize.io/)

- **Age Age Estimation API**: This API estimates the age group associated with the provided name.
  - [Link to API](https://agify.io/)

- **Country Translation API**: This API translates the country code to its full name. (This is an addition and not covered in the YouTube tutorial)
  - [Link to API](https://restcountries.com)

## Usage

Once the application is running, you can simply enter a name into the input field and click the "Analyse" button. The application will then display predictions regarding the name's origin country, gender, and age group.

## Contributing

Contributions are welcome! If you find any bugs or want to improve the application, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README according to your project's specific details and requirements!