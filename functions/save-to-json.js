import fs from "fs/promises";

const saveToJSON = async (customer) => {
  try {
    // Läs befintlig data från filen om den finns
    let existingData = [];
    try {
      const existingDataJson = await fs.readFile("customerData.json", "utf-8");
      existingData = JSON.parse(existingDataJson);
    } catch (readError) {
      // Filen kanske inte finns än, vilket är ok
    }

    // Lägg till ny kunddata till befintlig data
    existingData.push(customer);

    // Skriv tillbaka filen med den nya datan
    const jsonData = JSON.stringify(existingData, null, 2);
    await fs.writeFile("customerData.json", jsonData);

    console.log("Data added to customerData.json");
  } catch (error) {
    console.error("Error saving data:", error);
    throw error; // Kasta felet så att det fångas upp av funktionens "catch" i handler
  }
};

exports.handler = async (event) => {
  try {
    const customer = JSON.parse(event.body);
    await saveToJSON(customer);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Data saved successfully" }),
    };
  } catch (error) {
    console.error("Error saving data:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error saving data" }),
    };
  }
};
