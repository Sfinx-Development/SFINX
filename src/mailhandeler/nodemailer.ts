import axios from "axios";
import { Customer } from "../contexts/customerContext";

export const sendEmail = async (customer: Customer) => {
  try {
    const customerName = `Kundens namn : ${customer.name}`;
    const customerEmail = `Kundens email : ${customer.email}`;
    const customerPhone = `Kundens email : ${customer.phone}`;
    const customerAddress = `Kundens adress: ${customer.address} ${customer.zipcode} ${customer.city}`;
    const customerPurpose = `Syfte med applikationen: ${customer.purposeApp}`;
    const customerApp = `Typ av appplikation: ${customer.typeOfApp}`;
    const customerTargetGroup = `Målgrupp som vi riktar in oss på: ${customer.targetGroup}`;
    const customerBudget = `Budget: ${customer.budgetDescription}`;
    const customerExtra = `Övrigt: ${customer.extraDescription}`;

    const isCompany = `Är företag : ${customer.isCompany}`;
    let companyName = "";
    let companyDescription = "";
    if (isCompany) {
      companyName = `Företagets namn: ${customer.companyName}`;
      companyDescription = `Företagets beskrivning: ${customer.companyDescription}`;
    }
    const emailText = `${customerName}\n${customerEmail}\n${customerPhone}\n${customerAddress}\n${customerPurpose}\n${customerTargetGroup}\n${customerApp}\n${customerBudget}\n${customerExtra}\n${isCompany}\n${companyName}\n${companyDescription}`;

    const response = await axios.post("/send-email", {
      recipient: "angelinaholmqvist@live.se",
      subject: "En kundförfrågan",
      text: emailText,
    });

    console.log(response.data.message);
  } catch (error) {
    console.error("Nätverksfel:", error);
  }
};
