import fs from "fs/promises";
import path from "path";

const saveToJSON = async (customer) => {
  try {
    // Skapa en textrepresentation av kunddata
    const customerJson = JSON.stringify(customer, null, 2);
    const filePath = path.join(process.cwd(), "customerData.json");
    console.log("FILVÄG: ", filePath);
    // Kontrollera om filen är tom
    const fileContent = await fs.readFile(filePath, "utf-8");
    const isArrayEmpty = fileContent.trim() === "";

    // Formatera kunddata som JSON-array
    const formattedData = isArrayEmpty
      ? `[${customerJson}]`
      : `${fileContent.slice(0, -1)},\n${customerJson}]`;

    // Skriv tillbaka filen med den nya datan
    await fs.writeFile(filePath, formattedData);

    console.log("Data added to customerData.json");
  } catch (error) {
    console.error("Error saving data:", error);
    throw error;
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
